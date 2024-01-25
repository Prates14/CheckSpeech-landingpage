import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import data_countries from "../../../../assets/data/data_countries.json";

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.css', './section-contact.responsive.component.css']
})

export class SectionContactComponent {

  modeloDoFormulario = {
    campo1: '',
    campo2: '',
  };

  //Tratamento do formulario
  onSubmit(formulario: NgForm) {
    let valid: boolean = true;
    if (!this.validaUsuario(this.modeloDoFormulario.campo1)) {
      valid = false;
    } else if (!this.validaEmail(this.modeloDoFormulario.campo2)) {
      valid = false;
    } else {
      alert('Mensagem enviada');
    }
    return valid;
  }
  //Validação do campo 'nome'
  validaUsuario(campo: string): boolean {
    let valid: boolean = true;
    if (!campo) {
      valid = false;
    } else if (campo.length < 3) {
      valid = false;
    }
    return valid;
  }
  //Validação do campo 'email'
  validaEmail(campo: string): boolean {
    let valid = true;
    const expReg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    if (!campo) {
      valid = false;
    } else if (!campo.match(expReg)) {
      valid = false;
    }
    return valid;
  }
  //Validação do campo 'telefone'
  validaTelefone(campo: string) {
    if (campo.length == 0 || campo.length == 18) {
      return true;
    } else {
      return false;
    }
  }

  //Formatação do input(Numero de telefone)
  formattedValue: string = '';
  getNumber(getN: string) {
    const numericValue: string = getN.replace(/\D/g, '');
    this.formattedValue = this.formatarTelefone(numericValue);
  }

  formatarTelefone(value: string): string { //+99 (99) 9999-9999
    if (value.length <= 2) {
      return `+${value}`;
    } else if (value.length <= 9) {
      return `+${value.slice(0, 2)} (${value.slice(2, 4)}) ${value.slice(4)}`;
    } else {
      return `+${value.slice(0, 2)} (${value.slice(2, 4)}) ${value.slice(4, 8)}-${value.slice(8, 12)}`;
    }
  }

  //Adicionando combo de país
  countries = data_countries.countries;

  //Checagem do estado do checkbox para envio do formulário
  checkboxState: boolean = false;
  botaoDesabilitado: boolean = true;

  onCheckboxChange() {
    this.botaoDesabilitado = !this.checkboxState;
  }
}
