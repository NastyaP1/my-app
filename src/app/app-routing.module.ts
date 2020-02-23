import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapPageComponent } from './mapPage/app.mapPageComponent';
import {HomePageComponent } from './homePage/app.homePageComponent';
import {LandmarkPageComponent } from './landmarkPage/app.landmarkPageComponent';
import {PopularLandmarksPageComponent } from './popularLandmarksPage/app.popularLandmarksPageComponent';
import {WayPageComponent } from './wayPage/app.wayPageComponent';
import {ProfilePageComponent} from './profilePage/app.profilePageComponent';
import {MyWaysPageComponent} from './myWaysPage/app.myWaysPageComponent';
import {MyFavoritePlacesPageComponent} from './myFavoritePlacesPage/app.myFavoritePlacesPageComponent';

const routes: Routes = [
  {
    path: 'mapPage',
    component: MapPageComponent
  },

  {
    path: 'homePage',
    component: HomePageComponent
  },
  {
    path: 'landmarkPage',
    component: LandmarkPageComponent
  },
  {
    path: 'popularLandmarksPage',
    component: PopularLandmarksPageComponent
  },
  {
    path: 'wayPage',
    component: WayPageComponent
  },
  {
    path: 'profilePage',
    component: ProfilePageComponent
  },
  {
    path: 'myWaysPage',
    component: MyWaysPageComponent
  },
  {
    path: 'myFavoritePlacesPage',
    component: MyFavoritePlacesPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
