import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgRoomDetailPage } from './dlg-room-detail.page';

describe('DlgRoomDetailPage', () => {
  let component: DlgRoomDetailPage;
  let fixture: ComponentFixture<DlgRoomDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgRoomDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgRoomDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
