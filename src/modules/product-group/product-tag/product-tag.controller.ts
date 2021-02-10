import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductTagService } from './product-tag.service';
import { CreateProductTagDto } from './dto/create-product-tag.dto';
import { UpdateProductTagDto } from './dto/update-product-tag.dto';
import { ControllerBlueprint } from 'src/blueprints/controller';
import { AuthAdmin, ID } from 'src/internal';
import { GetRequestPayload, RequestPayload } from 'src/internal';
import { ProductTagName } from './product-tag.constants';

@Controller('product-tag')
export class ProductTagController extends ControllerBlueprint {
  public name = ProductTagName
  constructor(private readonly productTagService: ProductTagService) { super(productTagService) }

  @AuthAdmin()
  @Post()
  create(@Body() createProductTagDto: CreateProductTagDto, @GetRequestPayload() requestPayload: RequestPayload) {
    return this.productTagService.create({ data: createProductTagDto }, requestPayload);
  }

  @AuthAdmin()
  @Put('id/:id')
  async update(@Param('id') id: ID, @Body() updateProductTagDto: UpdateProductTagDto, @GetRequestPayload() requestPayload: RequestPayload): Promise<any> {
    return this.productTagService.updateById({ id, data: updateProductTagDto }, requestPayload);
  }

}
