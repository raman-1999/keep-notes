import { Component, Input } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  constructor(private noteService: NoteService, private routeService: RouteService) { }

  @Input()
  note?: Note

  isHovered: boolean = false;

  hover() {
    this.isHovered = true;
  }
  unhover() {
    this.isHovered = false;
  }

  // deleteNote() {
  //   this.noteService.deleteNote(this.note?.id).subscribe();
  //   console.log(this.note);
  //   this.routeService.toHome();
  // }
}
