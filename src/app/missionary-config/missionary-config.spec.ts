import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionaryConfigComponent } from '../missionary-config/missionary-config.component';

describe('MissionaryConfigComponent', () => {
  let component: MissionaryConfigComponent;
  let fixture: ComponentFixture<MissionaryConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionaryConfigComponent ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionaryConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
