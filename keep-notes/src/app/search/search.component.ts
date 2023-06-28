import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchNote:string = '';

  @Output()
  searchedNote = new EventEmitter<string>();

  search() {
    this.searchedNote.emit(this.searchNote);
  }

}
