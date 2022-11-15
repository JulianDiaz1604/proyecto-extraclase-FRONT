import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ArtworkService} from "../../service/artwork.service";
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  artworks: any;
  liked: boolean = false;

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
