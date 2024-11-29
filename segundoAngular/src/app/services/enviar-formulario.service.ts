import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarFormularioService {

  constructor() { }

  enviaInformacaoParaBackend(info: string){
    console.log('teste enviando')
  }
}
