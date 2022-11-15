import {Component, OnInit} from '@angular/core';
import {UploadService} from "../../service/upload.service";
import {ArtworkService} from "../../service/artwork.service";
import {Router} from "@angular/router";
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit{

  categories: any;
  artworkTypes: any;

  constructor(
    private artworkService: ArtworkService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.artworkService.listCategories().subscribe(res => {
      this.categories = res;
      this.categories = this.categories.data;
      console.log(this.categories);
    });
    this.artworkService.listArtworkType().subscribe(res => {
      this.artworkTypes = res;
      this.artworkTypes = this.artworkTypes.data;
      console.log(this.artworkTypes);
    })
  }

goHome():void{
  this.router.navigate(['artdly'])
}


}
