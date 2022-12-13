
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[/*managerHighlight]'
})

@Component({
  selector: 'tutorGroupManager'
  properties: [
    'tutorGroupManager'
  ]

})   

@View({
    templateUrl: 'groups/tutor-group-manager/tutor-group-manager.tpl.html'
})


export class tutorGroupManager {
  constructor(private el: ElementRef) { }
  
  @Input() default = '';

  @Input() app = '';
  
  ngonInit() {
    if(this.tutorGroupManager){
      this.tutorGroupManager
    }
  }
}

###

angular.module('myApp').directive('tutorGroupManager', function() {
  return {
    restrict: 'E',
    templateUrl: 'groups/tutor-group-manager/tutor-group-manager.tpl.html',
    controller: function($scope) {
    }
  };
});

###

export class tutorGroupManager {
  constructor(private el: ElementRef) { }
    @Input() defaultColor = '';
    @Input() appHighlight = '';
  }
  

###
.directive('tutorGroupManager', ->
  restrict: 'E' 
  templateUrl: 'groups/tutor-group-manager/tutor-group-manager.tpl.html'

  controller: ($scope) ->
)
###