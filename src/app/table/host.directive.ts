// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Host]',
})
export class HostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
