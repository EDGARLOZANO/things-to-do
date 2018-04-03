import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  bdtask2: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bdtask2.push(navParams.get('data'));
  }

}
