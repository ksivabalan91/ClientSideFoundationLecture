import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  //! no longer required as now we are using accounts service to store data
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //! instantiate the services, providers add in appmodule
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    this.accountsService.statusEmitter.subscribe(
      (status:string)=>alert("New Status : "+status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);

    this.accountsService.addAccount(accountName,accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

}
