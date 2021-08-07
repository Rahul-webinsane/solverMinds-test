import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PractiseRoutingModule } from './practise-routing.module';
import { LearnComponent } from './learn/learn.component';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [LearnComponent, TestingComponent],
  imports: [
    CommonModule,
    PractiseRoutingModule
  ]
})
export class PractiseModule { }
