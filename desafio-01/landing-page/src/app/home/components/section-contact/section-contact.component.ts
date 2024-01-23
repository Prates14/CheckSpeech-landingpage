import { Component } from '@angular/core';
import data_countries from "../../../../assets/data/data_countries.json";

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.css', './section-contact.responsive.component.css']
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

  formatarTelefone(value: string): string { //+55 (31) 99340-1281
    if (value.length <= 2) {
      return `+${value}`;
    } else if (value.length <= 9) {
      return `+${value.slice(0, 2)} (${value.slice(2, 4)}) ${value.slice(4)}`;
    } else {
      return `+${value.slice(0, 2)} (${value.slice(2, 4)}) ${value.slice(4, 9)}-${value.slice(9, 13)}`;
    }
  }

  //Adicionando combo de país
  countries = data_countries.countries;
}
