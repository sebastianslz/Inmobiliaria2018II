import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorArriendoComponent } from './asesor-arriendo.component';

describe('AsesorArriendoComponent', () => {
  let component: AsesorArriendoComponent;
  let fixture: ComponentFixture<AsesorArriendoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorArriendoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
