import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeliveryOrder } from './models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit{

  @Output()
  onNewDeliveryOrder = new Subject<DeliveryOrder>()

  form!: FormGroup

  // fb: FormBuilder
  // // autowire the formbuilder
  // constructor(fb: FormBuilder){
  //   this.fb=fb
  // }
  //! same as above, can be public as well
  constructor(private fb: FormBuilder){
  }
  ngOnInit():void{
    // this method is called when the compented is created
    // for initiiallization
    this.form = this.createForm()
  }

  processDelivery(){
    const delivery: DeliveryOrder = this.form.value
    // const delivery = this.form.value as DeliveryOrder // same as above
    console.info('>>> delivery: ', delivery)
    this.onNewDeliveryOrder.next(delivery)
    //! clear the form
    this.form.reset()
  }

  private createForm(): FormGroup{
    return this.fb.group({
        name: this.fb.control<string>('Peter Parker'),
        address: this.fb.control<string>('9 Privet drive'),
        email: this.fb.control<string>('ironspider@marvel.com'),
        session: this.fb.control<string>(''),
        insurance: this.fb.control<boolean>(false),
        priority: this.fb.control<boolean>(false),
        deliveryDate: this.fb.control<string>(''),
        comments: this.fb.control<string>('this is awesome'),
      })
  }
}
