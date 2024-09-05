import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import {UserComponent} from './user/user.component'
import { ProductComponent } from './product/product.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {adminGuard} from '../../../guards/admin.guard'
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';


const routes: Routes = [
  {
    path: '',
    data: {
      
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'product',
      },
      // {
      //   path: 'colors',
      //   component: ColorsComponent,
      //   data: {
      //     title: 'Colors',
      //   },
      // },
      // {
      //   path: 'typography',
      //   component: TypographyComponent,
      //   data: {
          
      //   },
      // },
      {
        path: 'user',
        component: UserComponent,
        canActivate : [adminGuard],
        data: {
          title: 'Users',
        },
      },
      {
        path: 'product',
        component: ProductComponent,
        data: {
          title: 'Products',
        },
      },
      {
        path: 'aboutus',
        component : AboutusComponent,
        data : {
          title : 'About Us'
        }
        
      },
      {
        path : 'contactus',
        component : ContactusComponent,
        data :{
          title : 'Contact Us'
        }
      },
      {
        
          path : 'addproduct',
          component : AddproductComponent,
          data :{
            title : 'Add new Product'
          
        },
      },
      {
        path : 'updateprofile',
        component : UpdateProfileComponent,
        data :{
          title : 'Update Profile'
        }

      },
      {
        path : 'myprofile',
        component : MyProfileComponent,
        data :{
          title : 'My Profile'
        }

      },
      {
        path : 'changePassword',
        component : ChangePasswordComponent,
        data :{
          title : 'Change Password'
        }

      },
      {
        path : "viewproduct/:productid",
        component : ViewProductComponent,
        data : {
          title : 'Product Details'
        }

      },
      {
        path : 'cartitem',
        component : CartItemComponent,
        data : {
          title :'My Cart'
        }

      },
      {
        path : 'ShippingAddress',
        component : ShippingAddressComponent,
        data:{
          title :'Shipping Address'
        }

      }
      
     

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
