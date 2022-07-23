import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video.component';

const routes: Routes = [
  {path : '', component : VideoComponent},
  {path : '1', component : VideoComponent},
  {path : '2', component : VideoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
