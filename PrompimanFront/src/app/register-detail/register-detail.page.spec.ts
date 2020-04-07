import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterDetailPage } from './register-detail.page';

describe('RegisterDetailPage', () => {
  let component: RegisterDetailPage;
  let fixture: ComponentFixture<RegisterDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
