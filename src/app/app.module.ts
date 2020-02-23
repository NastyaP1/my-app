import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef, NgZone} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import {AgmCoreModule, MapsAPILoader, MouseEvent, AgmMap  } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmDirectionModule } from 'agm-direction';

import { FormComponent } from './form/app.formComponent';
import { HeaderComponent } from './header/app.headerComponent';
import {FooterComponent } from './footer/app.footerComponent';
import {TimeSliderComponent } from './form/sliders/timeSlider/app.slider.timeComponent';
import {FinanceSliderComponent } from './form/sliders/financeSlider/app.slider.financeComponent';
import {DropDownComponent } from './header/dropdown/app.dropdownComponent';
import {MapPageComponent } from './mapPage/app.mapPageComponent';
import {MapFormComponent } from './map/app.MapComponent';
import {HomePageComponent } from './homePage/app.homePageComponent';
import {LandmarkPageComponent } from './landmarkPage/app.landmarkPageComponent';
import {PopularLandmarksPageComponent } from './popularLandmarksPage/app.popularLandmarksPageComponent';
import {WayPageComponent } from './wayPage/app.wayPageComponent';
import {DataService} from 'src/app/services/data.service';
import {HttpService} from 'src/app/services/http.service';
import {ProfilePageComponent} from './profilePage/app.profilePageComponent';
import {MyWaysPageComponent} from './myWaysPage/app.myWaysPageComponent';
import {MyFavoritePlacesPageComponent} from './myFavoritePlacesPage/app.myFavoritePlacesPageComponent';
import {ProfileSidebarComponent} from './profileSidebar/app.profileSidebarComponent';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    TimeSliderComponent,
    FinanceSliderComponent,
    DropDownComponent,
    MapPageComponent,
    MapFormComponent,
    HomePageComponent,
    LandmarkPageComponent,
    PopularLandmarksPageComponent,
    WayPageComponent,
    ProfilePageComponent,
    MyWaysPageComponent,
    MyFavoritePlacesPageComponent,
    ProfileSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    SidebarModule.forRoot(),
    FormsModule,
    Ng5SliderModule,
    NgbModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMgGGii-qFTTx5Obv-gwHljLtZbt8fAbQ',
      libraries: ['places']
    })
  ],
  providers: [DataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
