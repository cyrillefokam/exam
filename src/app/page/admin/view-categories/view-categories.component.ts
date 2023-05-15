import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories=[
    {
      cid:3,
      title:'PROGRAMMING',
      description:'this is testing category',
    },
    { 
      cid:3,
      title:'gk',
      description:'this is testing category',
    },
    {
      cid:3,
      title:'practice',
      description:'this is testing category',
    },
  ];
  constructor(private _category:CategoryService){}
  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories=data
      console.log(this.categories);
    }
   // (error)=>{
      
     // console.log(error);
     // Swal.fire('Error!','Error in loading data','error')
    //}
    );
      
  }

}
