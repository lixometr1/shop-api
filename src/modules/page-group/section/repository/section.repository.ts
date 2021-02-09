import { DefaultRepository } from 'src/internal';
import { EntityRepository, Repository } from 'typeorm';
import { Section } from '../entities/section.entity';

@EntityRepository(Section)
export class SectionRepository extends DefaultRepository<Section> {
    
}