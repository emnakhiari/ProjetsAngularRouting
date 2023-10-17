import { Component } from '@angular/core';
import { FirstService } from 'src/app/first.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  constructor(private s : FirstService){
   
    s.addElement("m")
    s.show()  
    }

}
