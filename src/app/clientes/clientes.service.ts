import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FarmaciaTurno } from '../interfaces/farmaciaturno';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlComunaRegion =  environment.apiBackend+'/api/farmacia/getListaComunasPorRegion';
  private urlFarmaciaTurno = environment.apiBackend+'/api/farmacia/postListaFarmaciaEnTurno';

  constructor(private http:HttpClient) {  
  }

  getComunasRegionMetropolitana(){
    return this.http.get<any>(`${this.urlComunaRegion}`);
  }

  getLocalesPorComuna(comuna:string , local:string)  {

    const params = new HttpParams()
    .set('comuna', comuna )
    .set('local', local );

    const requet = {
      comuna: comuna,
      local: local
    };

    console.log('AQUIII VVVV');
    return this.http.post<FarmaciaTurno[]>(`${this.urlFarmaciaTurno}`, requet );

  }

}
