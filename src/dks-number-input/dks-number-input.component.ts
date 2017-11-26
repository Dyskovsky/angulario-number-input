import {
  Component,
  OnInit,
  ViewChild,
  AfterContentInit,
  ViewEncapsulation,
  ElementRef } from '@angular/core';

function dispatchFakeEvent(node: Node) {
  node.dispatchEvent(new Event('input'));
}

@Component({
  selector: 'dks-number-input',
  templateUrl: 'dks-number-input.component.html',
  styleUrls: ['./dks-number-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DksNumberInputComponent implements OnInit, AfterContentInit {

  private inputElement: any;
  @ViewChild('inputContainer') inputContainer: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  public stepUp(): void {
    if (!this.inputElement.disabled) {
      this.inputElement.stepUp();
      dispatchFakeEvent(this.inputElement);
    }
  }

  public stepDown(): void {
    if (!this.inputElement.disabled) {
      this.inputElement.stepDown();
      dispatchFakeEvent(this.inputElement);
    }
  }

  ngAfterContentInit() {
    const elements = Array.from(this.inputContainer.nativeElement.childNodes);
    this.inputElement = elements.find( element => (<any>element).tagName === 'INPUT');

    if (this.inputElement.type !== 'number') {
      throw TypeError(`DskNumberInput: input must have type="number" attribute`);
    }
  }
}
