import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ArtworkService} from "../../service/artwork.service";
import {InvitedUser, User} from "../../models/User";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{

  httpAnswer: any;
  invitedUser: InvitedUser = {
    id: "10000000-0000-0000-0000-000000000000",
    name: "Invitado",
    lastName: "Artdly",
    mail: "invitado@artdly.com",
    username: "InvitadoArtdly",
    password: "artdly",
    birthDate: "2022-11-13",
    description: "",
    isPrivate: "false"
  }

  constructor(
    private artworkService: ArtworkService,
    private route:Router,
    private snackBar: MatSnackBar
  ){
  }

  registerUser(name:any, lastName:any, email:any, nickname:any, password:any,description:any, birthDate:any){
    const user: User = {
      name: name,
      lastName: lastName,
      mail: email,
      username: nickname,
      password: password,
      birthDate: birthDate,
      description: description,
      isPrivate: false
    }
    this.artworkService.createUser(user).subscribe({
      next:(res:any)=>this.arreglo(res),
      error:(error)=>{console.log(error)
        this.showMessage(error.error.messages[0].content)
      }
    })
  }
  arreglo(res:any){
    this.httpAnswer = res;
    this.showMessage(this.httpAnswer.messages[0].content)
    this.goHome()
  }

  goHome(){
    this.route.navigate(['artdly']);
  }


  showMessage(message: string){
    const mySnackBar = this.snackBar.open(message, "Ok");
    mySnackBar.onAction().subscribe(() => {
      mySnackBar.dismiss()
    })
  }

}
