import { Directive, Input, ComponentFactoryResolver, Injector, ViewContainerRef, ComponentRef, DoCheck, OnDestroy } from '@angular/core';
import { FBusyComponent } from './f-busy.component';
import { FBusyBackdropComponent } from './f-busy-backdrop/f-busy-backdrop.component';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[FBusy]'
})
export class FBusyDirective implements DoCheck, OnDestroy {
  private busyRef: ComponentRef<FBusyComponent>;
  private backdropRef: ComponentRef<FBusyBackdropComponent>;

  @Input()
  showBusy = false;

  constructor(private cfResolver: ComponentFactoryResolver,
              private vcRef: ViewContainerRef,
              private injector: Injector) { }

  ngDoCheck(): void {
    if (this.showBusy) {
      !this.busyRef && this.createBusy();
      !this.backdropRef && this.createBackdrop();
    } else {
      this.destroyComponents();
    }
  }

  createBusy(): void {
    const busyFactory = this.cfResolver.resolveComponentFactory(FBusyComponent);
    this.busyRef = this.vcRef.createComponent(busyFactory, null, this.injector);
  }

  private createBackdrop(): void {
    const backdropFactory = this.cfResolver.resolveComponentFactory(FBusyBackdropComponent);
    this.backdropRef = this.vcRef.createComponent(backdropFactory, null, this.injector);
  }

  ngOnDestroy(): void {
    this.destroyComponents();
  }

  private destroyComponents(): void {
      this.busyRef && this.busyRef.destroy();
      this.backdropRef && this.backdropRef.destroy();
      this.busyRef = null;
      this.backdropRef = null;
  }

}
