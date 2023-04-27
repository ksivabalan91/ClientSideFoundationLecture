import { Component } from '@angular/core';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DeliveryOrder } from './components/delivery/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32-lecture';
  orders: DeliveryOrder[]=[]

  processNewOrder(order: DeliveryOrder){
    this.orders.unshift(order)
  }
}
