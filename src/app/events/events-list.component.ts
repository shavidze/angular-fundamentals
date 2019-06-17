import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcomming Angular Events</h1>
      <hr />
    </div>
    <event-thumbnail
      (eventClick)="handleEventClicked($event)"
      [event]="event1"
    ></event-thumbnail>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2036",
    time: "10:00 am",
    price: 599.99,
    imageUrl: "/assets/images/angularconnecnt-shield.png",
    location: {
      address: "1058 DT",
      city: "London",
      country: "England"
    }
  };
  handleEventClicked(data) {
    console.log("received", data);
  }
}
