import {Component, OnInit} from '@angular/core';
import {ArtworkService} from "../../service/artwork.service";
import {Router} from "@angular/router";
import {InvitedUser} from "../../models/User";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit{

  categories: any = [];
  artworkTypes: any = [];
  canContinue: boolean = false;
  messages: any = [];

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

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: any; // Variable to store file

  constructor(
    private artworkService: ArtworkService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  createArtwork(tittleA: string, description: any, artworkType: any):any {
    try {
      const artwork: any = {
        tittle: tittleA,
        description: description,
        file: {
          pathFile: tittleA,
          typeFile: {
            fileType: this.file.type
          }
        },
        artworkType: artworkType,
        user: {
          id: "10000000-0000-0000-0000-000000000000",
          name: "Invitado",
          lastName: "Artdly",
          mail: "invitado@artdly.com",
          username: "InvitadoArtdly",
          password: "artdly",
          birthDate: "0001-01-01",
          description: "",
          private: false
        }
      }
      this.canContinue = true;
      return artwork;
    } catch (error){
      this.showMessage("Debe llenar todos los campos")
    }

  }

  registerArtwork(tittleA: any, description: any, artworkType: any){
    const artwork = this.createArtwork(tittleA, description, artworkType);
    try {
      this.artworkService.uploadArtwork(artwork).subscribe({
       next:(res)=>{ this.showMessage(res.messages[0].content)
        this.goHome()},
        error:(error)=>{console.log(error)
          this.showMessage(error.error.messages[0].content)}
      }
      )
    } catch (error) {
      console.log(error)
      this.showMessage("Debe seleccionar una imagen")
    }
  }

  goHome(): void {
    this.router.navigate(['artdly'])
  }

  ngOnInit(){
    this.artworkService.listArtworkType().subscribe(res => {
      this.artworkTypes = res;
      this.artworkTypes = this.artworkTypes.data;
    });
    this.artworkService.listCategories().subscribe(res => {
      this.categories = res;
      this.categories = this.categories.data;
    })
  }

// On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  // OnClick of button Upload
  onUpload(tittle: any) {
    this.loading = !this.loading;
    console.log(this.file);
    this.artworkService.pushFileToStorage(this.file, tittle).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable
        }
      }
    );
  }

  showMessage(message: string){
    const mySnackBar = this.snackBar.open(message, "Ok");
    mySnackBar.onAction().subscribe(() => {
      mySnackBar.dismiss()
    })
  }

}
