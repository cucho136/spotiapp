import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBc-MqCjI6124Lj7TLz-H3_41Fp4jcqKqffIRKzFZkBGkXTuVlTV5D-t14laMQpzTfXxxqZda02H3Jhwh0'
    });

    return this.http.get(url,{headers});

  }

  constructor(private http:HttpClient) { }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
          .pipe(map(data=>{
            return data['albums'].items;
          }));


  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).
      pipe(map(data=>{
            return data['artists'].items;
          }))

      }

  getArtista(id:string){

        return this.getQuery(`artists/${id}`);

      }

  getTop(id:string){

            return this.getQuery(`artists/${id}/top-tracks?country=us`)
                        .pipe(map(data=>{
                        return data['tracks'];
                      }));

    }


}
