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

  private validate() {

    function inputHasNumberAttr(element) {
      return element.type === 'number';
    }

    if (!this.inputElement) {
     throw ReferenceError(`[DksNumberInput] place input element inside dks-number-input!`);
    }

    if (!inputHasNumberAttr(this.inputElement)) {
     throw TypeError(`DskNumberInput: input must have type="number" attribute`);
    }
  }

  private findInputElement() {
    const elements = Array.from(this.inputContainer.nativeElement.childNodes);
    return elements.find( element => (<any>element).tagName === 'INPUT');
  }

  constructor() {
  }

  ngOnInit() {
  }

  public ngAfterContentInit() {
    this.inputElement = this.findInputElement();
    this.validate();
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

  // only for tests!!!
  public getInputElement() {
    return this.inputElement;
  }
}
