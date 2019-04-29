import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  isEqual: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { }


  move() {
    console.log('In Move');
    this.router.navigate(['/vrMode']);

  }

  ngOnInit(): void {
    // this.router.events.subscribe(path => {
    //   console.log('path = ', path);
    //   if (String(path).match('/vrMode')) {
    //     this.isEqual = false;
    //   } else {
    //     this.isEqual = true;
    //   }
    // });

    this.router.events.subscribe((event) => {


      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/vrMode') {
          console.log(event.urlAfterRedirects);
          this.isEqual = false;
        } else {
          this.isEqual = true;
        }
      }
    });
  }
}
