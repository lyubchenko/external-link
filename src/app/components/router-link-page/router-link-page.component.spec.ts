import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkPageComponent } from './router-link-page.component';

describe('RouterLinkPageComponent', () => {
  let component: RouterLinkPageComponent;
  let fixture: ComponentFixture<RouterLinkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLinkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
