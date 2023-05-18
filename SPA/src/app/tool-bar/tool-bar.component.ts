import { Component, OnInit, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {
  
  constructor(private ngZone:NgZone, private router: Router) {

  }

  goToTermsAndConditions(): void {
    this.ngZone.run(() => this.router.navigate(['/TermsAndConditions']));
  }

  goToHomepage(): void {
    this.ngZone.run(() => this.router.navigate(['/']));
  }
}
