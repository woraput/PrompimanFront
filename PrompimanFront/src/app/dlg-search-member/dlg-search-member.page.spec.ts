import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DlgSearchMemberPage } from './dlg-search-member.page';

describe('DlgSearchMemberPage', () => {
  let component: DlgSearchMemberPage;
  let fixture: ComponentFixture<DlgSearchMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgSearchMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DlgSearchMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
