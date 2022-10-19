import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test1Component } from '../test1.component';

@Component({
  selector: 'app-test-det-more2',
  templateUrl: './test-det-more2.component.html',
  styleUrls: ['./test-det-more2.component.scss']
})
export class TestDetMore2Component implements OnInit {

  uId : string | null = null;
  constructor( private route: ActivatedRoute, private test1 : Test1Component ) { }

  ngOnInit(): void {
    this.uId = this.test1.uId
  }

}
