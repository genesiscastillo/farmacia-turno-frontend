import { Component, ElementRef, ViewChild, ViewEncapsulation  } from '@angular/core';
import { ClientesService } from './clientes/clientes.service';
import { FarmaciaTurno } from './interfaces/farmaciaturno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 15;
  farmaciaTurnos:FarmaciaTurno[] =[];
  title = 'farmacia-turno';
  opciones:string  = `<option value='0' selected>Elija Comuna</option>`;
  mostrarNoResultado=false;
  micomunaseleccionada = '';
  valorLocal='';
  valorComuna='';
  @ViewChild('milocalseleccionada') milocalseleccionada: ElementRef;

  constructor( private clientesService:ClientesService){
 //   this.opciones = '<option value="volvo">Volvo</option>';

    clientesService.getComunasRegionMetropolitana()
    .subscribe( resp =>{
      this.opciones = '<select class="browser-default custom-select" id="miselect">'+resp.resultado+'</select>';
    });
  }

  ejecutar(){
    console.log('HOLAAAAAAAAAAAAA');
    this.valorLocal = this.milocalseleccionada.nativeElement.value;
    const selector = document.getElementById('miselect') as HTMLSelectElement;
    this.valorComuna =  selector.options[selector.selectedIndex].text;
    console.log('valorComuna ' , this.valorComuna );
    console.log('valorLocal ' , this.valorLocal );

    // validar entrada Elija Comuna
    this.clientesService.getLocalesPorComuna(this.valorComuna , this.valorLocal )
    .subscribe(
      resp =>{     
        this.mostrarNoResultado = false;
        this.farmaciaTurnos = resp;
      },
      error =>{
        this.mostrarNoResultado = true;
      }
    );
  }

  limpiar(){
    this.farmaciaTurnos = [];
    this.mostrarNoResultado = false;
    this.milocalseleccionada.nativeElement.value = '';
  }

}
