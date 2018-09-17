import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorVentaComponent } from './asesor-venta.component';

describe('AsesorVentaComponent', () => {
  let component: AsesorVentaComponent;
  let fixture: ComponentFixture<AsesorVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
