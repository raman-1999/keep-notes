import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private _refresh$ = new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }

  URL:string = " http://localhost:3000/notes";

  constructor(private http:HttpClient) { }

  getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.URL);
  }

  add(note: Note) {
    return this.http.post<Note>(this.URL, note).pipe(tap(() => {
      this.refresh$.next();
    }));
  }

  getNote(id:number):Observable<Note>{
    return this.http.get<Note>(`${this.URL}/${id}`);
  }

  editNote(id?:number,note?:Note){
    return this.http.put<Note>(`${this.URL}/${id}`,note);
  }

  deleteNote(id:any){
    return this.http.delete<Note>(`${this.URL}/${id}`).pipe(tap(() => {
      this.refresh$.next();
    }));
  }

}
