import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingCancelPage } from './booking-cancel.page';

describe('BookingCancelPage', () => {
  let component: BookingCancelPage;
  let fixture: ComponentFixture<BookingCancelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCancelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingCancelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
