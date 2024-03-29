import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'search',
    component:SearchComponent,
  },
  {
    path:'profile',
    component:ProfileComponent,
  },
  {
    path:'details/:id',
    component:PlaylistDetailsComponent,
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
