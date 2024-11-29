import { EnviarFormularioService } from './../../services/enviar-formulario.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private EnviarFormularioService = inject(EnviarFormularioService)
  meuBoleano = false;
  name = 'david';
  idButton = 'btn';
  // atulizaBoleno(valor: boolean){
  //   this.meuBoleano = valor;
  // }






  submit(){
    this.emitindoValorName.emit(this.name)
    this.EnviarFormularioService.enviaInformacaoParaBackend('enviando informação')
  }

  devmostrarTitulo = false

  listItem =['a', 'b', 'c', 'd']

  @Input() minhaPropsDeFora!: string
  @Output() emitindoValorName = new EventEmitter<string>()

}
