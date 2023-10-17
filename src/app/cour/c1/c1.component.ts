import { Component } from '@angular/core';
import { FirstService } from 'src/app/first.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
  providers : [FirstService]
})

export class C1Component {
  hello !: string ; 
  constructor(private s : FirstService){
  s.sayHello()
 
    
  }
  ngOnInit()
  {
    this.s.sayHello()
     this.s.addElement("k")
  this.s.show()  
  }

}
