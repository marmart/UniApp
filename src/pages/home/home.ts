import { AyudaPage } from './../ayuda/ayuda';
import { VerMateriasPage } from './../ver-materias/ver-materias';
import { MyApp } from './../../app/app.component';
import { AgregarMateriaPage } from './../agregar-materia/agregar-materia';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the AgregarMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

verMateria:any =VerMateriasPage;
verAyuda:any =AyudaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  agregarMateria(){
this.navCtrl.push(AgregarMateriaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
