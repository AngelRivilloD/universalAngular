import { Component } from '@angular/core';
import { SEOService } from './seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private seoService: SEOService,  private _router: Router) {}


}

