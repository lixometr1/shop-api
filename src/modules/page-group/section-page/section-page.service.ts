import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ServiceBlueprint } from 'src/blueprints/service';
import { RequestPayload } from 'src/internal';
import { SectionPage } from './entities/section-page.entity';
import { SectionPageRepository } from './repository/section-page.repository';

@Injectable()
export class SectionPageService extends ServiceBlueprint<SectionPage>{
  public name = 'section-page'
  constructor(private sectionPageRepository: SectionPageRepository, private eventEmiter: EventEmitter2) { super(sectionPageRepository, eventEmiter) }
  async findBySectionId({id}, payload: RequestPayload) {
    return this.sectionPageRepository.findBySectionId({id}, payload)
  }
}
