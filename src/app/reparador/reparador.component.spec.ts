import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparadorComponent } from './reparador.component';

describe('ReparadorComponent', () => {
  let component: ReparadorComponent;
  let fixture: ComponentFixture<ReparadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
