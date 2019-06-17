import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
    </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  someProperty: any = "some value";
  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log("foo");
  }
}
