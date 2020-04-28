import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgSearchReservationPage } from './dlg-search-reservation.page';

describe('DlgSearchReservationPage', () => {
  let component: DlgSearchReservationPage;
  let fixture: ComponentFixture<DlgSearchReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgSearchReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgSearchReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
