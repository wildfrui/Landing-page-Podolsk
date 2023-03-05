import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { LocalFileDto } from './dto/localFile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalFileEntity } from './entities/localFile.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(LocalFileEntity)
    private fileRepository: Repository<LocalFileEntity>,
  ) {}

  async createFile(file, type: string) {
    console.log(file);
    try {
      const fileName = uuid.v4() + '.jpg';
      const shortPath = 'static/' + type;
      const filePath = path.resolve(__dirname, '..', shortPath);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      const finalPath = type + '/' + fileName;
      const fileData = await this.saveLocalFileData({
        filename: fileName,
        path: finalPath,
        mimetype: file.mimetype,
      });
      // console.log(fileData);
      return fileData;
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при записи файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async saveLocalFileData(fileData: LocalFileDto) {
    const newFile = await this.fileRepository.create({
      filename: fileData.filename,
      path: fileData.path,
      mimetype: fileData.mimetype,
    });
    await this.fileRepository.save(newFile);
    return {
      success: 1,
      file: {
        url: `http://localhost:5000/${fileData.path}`,
      },
      meta: { ...newFile },
    };
  }
}
