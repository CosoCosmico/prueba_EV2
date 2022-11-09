import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {
  productoForm: FormGroup;
  id: any;
  categoria =[
    "electonica",
    "artesania",
    "jardineria",
    "hogar"
  ]
  constructor
  (
    private builder: FormBuilder,
    private api:ApiService,
    private router:Router,
    private zone:NgZone
  ) { this.productoForm = this.builder.group({
    "id": [''],
    "titulo": [''],
    "descripcion": [''],
    "precio": [''],
    "descuento": [''],
    "rating": [''],
    "stock": [''],
    "brand": [''],
    "categoria": ['']
  })}

  ngOnInit() {
  }

  onSumbit(){
    if(!this.productoForm.valid){return false;}else{
      this.api.crearProducto(this.id).subscribe((Response)=>{
        this.zone.run(()=>{
          this.productoForm.reset();
          this.router.navigate([''])
        })
      })
    }
  }



}
