import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  getListaTransferencias(): any[] {
    return this.listaTransferencias;
  }

  adicionar(transferencia: any): void {
    this.hidratar(transferencia);

    this.listaTransferencias.push(transferencia);
  }

  private hidratar(tranferencia: any): void {
    tranferencia.data = new Date();
  }
}
