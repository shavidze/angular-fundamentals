import { Component, OnInit } from "@angular/core";
import { EventService } from "src/app/events/shared/event.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  templateUrl: "./event-details.component.html",
  styles: [
    `
      .container {
        padding: 0 20px 0 20px;
      }
      .event-image: {
        height: 100px;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}
  event: any;
  ngOnInit() {
    console.log(this.route);
    this.event = this.eventService.getEvent(+this.route.snapshot.params["id"]);
  }
}
