import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  tab =['a','b']

  constructor() { }
  sayHello(){
    console.log('bonjour')
  }
  addElement(el:any)
  {
    this.tab.push(el);

  }
  show()
  {
    console.log(this.tab)
  }
}
