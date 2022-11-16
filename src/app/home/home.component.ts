import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ArtworkService} from "../../service/artwork.service";
import { Router } from '@angular/router';
import {InvitedUser} from "../../models/User";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  artworks: any;
  liked: boolean = false;

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
    private router:Router
  ){
  }

  ngOnInit(): void {
    this.artworkService.listArtworks().subscribe(res => {
      this.artworks = res;
      this.artworks = this.artworks.data;
      console.log(this.artworks);
    })
  }

  // haveLike(artworkId: any): any{
  //   this.artworkService.existLike(this.invitedUser.id, artworkId).subscribe(res => {
  //     console.log(res)
  //     return res;
  //   })
  // }

  like(){
    this.liked = !this.liked;
  }

  goRegister(){
    this.router.navigate(['register'])
  }
  goUpload(){
    this.router.navigate(['upload'])
  }
}
