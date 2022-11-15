import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ArtworkService} from "../../service/artwork.service";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  categories: any;
  artworkTypes: any;

  constructor(
    private artworkService: ArtworkService,
    private route:Router
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
  goHome(){
    this.route.navigate(['artdly']);
    
  }

}
