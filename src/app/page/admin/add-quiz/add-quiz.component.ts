import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'services/category.service';
import { QuizService } from 'services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  
 categories: any[] = [];
 quizData={

    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:'true',
    category:{
      cid:'',
    },
 };

  

constructor(private _cat:CategoryService,private _snack:MatSnackBar,private _quiz:QuizService){}
ngOnInit(): void {

  this._cat.categories().subscribe(
    (data:any)=>{
      this.categories=data;
      //console.log(this.categories)
    },
    (error)=>{
      console.log(error);
      Swal.fire('error!!','error in loading data server','error')
     
    }
  );
    
}

addQuiz(){
  if(this.quizData.title.trim()=='' || this.quizData.title==null){
  this._snack.open('Title required!!','',{
    duration:3000,
  });
  return;
}
//validation
this._quiz.addQuiz(this.quizData).subscribe(
  (data)=>{
    Swal.fire('Success','quiz is added',"success");
    this.quizData={

      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active:'true',
      category:{
        cid:'',
      },
   };
  },
  (error: any)=>{
    console.log(error) 
    Swal.fire('error!!' ,'error while adding quiz','error');
  }
)

}
}


