import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  currentRoute!: string;
  constructor(
    private router: Router,
  ) {
    this.currentRoute = this.router.url;
  }

  getCurrentRoute() {
    this.currentRoute = this.router.url;
    this.currentRoute = this.currentRoute.split('/')[this.currentRoute.split('/').length-1];
  }
}
