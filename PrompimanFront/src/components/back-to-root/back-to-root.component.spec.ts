import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackToRootComponent } from './back-to-root.component';

describe('BackToRootComponent', () => {
  let component: BackToRootComponent;
  let fixture: ComponentFixture<BackToRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToRootComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackToRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
