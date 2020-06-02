import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent  {


  artista:any ={};
  loading:boolean;
  topTracks:any[]=[];
  constructor(private route:ActivatedRoute,
              private spotify:SpotifyService) {
                     this.loading=true;
                     this.route.params.subscribe(params =>{
                       console.log(params['id']);
                       this.getArtista(params['id']);
                       this.getTop(params['id']);
                     })
                   }

   getArtista(id:string){
          this.loading=true;
          this.spotify.getArtista(id).subscribe(artista =>{
            console.log(artista);
            this.artista=artista;
            this.loading=false
          })
   }

   getTop(id:string){
     this.spotify.getTop(id).subscribe(top=>{
       this.topTracks=top;
     })
   }


}
