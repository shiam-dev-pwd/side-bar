import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { TestDetMore1Component } from './testDetails/test1/test-det-more1/test-det-more1.component';
import { TestDetMore2Component } from './testDetails/test1/test-det-more2/test-det-more2.component';
import { Test1Component } from './testDetails/test1/test1.component';


const routes: Routes = [
  {path: '', component: TestListComponent},

  {path: 'test/:id', component: Test1Component, 
   children: [{path: 'det1', component: TestDetMore1Component},
              {path: 'det2', component: TestDetMore2Component}]
            },
              
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TestListComponent, Test1Component,
    TestDetMore1Component, TestDetMore2Component
]