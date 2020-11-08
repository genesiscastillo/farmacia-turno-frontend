import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FarmaciaTurno } from '../interfaces/farmaciaturno';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  //private url = 'https://midastest.minsal.cl/farmacias/maps/index.php/utilidades/maps_obtener_comunas_por_regiones?reg_id=7';
  private urlComunaRegion =  environment.apiBackend+'/api/farmacia/getListaComunasPorRegion';
  private urlFarmaciaTurno = environment.apiBackend+'/api/farmacia/postListaFarmaciaEnTurno';

  constructor(private http:HttpClient) {  
      this.getLocalesPorComuna('BUIN','PLAZA');
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
