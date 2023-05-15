import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    username:'',
    password:'',
  };
  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){}
  ngOnInit(): void {}
  formSubmit(){
    console.log('login btn clicked');
    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
        this.snack.open("Username is required!!",'',{
          duration:3000,
        });
        return;
    }
    //request to serve to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('sucess');
        console.log(data);
        //login.....
        this.login.loginUser(data.token);
        this.login.getCurrentUser(this.loginData.username.trim()).subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect...admin:admin-dashboard
            //redirect...Normal:Normal-dashboard
            
            if(this.login.getUserRole()=="Admin")
            {
              //admin dashboard
              //window.location.href='/admin'
              this.router.navigate(['admin'])
              this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole()=="Normal"){
              //normal user dashboard
              //window.location.href='/user-dashboard'
              this.router.navigate(['user-dashboard'])
              this.login.loginStatusSubject.next(true);
            }else{
              this.login.logout();
            }
             
            });
        
      },
      (error)=>{
        console.log('Error!');
        console.log(error);
        this.snack.open("Invalid Details!! try again",'',{
          duration:3000,
        })
      }
    );
    
  }

}
