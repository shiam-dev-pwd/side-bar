import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TestArrService } from '../test-arr.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  public testList: any = [];

  constructor(private _testService : TestArrService, private router: Router) { }

  ngOnInit(): void {
    this.testList = this._testService.getList();
  }
//   gotoLink(num: string){
//     this.router.navigate(['test'+num]);  // define your component where you want to go
// }
}
