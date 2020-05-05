import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgReturnRoomPage } from './dlg-return-room.page';

describe('DlgReturnRoomPage', () => {
  let component: DlgReturnRoomPage;
  let fixture: ComponentFixture<DlgReturnRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgReturnRoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgReturnRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
