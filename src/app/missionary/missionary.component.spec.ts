import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionaryComponent } from './missionary.component';

describe('MissionaryComponent', () => {
  let component: MissionaryComponent;
  let fixture: ComponentFixture<MissionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionaryComponent ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});m
