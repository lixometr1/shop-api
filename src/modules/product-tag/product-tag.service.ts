import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ServiceBlueprint } from 'src/blueprints/service';
import { ProductTag } from './entities/product-tag.entity';
import { ProductTagRepository } from './repository/product-tag.repository';

@Injectable()
export class ProductTagService extends ServiceBlueprint<ProductTag>{
  public name = 'productTag'
  constructor(private productTagRepository: ProductTagRepository, private eventEmiter: EventEmitter2) { super(productTagRepository, eventEmiter) }
 
}
