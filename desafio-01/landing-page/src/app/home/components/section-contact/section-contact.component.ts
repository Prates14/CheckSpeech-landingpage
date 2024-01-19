import { Component } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.css','./section-contact.responsive.component.css']
})

export class SectionContactComponent {
  //Checagem do estado do checkbox para envio do formulário
  checkboxState: boolean = false;
  botaoDesabilitado: boolean = true;

  onCheckboxChange() {
    this.botaoDesabilitado = !this.checkboxState;
  }

  //Formatação do input(Numero de telefone)
  formattedValue: string = '';

  getNumber(getN: string) {
    const numericValue: string = getN.replace(/\D/g, '');
    this.formattedValue = this.formatarTelefone(numericValue);
    
  }

  formatarTelefone(value: string): string {
    if (value.length <= 2) {
      return `(${value}`;
    } else if (value.length <= 6) {
      return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 10)}`;
    }
  }
  
}
