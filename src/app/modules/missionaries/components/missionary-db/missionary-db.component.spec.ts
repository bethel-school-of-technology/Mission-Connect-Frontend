import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionaryDbComponent } from './missionary-db.component';

describe('MissionaryDbComponent', () => {
  let component: MissionaryDbComponent;
  let fixture: ComponentFixture<MissionaryDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionaryDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionaryDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
