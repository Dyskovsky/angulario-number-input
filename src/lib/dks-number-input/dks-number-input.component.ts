import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterContentInit,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
  ViewEncapsulation } from '@angular/core';

function dispatchFakeEvent(node: Node) {
  node.dispatchEvent(new Event('input'));
}

// You can use the .markForCheck or event the .tick methods to force change-detection.


@Component({
  selector: 'ng-number-input',
  templateUrl: './ng-number-input.component.html',
  styleUrls: ['./ng-number-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgNumberInputComponent implements OnInit, AfterContentInit {

  private inputElement: any;
  @ViewChild('inputContainer') inputContainer;

  constructor( private renderer: Renderer2, private element: ElementRef, private ref: ChangeDetectorRef ) {
  }

  ngOnInit() {
  }

  public stepUp(): void {
    this.inputElement.stepUp();
    dispatchFakeEvent(this.inputElement);
  }

  public stepDown(): void {
    this.inputElement.stepDown();
    dispatchFakeEvent(this.inputElement);
  }

  ngAfterContentInit() {
  const elements = Array.from(this.inputContainer.nativeElement.childNodes);
  this.inputElement = elements.find( element => (<any>element).tagName === 'INPUT');
    console.log(this.inputElement);
    console.log(this.inputContainer);//tagName
  }
}
