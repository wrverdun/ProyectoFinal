import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperenciaComponent } from './experencia.component';

describe('ExperenciaComponent', () => {
  let component: ExperenciaComponent;
  let fixture: ComponentFixture<ExperenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperenciaComponent]
    });
    fixture = TestBed.createComponent(ExperenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
