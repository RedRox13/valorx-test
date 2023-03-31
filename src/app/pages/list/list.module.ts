import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [ListPageComponent, SearchBoxComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
