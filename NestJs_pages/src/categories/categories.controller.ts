import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  //Kategori Oluşturma
  @Post()
  async create(@Body('name') name: string) {
    return await this.categoriesService.createCategory(name);
  }

  @Get()
  async findAll() {
    const categories = await this.categoriesService.findAllCategory();
    return { categories };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const categories = await this.categoriesService.findCategoryById(id);
    return { categories };
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body('name') newName: string) {
    return await this.categoriesService.updateCategory(id, newName);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.categoriesService.deleteCategory(id);
  }
}
