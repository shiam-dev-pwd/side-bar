import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestArrService {

  constructor() { }

  getList(){
    return [
      {"slNo": 1, "name": "test1"},
      {"slNo": 2, "name": "test2"},
      {"slNo": 3, "name": "test3"},
      {"slNo": 4, "name": "test4"},
      {"slNo": 5, "name": "test5"},
      {"slNo": 6, "name": "test6"},

    ]
  }
}
