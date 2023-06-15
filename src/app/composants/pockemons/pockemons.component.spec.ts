import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonsComponent } from './pockemons.component';

describe('PockemonsComponent', () => {
  let component: PockemonsComponent;
  let fixture: ComponentFixture<PockemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PockemonsComponent]
    });
    fixture = TestBed.createComponent(PockemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
