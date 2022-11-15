import {Component, OnInit} from '@angular/core';
import {ArtworkService} from "../../service/artwork.service";
import {Router} from "@angular/router";
import {InvitedUser} from "../../models/User";

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit{

  categories: any = [];
  artworkTypes: any = [];

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
    private router: Router
  ) {
  }

  createArtwork(tittleA: string, description: any, artworkType: any):any {
    console.log(tittleA, description, artworkType)
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
    return artwork;
  }

  registerArtwork(tittleA: any, description: any, artworkType: any){
    const artwork = this.createArtwork(tittleA, description, artworkType);
    this.artworkService.uploadArtwork(artwork).subscribe(res => {
      console.log(res);
    })
    this.onUpload(tittleA);
    this.ngOnInit();
    // this.goHome();
  }

  goHome(): void {
    this.router.navigate(['artdly'])
  }

  ngOnInit(){
    this.artworkService.listArtworkType().subscribe(res => {
      this.artworkTypes = res;
      this.artworkTypes = this.artworkTypes.data;
      console.log(this.artworkTypes)
    });
    this.artworkService.listCategories().subscribe(res => {
      this.categories = res;
      this.categories = this.categories.data;
      console.log(this.categories)
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

}
