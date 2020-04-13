import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgBookingDetailPage } from './dlg-booking-detail.page';

describe('DlgBookingDetailPage', () => {
  let component: DlgBookingDetailPage;
  let fixture: ComponentFixture<DlgBookingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgBookingDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgBookingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
