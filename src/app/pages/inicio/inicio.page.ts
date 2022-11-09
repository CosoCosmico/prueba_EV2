import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  producto: any = [];
  constructor
  (
    private api: ApiService
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.api.listarProducto().subscribe((Response)=>{
      this.producto = Response;
    })
  }

}
