import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiSlopesComponent } from './ski-slopes.component';

describe('SkiSlopesComponent', () => {
  let component: SkiSlopesComponent;
  let fixture: ComponentFixture<SkiSlopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiSlopesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiSlopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
