import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  note: Note = {}
  isSubmitted = false;
  panelOpenState = false;

  constructor(private noteService: NoteService, private snackBar:MatSnackBar) { }
  @Output()
  noteChanged = new EventEmitter<Note>()

  addNote(f:NgForm) {
    if (this.note.title) {
      this.noteService.add(this.note).subscribe(data=>{
        this.note = data;
        // console.log(this.note);
        this.note = {}
      })
    }
    this.noteChanged.emit(this.note);  
   f.reset()
  }

  onSubmit(f: NgForm) {
    this.isSubmitted = true;
    // console.log(this.note);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 2000
    });
  }
}
