import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping-address',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.scss'
})
export class ShippingAddressComponent {
  MyForm : any;
  activeTab: string = 'credit-card';

  constructor() { }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    console.log(this.activeTab);
  }

  onFormSubmit(event: Event): void {
    // Handle form submission
    event.preventDefault();
    console.log('Form submitted');
  }
}
