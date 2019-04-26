import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';

declare var goFullScreen: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isEqual: boolean;
  title = 'NOAKO';
  mobileQuery: MediaQueryList;


  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);


  }


  //   <script>
  //   /* Get the documentElement (<html>) to display the page in fullscreen */
  //   var elem = document.documentElement;

  //   /* View in fullscreen */
  //   function openFullscreen() {
  //     if (elem.requestFullscreen) {
  //       elem.requestFullscreen();
  //     } else if (elem.mozRequestFullScreen) {
  //       /* Firefox */
  //       elem.mozRequestFullScreen();
  //     } else if (elem.webkitRequestFullscreen) {
  //       /* Chrome, Safari and Opera */
  //       elem.webkitRequestFullscreen();
  //     } else if (elem.msRequestFullscreen) {
  //       /* IE/Edge */
  //       elem.msRequestFullscreen();
  //     }
  //   }

  // </script>
  ngOnInit(): void {

    // document.documentElement.requestFullscreen();
    // window.open('../assets/web/index4.html', 'fs', 'fullscreen=yes');

    // this.activatedRoute.url.subscribe(urlRes => {
    //   console.log(urlRes)
    // });

    goFullScreen();

    this.router.events.subscribe(path => {
      console.log('path = ', path);
      if (String(path).match('/vrMode')) {
        this.isEqual = false;
      } else {
        this.isEqual = true;
      }
    });

  }

  // tslint:disable-next-line:use-life-cycle-interface


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
