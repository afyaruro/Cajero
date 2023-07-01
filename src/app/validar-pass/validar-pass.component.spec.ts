import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPassComponent } from './validar-pass.component';

describe('ValidarPassComponent', () => {
  let component: ValidarPassComponent;
  let fixture: ComponentFixture<ValidarPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
