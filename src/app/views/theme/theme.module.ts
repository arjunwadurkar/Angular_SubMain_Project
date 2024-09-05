import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent, ThemeColorComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { MatTableModule} from '@angular/material/table';

import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserComponent, } from './user/user.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SetroleComponent } from './setrole/setrole.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { NgToastModule } from 'ng-angular-popup';
import {FilterpipePipe} from '../../../pipes/filterpipe.pipe';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from  './contactus/contactus.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {MatButtonModule} from '@angular/material/button';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {ShippingAddressComponent} from './shipping-address/shipping-address.component';



@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    MatTableModule,
    MatFormFieldModule,
     MatInputModule, 
      MatSortModule,
       MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,MatButtonModule
    
  ],
  declarations: [
    ColorsComponent,
    ThemeColorComponent,
    TypographyComponent,
    UserComponent,
    SetroleComponent,
    ProductComponent,
    FilterpipePipe,
    AboutusComponent,
    ContactusComponent,
    AddproductComponent,
    UpdateProfileComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    ViewProductComponent,
    CartItemComponent,
    ShippingAddressComponent,
    
    
    
  ]
})
export class ThemeModule {
}
