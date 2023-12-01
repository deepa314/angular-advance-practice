import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/services/data.services';
import { concatMap, tap } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-callback-hell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './callback-hell.component.html',
  styleUrl: './callback-hell.component.scss'
})
export class CallbackHellComponent implements OnInit {

  constructor(private service:DataService){}
  data!:any;

  ngOnInit(): void {
    this.data=this.service.getUser().pipe(
      tap((user)=>console.log(user)),
      concatMap((user)=>this.service.getBlogById(user.id)),
      tap((blog)=>console.log(blog)),
      concatMap((blog)=>this.service.getCategoryById(blog.postId))
    ).subscribe((data)=>{
      console.log('category',data);
    })
      
    
  }



}
