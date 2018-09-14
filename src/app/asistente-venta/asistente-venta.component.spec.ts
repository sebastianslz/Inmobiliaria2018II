import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteVentaComponent } from './asistente-venta.component';

describe('AsistenteVentaComponent', () => {
  let component: AsistenteVentaComponent;
  let fixture: ComponentFixture<AsistenteVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenteVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
