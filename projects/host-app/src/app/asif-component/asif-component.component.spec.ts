import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsifComponentComponent } from './asif-component.component';

describe('AsifComponentComponent', () => {
  let component: AsifComponentComponent;
  let fixture: ComponentFixture<AsifComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsifComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsifComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
