import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestArrService } from 'src/app/test-arr.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})

export class Test1Component implements OnInit {

  uId : string | null= null;
  numUid : number = -1;
  testList : any = [];
  disName : string = ""
  constructor( private route: ActivatedRoute, private router : Router , private _testService : TestArrService) { }

  ngOnInit(): void {
    this.testList = this._testService.getList();
    this.uId = this.route.snapshot.paramMap.get('id');
    this.numUid = Number(this.uId);
    for (var i in this.testList){
      if (this.testList[i].slNo == (this.numUid) ){
        this.disName = this.testList[i].name;
      }
    };
  }

  goBack(){
    this.router.navigate(['']);
  }

}
