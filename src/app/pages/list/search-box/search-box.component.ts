import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Output() searchInput = new EventEmitter<string>();

  onValueChange(event: Event): void {
    this.searchInput.emit((event.target as any).value);
  }
}
