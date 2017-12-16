import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DksNumberInputComponent } from './dks-number-input.component';
import { uptime } from 'os';
import { ENETDOWN } from 'constants';
import { disableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';

describe('DksNumberInputComponent', () => {
  let component: DksNumberInputComponent;
  let fixture: ComponentFixture<DksNumberInputComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DksNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DksNumberInputComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('.dks-input-container'));
    element = debugEl.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should throw error when can't find input inside`, () => {
    expect(() => { component.ngAfterContentInit(); }).toThrowError();
    expect(() => { component.ngAfterContentInit(); })
    .toThrowError(ReferenceError, `[DksNumberInput] place input element inside dks-number-input!`);
  });

  it(`should throw error when input hasn't got number attribute`, () => {
    const myInput = document.createElement('input');
    element.appendChild(myInput);
    expect(() => { component.ngAfterContentInit(); }).toThrowError();
    expect(() => { component.ngAfterContentInit(); })
    .toThrowError(TypeError, `DskNumberInput: input must have type="number" attribute`);

  });

  function injectInput() {
    const myInput = document.createElement('input');
    const inputAttribute = document.createAttribute('type');
    inputAttribute.value = 'number';
    myInput.setAttributeNode(inputAttribute);
    element.appendChild(myInput);
    return myInput;
  }

  it('should not throw error when contains input with number attribute', () => {
    injectInput();
    expect(() => { component.ngAfterContentInit(); }).not.toThrow();
  });

  it('should increase input value when step up ', () => {
    injectInput();
    fixture.detectChanges();

    const inputElement = component.getInputElement();
    inputElement.value = 0;
    inputElement.step = 1;
    component.stepUp();
    expect(inputElement.value).toEqual('1');

    inputElement.step = 0.5;
    component.stepUp();
    expect(inputElement.value).toEqual('1.5');
  });

  it('should decrease input value when step down ', () => {
    injectInput();
    fixture.detectChanges();

    const inputElement = component.getInputElement();
    inputElement.value = 0;
    inputElement.step = 1;
    component.stepDown();
    expect(inputElement.value).toEqual('-1');

    inputElement.step = 0.5;
    component.stepDown();
    expect(inputElement.value).toEqual('-1.5');
  });

  it(`shouldn't increase disabled input value when step up `, () => {
    const input = injectInput();
    input.disabled = true;
    fixture.detectChanges();

    const inputElement = component.getInputElement();
    inputElement.value = 0;
    inputElement.step = 1;
    component.stepUp();
    expect(inputElement.value).toEqual('0');
  });

  it(`shouldn't decrease disabled input value when step down `, () => {
    const input = injectInput();
    input.disabled = true;
    fixture.detectChanges();

    const inputElement = component.getInputElement();
    inputElement.value = 0;
    inputElement.step = 1;
    component.stepDown();
    expect(inputElement.value).toEqual('0');
  });

});
