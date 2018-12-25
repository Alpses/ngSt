import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public mes:string[] = [] ;
  constructor() { }
  
  add(me:string){
    this.mes.push(me);
  }
  clear(){
    this.mes = [] ;
  }
}
