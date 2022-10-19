import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test1Component } from '../test1.component';

@Component({
  selector: 'app-test-det-more1',
  templateUrl: './test-det-more1.component.html',
  styleUrls: ['./test-det-more1.component.scss']
})
export class TestDetMore1Component implements OnInit {
  uId : string | null = null;
  constructor( private route: ActivatedRoute, private test1 : Test1Component ) { }

  ngOnInit(): void {
    this.uId = this.test1.uId
  }

}
