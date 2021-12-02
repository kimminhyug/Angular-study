import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeratchBoxComponent } from './seratch-box.component';

describe('SeratchBoxComponent', () => {
  let component: SeratchBoxComponent;
  let fixture: ComponentFixture<SeratchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeratchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeratchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
