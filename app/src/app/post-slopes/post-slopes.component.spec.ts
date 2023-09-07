import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSlopesComponent } from './post-slopes.component';

describe('PostSlopesComponent', () => {
  let component: PostSlopesComponent;
  let fixture: ComponentFixture<PostSlopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSlopesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSlopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
