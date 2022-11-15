import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,' +
        'Content-Type,Authorization',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Vary': 'Origin',
      'Accept': 'application/json',
    }
  };

  constructor(private http: HttpClient) {
  }

  listArtworks(){
    return this.http.get('/artdly/artwork/findall');
  }

  listCategories() {
    return this.http.get('/artdly/category/findAll');
  }

  listArtworkType() {
    return this.http.get('/artdly/artworkType/findAll');
  }

  uploadArtwork(artwork:any): Observable<any> {
    return this.http.post<any>(`/artdly/artwork/postArtwork`,
      artwork);
  }

  createUser(user: any): Observable<any>{
    return this.http.post<any>('/artdly/user/register', user)
  }

  pushFileToStorage(file: any): Observable<HttpEvent<{}>> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    return this.http.post<any>('/artdly/artwork/savefile', formData);
  }

  existLike(userId: any, artworkId: any):Observable<any>{
    return this.http.get('/artdly/'+userId+"/"+artworkId);
  }


}
