import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRegistrosComponent } from './tela-registros.component';

describe('TelaRegistrosComponent', () => {
  let component: TelaRegistrosComponent;
  let fixture: ComponentFixture<TelaRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
