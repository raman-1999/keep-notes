import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { RouteService } from '../services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note: Note = {}

  status: boolean = false;

  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute, private routerService: RouteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      let noteId = p.get('id') ?? 0
      this.noteService.getNote(+noteId).subscribe(n => {
        this.note = n;
      })
    })
  }

  editNote() {
    this.noteService.editNote(this.note.id, this.note).subscribe(data => {
      this.note = data;
      this.routerService.toHome();
    })
  }

  deleteNote() {
      this.noteService.deleteNote(this.note?.id).subscribe();
      this.routerService.toHome();
  }

  canDeactivate() {
    if (!this.status) {
      this.status = true;
    }
    return this.status;
  }

  openSnackBar1(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  openSnackBar2(display: string, command: string) {
    this.snackBar.open(display, command, {
      duration: 2000
    });
  }
}
