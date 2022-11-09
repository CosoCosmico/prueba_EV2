import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = `http://localhost:3000/producto`

  constructor(private http:HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders ({'content-type': 'application/json'})
  }

  crearProducto(producto:producto):Observable<any>{
    return this.http.post<producto>(this.api, JSON.stringify, this.httpOptions)
  }

  listarProductoID(id):Observable<producto[]>{
    return this.http.get<producto[]>(this.api + '/' + id)
  }

  listarProducto():Observable<producto[]>{
    return this.http.get<producto[]>(this.api)
  }


}
