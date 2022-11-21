import {
  Component,
  ViewContainerRef,
  ViewChild,
  Input,
  OnInit,
  ComponentFactoryResolver,
  OnChanges,
  ComponentRef,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
  <ng-container #vcr></ng-container>
  `,
})
export class WrapperComponent implements OnInit, OnChanges {
  @Input() comp: any;
  @Input() row: any;
  @Input() col: string;

  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr: ViewContainerRef;
  cRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const componentFactory = this.resolver.resolveComponentFactory(this.comp);

    const viewContainerRef = this.vcr;
    viewContainerRef.clear();

    this.cRef = viewContainerRef.createComponent<any>(componentFactory);
    this.cRef.instance.row = this.row;
    this.cRef.instance.col = this.col;
  }

  ngOnChanges() {
    console.log('Wrapper - ngOnChanges');
    if (this.cRef) {
      this.cRef.instance.row = this.row;
      // useful if onpush change detection strategy is used
      this.cRef.injector.get(ChangeDetectorRef).markForCheck();
    }
  }
}
