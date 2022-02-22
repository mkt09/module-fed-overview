import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PsmOverviewComponent } from './psm-overview.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [  
  { path: '', component: PsmOverviewComponent }  
 ];  

@NgModule({
  declarations: [PsmOverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PsmOverviewModule { }
