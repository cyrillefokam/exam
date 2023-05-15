import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    title:'',
    description:'',
  
  }
  constructor(private _category:CategoryService,
    private _snack:MatSnackBar){}
  ngOnInit(): void {}
  formSubmit()
  {
    if(this.category.title.trim( )=='' || this.category.title==null)
    {
      this._snack.open("title Required!!",'',{
        duration:3000,
      })
      return; 
    }
    //all done
    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire('success!!','category is added succwssfuly','success');
      },
      (error)=>{
        console.log(error)
        Swal.fire('error!!' ,'server error','error');
      }
    );
  }


}
