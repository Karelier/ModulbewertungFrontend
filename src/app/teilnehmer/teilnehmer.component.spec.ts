import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeilnehmerComponent } from './teilnehmer.component';

describe('TeilnehmerComponent', () => {
  let component: TeilnehmerComponent;
  let fixture: ComponentFixture<TeilnehmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeilnehmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeilnehmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
