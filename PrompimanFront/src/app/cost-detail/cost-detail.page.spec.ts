import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostDetailPage } from './cost-detail.page';

describe('CostDetailPage', () => {
  let component: CostDetailPage;
  let fixture: ComponentFixture<CostDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
