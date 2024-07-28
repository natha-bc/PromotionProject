import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCurtainComponent } from './form-curtain.component';

describe('FormCurtainComponent', () => {
  let component: FormCurtainComponent;
  let fixture: ComponentFixture<FormCurtainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCurtainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCurtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
