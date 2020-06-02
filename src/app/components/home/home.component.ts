import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
  nuevasCanciones:any[]=[];
  paises:any[];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private  http:HttpClient, private spotify:SpotifyService) {
      // this.http.get('https://restcountries.eu/rest/v2/lang/es')
      //   .subscribe((paises:any) =>{
      //     this.paises=paises;
      //     console.log(paises);
      //   });
      this.loading=true;
      this.error=false;
      this.spotify.getNewReleases().subscribe((data:any)=>{
        this.nuevasCanciones=data;
        this.loading=false;
      },(errorServicio)=>{
        this.error=true;
        this.loading=false;
        this.mensajeError=errorServicio.error.error.message;
      });

   }



}
