import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarteBancairePage } from './carte-bancaire.page';

describe('CarteBancairePage', () => {
  let component: CarteBancairePage;
  let fixture: ComponentFixture<CarteBancairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteBancairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarteBancairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
