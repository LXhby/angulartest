import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})

export class Test {
  items: Array<{title: string, note: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.items =[];
    this.items.push({
      title:"hhh",
      note:"jjj"
    })
  }
}
