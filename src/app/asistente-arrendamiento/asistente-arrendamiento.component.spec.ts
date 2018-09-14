import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteArrendamientoComponent } from './asistente-arrendamiento.component';

describe('AsistenteArrendamientoComponent', () => {
  let component: AsistenteArrendamientoComponent;
  let fixture: ComponentFixture<AsistenteArrendamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenteArrendamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteArrendamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
