import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Location } from 'src/app/domens/location';
import {DataService} from 'src/app/services/data.service';
import {HttpService} from 'src/app/services/http.service';
import { Data } from 'src/app/domens/data';
import { Way } from 'src/app/domens/way';

@Component({
  templateUrl: './myWaysPage.html',
  styleUrls: ['./app.myWaysPageComponent.scss']

})
export class MyWaysPageComponent{
  name = "В Берлине";
  address = "Берлин, Германия";
  cityName = "Берлин";
  photo = "/assets/img/Berlin.jpg";
}
