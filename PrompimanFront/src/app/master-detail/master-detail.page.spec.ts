import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasterDetailPage } from './master-detail.page';

describe('MasterDetailPage', () => {
  let component: MasterDetailPage;
  let fixture: ComponentFixture<MasterDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
