import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsmOverviewComponent } from './psm-overview.component';

describe('PsmOverviewComponent', () => {
  let component: PsmOverviewComponent;
  let fixture: ComponentFixture<PsmOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsmOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
