import { Component, Input, OnInit } from '@angular/core'; 
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-destination-area-shared',
  templateUrl: './destination-area-shared.component.html',
  styleUrls: ['./destination-area-shared.component.scss']
})
export class DestinationAreaSharedComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() noAreaDestino: string = "noAreaDestino";
  @Input() claveAreaDestino: string = "claveAreaDestino";
  @Input() descriptionAreaDestino: string = "descriptionAreaDestino";
  @Input() nameAreaDestino: string = "nameAreaDestino";

  constructor() { }

  ngOnInit(): void {
  }

  
}
