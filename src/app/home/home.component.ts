import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ArtworkService} from "../../service/artwork.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  artworks: any;
  liked: boolean = false;

  constructor(
    private artworkService: ArtworkService
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

}
