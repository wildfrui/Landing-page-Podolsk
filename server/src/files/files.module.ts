import { LocalFileEntity } from './entities/localFile.entity';
import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LocalFileEntity])],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
