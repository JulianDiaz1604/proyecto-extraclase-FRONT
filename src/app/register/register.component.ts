import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ArtworkService} from "../../service/artwork.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  categories: any;
  artworkTypes: any;

  constructor(
    private artworkService: ArtworkService
  ){
  }

  ngOnInit(): void {
    this.artworkService.listArtworks().subscribe(res => {
      this.categories = res;
      this.categories = this.categories.data;
      console.log(this.categories);
    });
    this.artworkService.listArtworks().subscribe(res => {
      this.artworkTypes = res;
      this.artworkTypes = this.artworkTypes.data;
      console.log(this.artworkTypes);
    })
  }

}
