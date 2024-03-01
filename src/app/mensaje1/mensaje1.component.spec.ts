import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensaje1Component } from './mensaje1.component';

describe('Mensaje1Component', () => {
  let component: Mensaje1Component;
  let fixture: ComponentFixture<Mensaje1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensaje1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mensaje1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
