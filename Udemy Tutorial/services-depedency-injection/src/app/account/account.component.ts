import { Component, Input, inject } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  //! using accounts service instead
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  
  private loggingService!: LoggingService;
  private accountsService!: AccountsService;
  
  constructor(){
    this.loggingService = inject(LoggingService);
    this.accountsService = inject(AccountsService);
  }
  
  onSetTo(status: string) {
    //! using accounts service instead
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);

    this.accountsService.updateStatus(this.id,status);
    this.loggingService.logStatusChange(status)
  }

}
