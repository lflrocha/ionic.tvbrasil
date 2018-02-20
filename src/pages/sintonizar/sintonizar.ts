import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TvabertaPage } from '../tvaberta/tvaberta';
import { TvassinaturaPage } from '../tvassinatura/tvassinatura';
import { TvparabolicaPage } from '../tvparabolica/tvparabolica';


/**
 * Generated class for the SintonizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sintonizar',
  templateUrl: 'sintonizar.html',
})
export class SintonizarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoTvAberta(){
      this.navCtrl.push(TvabertaPage);
  }

  public gotoAssinatura(){
      this.navCtrl.push(TvassinaturaPage);
  }

  public gotoParabolica(){
      this.navCtrl.push(TvparabolicaPage);
  }


}
