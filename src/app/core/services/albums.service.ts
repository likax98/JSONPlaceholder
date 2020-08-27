import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/app/models/album';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { tap } from 'rxjs/operators';

const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  constructor(private _http: HttpClient) { }

  fetchAlbums(): Observable<Album[]> {
    return this._http.get<Album[]>(ALBUM_URL)
    // .pipe(
    //   tap(albums => console.log('albums', JSON.stringify(albums))),
    // );
  }

  // fetchAlbumById(id: number): Observable<Album[]> {
  //   return this._http.get<Album[]>(`${URL}/?userId=${id}`);
  // }

  fetchAlbumDetail(id:number):Observable<Album> {
    return this._http.get<Album>(`${ALBUM_URL}/${id}`);
  }

  fetchPhotoByAlbum(id:number): Observable<Photo[]> {
    return this._http.get<Photo[]>(`${PHOTO_URL}?albumId=${id}`);
  }

  // fetchPhotoByAlbum(id:number): Observable<Photo[]> {
  //   return this._http.get<Photo[]>(`${ALBUM_URL}/${id}/photos`);
  // }
}
