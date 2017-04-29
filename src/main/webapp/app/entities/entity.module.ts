import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BaseBlogModule } from './blog/blog.module';
import { BaseEntryModule } from './entry/entry.module';
import { BaseTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BaseBlogModule,
        BaseEntryModule,
        BaseTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseEntityModule {}
