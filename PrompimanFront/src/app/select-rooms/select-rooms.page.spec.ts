import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectRoomsPage } from './select-rooms.page';

describe('SelectRoomsPage', () => {
  let component: SelectRoomsPage;
  let fixture: ComponentFixture<SelectRoomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRoomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
