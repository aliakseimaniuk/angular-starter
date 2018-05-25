import { Component, OnInit } from '@angular/core';
import { People } from './people';
import { PeopleService } from './people.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  people: People;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getAll().subscribe(result => {
      this.people = result;
    });
  }
}
