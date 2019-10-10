import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  symbol:any='₹';
  constructor(public navCtrl: NavController, private googlePlus: GooglePlus) {

  }

   
}
