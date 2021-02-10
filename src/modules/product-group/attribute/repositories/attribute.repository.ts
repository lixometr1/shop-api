import { DefaultRepository } from 'src/blueprints';
import { Attribute } from 'src/internal';
import { EntityRepository, Repository } from 'typeorm';
import { AttributeName } from '../attribute.constants';

@EntityRepository(Attribute)
export class AttributeRepository extends DefaultRepository<Attribute> {
    public name = AttributeName
}
