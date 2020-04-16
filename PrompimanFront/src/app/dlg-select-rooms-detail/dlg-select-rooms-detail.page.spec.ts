import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgSelectRoomsDetailPage } from './dlg-select-rooms-detail.page';

describe('DlgSelectRoomsDetailPage', () => {
  let component: DlgSelectRoomsDetailPage;
  let fixture: ComponentFixture<DlgSelectRoomsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgSelectRoomsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgSelectRoomsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
