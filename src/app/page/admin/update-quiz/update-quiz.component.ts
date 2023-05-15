import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'services/category.service';
import { QuizService } from 'services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  constructor(private _route:ActivatedRoute,
             private _quiz:QuizService,
             private _cat:CategoryService,
             private _router:Router){}
  qid=0;
  quiz:any
  categories:any
  
  ngOnInit(): void {
   this.qid= this._route.snapshot.params['qid'];
   //alert(this.qid);
   this._quiz.getQuiz(this.qid).subscribe(
    (data)=>{
      this.quiz=data;
      console.log(this.quiz);

    },
    (error)=>{
      console.log(error);
    }
   );
   this._cat.categories().subscribe(
    (data)=>{
      this.categories=data;
    },error=>{
      alert('error in loading categories')
    }
   )
      
  }
  public updateData(){
   this._quiz.updateQuiz(this.quiz).subscribe(
    (data)=>{
      Swal.fire("success!!",'quiz update','success').then((e)=>
      {
        this._router.navigate(['/admin/quizzes']);
      });
    },
    (error)=>{
      Swal.fire("error!!",'error in updating quiz','error');
      console.log(error);
    }
   )
  }

}
