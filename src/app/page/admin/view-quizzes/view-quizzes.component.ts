import { Component,OnInit } from '@angular/core';
import { QuizService } from 'services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
[x: string]: any;
  quizzes=[
    {
      qid:23,
      title:'Basic java Quiz',
      description:'core Java is the part of Java SE where the developers develop desktop-based applications by using the basic concepts of Java where JDK (Java Development ...',
      maxMarks:'50',
      numberOfQuestions:'16',
      active:'',
      category:{
        title:'programming'
      }
    },
    {
      qid:23,
      title:'Basic java Quiz',
      description:'core Java is the part of Java SE where the developers develop desktop-based applications by using the basic concepts of Java where JDK (Java Development ...',
      maxMarks:'50',
      numberOfQuestions:'14',
      active:'',
      category:{
        title:'programming'
      },
    },
  ];
  constructor(private _quiz:QuizService){}
  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!',"Error loading data!",'error')
      }
    )
      
  }
  deleteQuiz(qid: any)
  {
    Swal.fire({
      icon:'info',
      'title':"are you sure?",
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this._quiz.deleteQuiz(qid).subscribe(
          (data)=>{
           this.quizzes= this.quizzes.filter((quiz)=>quiz.qid!=qid)
            Swal.fire('success','quiz is deleted','success' )
        
          },
          (error)=>{
            Swal.fire('Error','error in deleted quiz','error' )
        
          }
          );
        
      }
    })
  }

}
