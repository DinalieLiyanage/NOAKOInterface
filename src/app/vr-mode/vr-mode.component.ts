import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vr-mode',
  templateUrl: './vr-mode.component.html',
  styleUrls: ['./vr-mode.component.scss']
})
export class VrModeComponent implements OnInit {
  isEqual: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      this.isEqual = false;
    },
      () => {
        this.isEqual = true;
      });
  }

}
