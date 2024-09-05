import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  // {
  //   title: true,
  //   name: 'Users'
  // },
 

  {
    name: 'Product',
   url: '/theme/product',
    // linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cib-product-hunt' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   // badge: {
  //   //   color: 'info',
  //   //   text: 'NEW'
  //   // }
  // },
  {
    name: 'Users',
   url: '/theme/user',
    // linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'About Us',
   url: '/theme/aboutus',
    // linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-contact' }
  },
  {
    name:'Contact Us',
    url: '/theme/contactus',
    iconComponent: { name: 'cil-phone' }

  }
  // {
  //   name: 'typography',
  //  url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
]

// const userRole = localStorage.getItem('role');

// // If user role is not equal to 'admin', remove the 'Dashboard' menu item
// if (userRole !== 'admin') {
//   const dashboardIndex = navItems.findIndex(item => item.name === 'Dashboard');
//   if (dashboardIndex !== -1) {
//     navItems.splice(dashboardIndex, 1);
//   }
// }