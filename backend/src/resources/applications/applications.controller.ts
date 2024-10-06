import {
  Body,
  Controller,
  Delete,
  Get,
  Ip,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('cv'))
  create(
    @Body() createApplicationDto: CreateApplicationDto,
    @UploadedFile() cv: Express.Multer.File,
    @Ip() ip: string,
  ) {
    return this.applicationsService.saveApplication({
      ...createApplicationDto,
      cv,
      ip,
    });
  }

  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get('canSubmit')
  public canSubmit(@Ip() ip: string) {
    return this.applicationsService.allowedToSubmit(ip);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ) {
    return this.applicationsService.update(+id, updateApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationsService.remove(+id);
  }
}
