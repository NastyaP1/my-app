import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Location } from 'src/app/domens/location';
import {DataService} from 'src/app/services/data.service';
import {HttpService} from 'src/app/services/http.service';
import { Data } from 'src/app/domens/data';
import { Way } from 'src/app/domens/way';

@Component({
  templateUrl: './popularLandmarksPage.html',
  styleUrls: ['./app.popularLandmarksPageComponent.scss']

})
export class PopularLandmarksPageComponent implements OnInit{
  locations: Array<Location>;
  test;
  label = "Добавлено";
  photo: Array<string>;
  name:Array<string>;
  cityName: string;
  address:  Array<string>;
  city: Location;
  cityLocation: Array<Location> ;
  types:  Array<any>;
  number: string;
  rating: Array<number>;
  photos: Array<string>;
  visibility: boolean = true;
  index: number = -1;
  dataLM: Array<Data>;
  pt: string = "";
  wayArray: Array<Location> = new Array<Location>();
  ind: number = 0;
  prev = this.locations;
  way: Way;

  toggle(){
    this.visibility=!this.visibility;
  }

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private data: DataService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.data.currentLocations.subscribe(loc => this.cityLocation = [{lat:loc[0].lat, lng:loc[0].lng, zoom: 15, placeId:loc[0].placeId,  choose: false}]);
    this.setPopPlaces();
    this.data.currentCityName.subscribe(ads => this.cityName = ads);
  }

  loadMorePopPlaces(){
    this.prev = this.locations;
    this.setPopPlaces();
    this.locations = this.prev.concat(this.locations);
  }

  setPopPlaces(){
    this.city = this.cityLocation[0];
    console.log(this.city);
    this.httpService.getPopPlaces(this.city, this.index, this.pt).subscribe(city => {this.test = city['results'];
    this.pt = city['next_page_token'];
    this.test.sort(function (a, b) {
        if (a['rating'] < b['rating']) {
          return 1;
        }
        if (a['rating'] > b['rating']) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      console.log(this.test);
      var ratings = [];
      var names = [];
      var addresses = [];
      var locats = [];
      var ref = [];
      var types = [];
      this.test.forEach((loc) => {
        if(loc['photos']){
          names.push(loc['name']);
          addresses.push(loc['vicinity']);
          locats.push({lat: loc['geometry']['location']['lat'],lng: loc['geometry']['location']['lng'], zoom: 15, placeId: loc['place_id'],  choose: false});
          ref.push(loc['photos'][0]['photo_reference']);
          ratings.push(loc['rating']);
          types.push(loc['types']);
        }
      });
      var photoRes = [];
      ref.forEach(ph => {
        photoRes.push('https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference='+ph+'&key=AIzaSyBMgGGii-qFTTx5Obv-gwHljLtZbt8fAbQ')
      });
      this.photo = photoRes;
      console.log(ref);
      //console.log(locats[0].placeId);
      this.rating = ratings;
      this.name = names;
      this.address = addresses;
      this.locations = locats;
      this.types = types;

      var data = [];
      for(var i= 0;i < photoRes.length; i++ )
      {
        data.push({photo: this.photo[i],
          address:  this.address[i],
          name: this.name[i],
          index: i,
          isAdded: false
        });
      }

      this.dataLM=data;

      //var t = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='+locats[0].placeId+'&key=AIzaSyBMgGGii-qFTTx5Obv-gwHljLtZbt8fAbQ';
      //console.log('fffff' + t);
      //this.number = t['result']['international_phone_number'];
    });
  }
  setIndex(index: number){
    this.index = index;
  }

  changePopularLocations(){
    console.log(this.locations);
    this.data.changeLocations(this.locations);
  }

  /*getDetails(placeId: string){
  this.httpService.getData(placeId).subscribe( value =>{
      //this.name = value['result']['name'];
      //this.address = value['result']['formatted_address'];
      //this.rating = value['result']['rating'];
      this.types = value['result']['types'];
      //this.number = value['result']['international_phone_number'];
      //this.loc = {lat:value['result']['geometry']['location']['lat'],lng: value['result']['geometry']['location']['lng'], zoom: 15,placeId: value['place_id'],  choose: false};
      var phot = value['result']['photos'];
      var photoRe = [];
        phot.forEach(ph => {
          photoRe.push('https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference='+ph['photo_reference']+'&key=AIzaSyBMgGGii-qFTTx5Obv-gwHljLtZbt8fAbQ')
        });
      this.photos = photoRe;
      console.log(this.photos);
      //this.photo = this.photos[0];
    });
  }*/



  newLocation(i: number){
    console.log(this.locations[i].placeId);
    //this.getDetails(this.locations[0].placeId);
    this.data.changeLandMark(this.locations[i]);
    this.data.changePhotos(this.photo);
    this.data.changeRating(this.rating[i]);
    this.data.changeAddress(this.address[i]);
    this.data.changeName(this.name[i]);
    this.data.changeTypes(this.types[i]);
    this.data.changeNumber(this.number);

  }

  checkLocInArray(i: number){
    this.data.currentWay.subscribe(w => this.way = w);
    this.way.points.forEach(l => {
      if (l.lat == this.locations[i].lat && l.lng == this.locations[i].lng)
      {
        this.ind = 1;
      }
    });
  }

  addToWay(i: number){
    this.checkLocInArray(i);
    this.way.name = 'Тестовый путь';
    this.data.currentCityName.subscribe(w => this.way.cityAddress = w);
    if(this.ind == 0){
      this.data.changeWay(this.locations[i], this.way);
    }
    console.log(this.way);
    this.dataLM[i].isAdded = !this.dataLM[i].isAdded;
  }
}
