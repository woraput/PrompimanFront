import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgAddExtraPage } from './dlg-add-extra.page';

describe('DlgAddExtraPage', () => {
  let component: DlgAddExtraPage;
  let fixture: ComponentFixture<DlgAddExtraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgAddExtraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgAddExtraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
