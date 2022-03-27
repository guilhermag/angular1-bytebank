import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias/';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  getListaTransferencias(): any[] {
    return this.listaTransferencias;
  }

  todas(): Observable<ITransferencia[]> {
    return this.httpClient.get<ITransferencia[]>(this.url);
  }

  adicionar(transferencia: ITransferencia): Observable<ITransferencia> {
    this.hidratar(transferencia);

    return this.httpClient.post<ITransferencia>(this.url, transferencia);
  }

  private hidratar(tranferencia: any): void {
    tranferencia.data = new Date();
  }
}
