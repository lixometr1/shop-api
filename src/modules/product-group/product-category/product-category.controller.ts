import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, Req, SerializeOptions } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ControllerBlueprint } from 'src/blueprints/controller';
import { GetRequestPayload, ID, SerializeGroup } from 'src/internal';
import { ProductService } from '../product/product.service';
import { AppRequest, NoAuthRequest } from 'src/internal';
import { RequestPayload } from 'src/helpers';

@Controller('category')
export class ProductCategoryController extends ControllerBlueprint {
  constructor(private readonly itemService: ProductCategoryService,
    private productService: ProductService
  ) { super(itemService) }

  @Post()
  async create(@Body() data: CreateProductCategoryDto, @GetRequestPayload() requestPayload: RequestPayload) {
    return this.itemService.create({ data }, requestPayload)
  }
  @Put()
  async update(@Param('id', new ParseIntPipe()) id: ID, @Body() data: UpdateProductCategoryDto, @GetRequestPayload() requestPayload: RequestPayload) {
    return super.update(id, data, requestPayload)
  }

  @Get('/tree')
  findTrees() {
    return this.itemService.findTrees({})
  }

  @Get('id/:id/breadcrumbs')
  findBreadcrumbs(@Param('id', new ParseIntPipe()) id: ID,) {
    return this.itemService.findBreadcrumbsById({ id })
  }

  @Get('id/:id/children')
  findChildren(@Param('id', new ParseIntPipe()) id: ID,) {
    return this.itemService.findChildrenById({ id })
  }

  @Get('id/:id/children-tree')
  findChildrenTree(@Param('id', new ParseIntPipe()) id: ID,) {
    return this.itemService.findChildrenTreeById({ id })
  }

  @Get('id/:id/parents')
  findParents(@Param('id', new ParseIntPipe()) id: ID,) {
    return this.itemService.findParentsById({ id })
  }

  @Get('id/:id/parents-tree')
  findParentsTree(@Param('id', new ParseIntPipe()) id: ID,) {
    return this.itemService.findParentsTreeById({ id })
  }

  @Get('id/:id/products')
  fiindProductsById(@Param('id', new ParseIntPipe()) id: ID, @Req() request: NoAuthRequest) {
    return this.productService.findByCategoryId({ id }, new RequestPayload({ request }))
  }

}