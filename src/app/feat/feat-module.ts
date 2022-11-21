import { NgModule } from '@angular/core';
// import {TableBasicExample} from './app/table-basic-example';
import {
  FeatOneComponent,
  FeatDynamicComponent,
  FeatDynamic2Component,
} from './feat-one';
import { TableModule } from '../table/table-module';
import { SatPopoverModule } from '@ncstate/sat-popover';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [TableModule, SatPopoverModule],
  entryComponents: [FeatDynamicComponent, FeatDynamic2Component],
  declarations: [FeatOneComponent, FeatDynamicComponent, FeatDynamic2Component],
  exports: [FeatOneComponent],
  providers: [],
})
export class FeatModule {}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
