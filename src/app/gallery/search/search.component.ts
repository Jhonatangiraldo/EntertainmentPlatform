import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  @Output() update = new EventEmitter();
  public name: string;

  ngOnInit(){
    this.name = '';
		this.update.emit('');
	}

  private updateName() {
    this.update.emit(this.name);
  }


}
