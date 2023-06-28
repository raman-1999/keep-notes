import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.refresh$.subscribe(() => {
      this.getNotes();
    })

    this.getNotes();
  }

  private getNotes(){
    this.noteService.getNotes()
    .subscribe(data => {
      this.notes = data
      console.log(this.notes);
    });
  }

  //   error: (e)=> {alert('Failed to load')}
  onNoteSearched(str: string) {
    if (str === "") {
      this.notes = this.notes;
    }
    else {
      this.notes = this.notes.filter(n => n.title?.startsWith(str));
    }
  }

  // n:Note[] = []

  // onHover(note:Note)
  // {

  // }

  onNoteAdded(note: Note) {
    if (note === null)
      this.notes = this.notes;
    else {
      this.notes.push(note);
      this.notes = this.notes;
    }
  }

  isDisplayed: boolean = false;
  isShown:boolean = true;

  add() {
    this.isDisplayed = true;
    this.isShown = false
  }
}
