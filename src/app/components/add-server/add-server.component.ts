import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServerService } from '../../shared/services/server.service';
import { Server } from '../../shared/model/model';

@Component({
  selector: 'app-add-server',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-server.component.html',
  styleUrl: './add-server.component.scss'
})
export class AddServerComponent implements OnInit {
  servers:Server[] | undefined;
  @Input() modalData:any;
  serverForm!: FormGroup;
  @Output() closeEventOutput = new EventEmitter();

  constructor(private serverService:ServerService){

  }

ngOnInit(): void {
  this.servers=this.serverService.getServers();
}

close(val=false){
  this.closeEventOutput.emit(val);
}

createServerForm(){
this.serverForm=new FormGroup({
  id:new FormControl(['',Validators.required]),
  name:new FormControl(['',Validators.required]),
  desc:new FormControl(['',Validators.required])
})
}

get serverFormValue(){
 return this.serverForm.getRawValue();
}

addServer(){
  if(this.serverForm.valid){
    this.serverForm.markAllAsTouched();
    return
  }
  this.serverService.addServer(this.serverFormValue);
  this.close(true);
}


}
