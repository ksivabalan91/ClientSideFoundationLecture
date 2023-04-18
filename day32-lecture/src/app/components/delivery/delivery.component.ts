import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  itemArray!: FormArray

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

  addItem(){
    const orderItem = this.createOrderItem()
    this.itemArray.push(orderItem)

  }
  deleteItem(idx: number){
    this.itemArray.removeAt(idx)
  }

  processDelivery(){
    const delivery: DeliveryOrder = this.form.value
    // const delivery = this.form.value as DeliveryOrder // same as above
    console.info('>>> delivery: ', delivery)
    this.onNewDeliveryOrder.next(delivery)
    //! clear the form
    this.form.reset()
  }

  hasError(cn:string):boolean{
    //! to ignore errors !!
    return !!(this.form.get(cn)?.invalid && this.form.get(cn)?.dirty)
  }

  isFormValid():boolean{
    // to get the delivery date value for business logic
    const dd = new Date(this.form.get('deliveryDate')?.value)
    if(!dd){
      return true
    }
    const deliveryDate = new Date(dd)
    const today = new Date()
    return this.form.invalid || (deliveryDate<today)
  }

  private createForm(): FormGroup{
    this.itemArray = this.fb.array([])
    return this.fb.group({
        name: this.fb.control<string>('',[Validators.required, Validators.minLength(3)]),
        address: this.fb.control<string>('9 Privet drive',[Validators.required]),
        email: this.fb.control<string>('ironspider@marvel.com',[Validators.required, Validators.email]),
        session: this.fb.control<string>('PM',[Validators.required]),
        insurance: this.fb.control<boolean>(false),
        priority: this.fb.control<boolean>(false),
        deliveryDate: this.fb.control<string>('',[Validators.required]),
        comments: this.fb.control<string>('this is awesome'),
        orderItems: this.fb.array([])
      })
  }

  private createOrderItem(): FormGroup{
    return this.fb.group({
      item: this.fb.control<string>('',[Validators.required]),
      quantity: this.fb.control<number>(1,[Validators.required, Validators.min(1)]),
    })
  }
}
