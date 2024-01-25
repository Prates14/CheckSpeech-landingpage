import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css', './button.responsive.component.css']
})
export class ButtonComponent {

  @Input()
  titulo: string = "";
  @Input()
  corFundo: string = "";
  @Input()
  corTexto: string = "";
  @Input()
  tipo: string = "";

  constructor() { }

}
