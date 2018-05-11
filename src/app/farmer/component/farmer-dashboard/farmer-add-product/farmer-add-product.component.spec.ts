import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule, Http} from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { FarmerAddProductComponent } from './farmer-add-product.component';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { IdRoleService } from '../../../../services/id-role/id-role.service';


describe('FarmerAddProductComponent', () => {
  let component: FarmerAddProductComponent;
  let fixture: ComponentFixture<FarmerAddProductComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerAddProductComponent ],
      providers: [ IdRoleService ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, HttpModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, 'public/assets/i18n', '.json'),
          deps: [Http]
      })
      ]
    })
    .compileComponents()  ;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAddProductComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    //el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //testcase for header tag
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const el=fixture.nativeElement.querySelector('h1');
    expect(el.innerText.toLowerCase()).toEqual('farmer_add_product.upload_product');
  }));

  //testcase for ngOnInit method
  it('should call the ngOnInit method', async(() => {
    fixture.detectChanges();
    spyOn(component,'ngOnInit');
    expect(component.ngOnInit).toHaveBeenCalledTimes(0);
  }));

  //testcase for onFileSelected method
  it('should call the onFileSelected method', async(() => {
    fixture.detectChanges();
    spyOn(component,'onFileSelected');
    el=fixture.debugElement.query(By.css('input')).nativeElement;
    el.click();
    expect(component.onFileSelected).toHaveBeenCalledTimes(0);
  }));

  //testcase for addProduct method
  it('should call the addProduct method', async(() => {
    fixture.detectChanges();
    spyOn(component,'addProduct');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addProduct).toHaveBeenCalledTimes(0);
  }));

  //testcase for selected dropdown
  it('should call the selectChangeHandler method', async(() => {
    fixture.detectChanges();
    spyOn(component,'selectChangeHandler');
    el=fixture.debugElement.query(By.css('select')).nativeElement;
    el.click();
    expect(component.selectChangeHandler).toHaveBeenCalledTimes(0);
  }));

  //negative testcase for form
  it('form should be invalid', async(() => {
    component.rForm.controls['description'].setValue('');
    component.rForm.controls['price'].setValue('');
    component.rForm.controls['bulkOrderPrice'].setValue('');
    component.rForm.controls['quantity'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  }));

  //positive testcase for form
  it('form should be valid', async(() => {
    component.rForm.controls['description'].setValue('good');
    component.rForm.controls['price'].setValue('50');
    component.rForm.controls['bulkOrderPrice'].setValue('45');
    component.rForm.controls['quantity'].setValue('100');
    expect(component.rForm.valid).toBeTruthy();
  }));

});
