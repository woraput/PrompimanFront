import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UIStandardPage } from './uistandard.page';

describe('UIStandardPage', () => {
  let component: UIStandardPage;
  let fixture: ComponentFixture<UIStandardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIStandardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UIStandardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
