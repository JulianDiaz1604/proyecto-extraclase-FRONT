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
    return this.http.get('http://localhost:8080/artdly/artwork/findall');
  }

  listCategories() {
    return this.http.get('http://localhost:8080/artdly/category/findAll');
  }

  listArtworkType() {
    return this.http.get('http://localhost:8080/artdly/artworkType/findAll');
  }

  uploadArtwork(artwork:any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/artdly/artwork/postArtwork`,
      artwork);
  }

  createUser(user: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/artdly/user/register', user)
  }

  pushFileToStorage(file: any, tittle: any): Observable<HttpEvent<{}>> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    return this.http.post<any>('http://localhost:8080/artdly/artwork/savefile/'+tittle, formData);
  }

  createLike(like: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/artdly/like/register', like);
  }

  // existLike(userId: any, artworkId: any):Observable<any>{
  //   return this.http.get('/artdly/'+userId+"/"+artworkId);
  // }


}
