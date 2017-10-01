import { Component, OnInit, Input } from '@angular/core';
@Input()

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentDay = new Date().getDate();
  currentDayIndex = `day${this.currentDay}`;
  constructor() { }

  ngOnInit() {
  }
}
