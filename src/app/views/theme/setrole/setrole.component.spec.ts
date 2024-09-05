import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetroleComponent } from './setrole.component';

describe('SetroleComponent', () => {
  let component: SetroleComponent;
  let fixture: ComponentFixture<SetroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetroleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
