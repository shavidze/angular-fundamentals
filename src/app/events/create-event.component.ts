import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  template: `
    <h1>New Event</h1>
    <hr />
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3>
      <br />
      <br />
      <button class="btn btn-primary" type="submit" (click)="save()">
        Save
      </button>
      <button class="btn btn-default" type="button" (click)="cancel()">
        Cancel
      </button>
    </div>
  `
})
export class CreateEventComponent implements OnInit {
  constructor(private router: Router) {}
  isDirty: boolean = true;
  cancel() {
    this.router.navigate(["/events"]);
  }
  save() {}
  ngOnInit() {}
}
