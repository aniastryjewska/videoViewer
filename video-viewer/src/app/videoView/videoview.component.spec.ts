import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoviewComponent } from './videoView.component';

describe('VideoviewComponent', () => {
  let component: VideoviewComponent;
  let fixture: ComponentFixture<VideoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
