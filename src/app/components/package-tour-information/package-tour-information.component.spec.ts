import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageTourInformationComponent } from './package-tour-information.component';

describe('PackageTourInformationComponent', () => {
  let component: PackageTourInformationComponent;
  let fixture: ComponentFixture<PackageTourInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageTourInformationComponent]
    });
    fixture = TestBed.createComponent(PackageTourInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
