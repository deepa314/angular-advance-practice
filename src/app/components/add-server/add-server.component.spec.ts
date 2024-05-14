import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServerComponent } from './add-server.component';

describe('AddServerComponent', () => {
  let component: AddServerComponent;
  let fixture: ComponentFixture<AddServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
