import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  qid: any
  qTitle:any
  content:any
 
  questions:any=[];

  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
    private _snck:MatSnackBar,
  ){}
  ngOnInit(): void {
   this.qid= this._route.snapshot.params['qid'];
   this.qTitle=this._route.snapshot.params['title']; 
   this._question.getQuestionsOfQuiz(this.qid).subscribe(
    (data:any )=>{
      console.log(data);
      this.questions=data;
    },
    (error)=>{
      console.log(error);
    }
   );
      
  }
  //deletequestion
  deleteQuestion(qid:any)
  {
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'are you sure,want to delete this question?',
    }).then((result)=>{
      if(result.isConfirmed)
      {
        //confirm
        this._question.deleteQuestion(qid).subscribe(
         (data:any)=>{
          this._snck.open('Question delete','',{
            duration:3000,
          });
          this.questions=this.questions.filter((q:any)=>q.questionId!==qid)
        },
        (error)=>{
          this._snck.open('Error in deleting questions','',{
            duration:3000,
          }); 
          console.log(error);
        });
      }
    });
  }
}
