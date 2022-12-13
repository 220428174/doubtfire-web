import { Component, Input, Inject } from '@angular/core';

import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
  }
}

@Component({
    selector: "/projects/:project_id/task_def_id/:task_definition_id/comments/:id" ,//'task-comment', //task-comment = task-comment.coffee
    template: 'not-found.component.html',

}  
)

/*@Input({

    

})



/*@Inject [{

}]*/

export class NotFoundComponent {
    constructor(/*enlisted functions here*/) {}
}