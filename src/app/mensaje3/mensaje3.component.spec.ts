import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensaje3Component } from './mensaje3.component';

describe('Mensaje3Component', () => {
  let component: Mensaje3Component;
  let fixture: ComponentFixture<Mensaje3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensaje3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mensaje3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
