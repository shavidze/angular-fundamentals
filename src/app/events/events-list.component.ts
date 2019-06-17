import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent {
  event = {
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
}
