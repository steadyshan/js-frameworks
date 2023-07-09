import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.css']
})
export class AddImagesComponent implements OnInit {
  imageList = ["A"] ;
  imagesMoved = true ;
  jsonListingFile =""
  jsonListing=[""];
  constructor(private listService: ListService, ) { }

  ngOnInit(): void {
  }

  passImageFolders(imageFolders:string[]) {
    this.imageList = imageFolders ;
    this.imagesMoved = true ;
    console.log(`${JSON.stringify(imageFolders)}`);
  }
  jsonFileToUpdate(configFileFolderAndKeys:string[]) {
    this.jsonListingFile = configFileFolderAndKeys[0] ;
  }
  jsonToUpdate(jsonStrings:string[]) {
    console.log(`${jsonStrings}`);
    this.jsonListing = jsonStrings ;
 
  }
  // Getters, Styling etc
  componentDivStyle = {padding: '3px', background: 'aliceblue', margin:'3px', border: '3px inset blue'};
  get ComponentDivStyle()  :any {
    return  this.componentDivStyle ;
  }
  displayToggle(id:any, show = true )  {
    let m = document.getElementById(id) ;
   if (m) {
      show == true ? m.style.display = 'block':m.style.display = 'none';
   }
  }
  showComponent(whichDiv:any)  {
   
  }
  postJSONUpdate() {
    this.listService.updateListFile(this.jsonListing, this.jsonListingFile)
     .subscribe(
      (response:any)=> { 
        console.log('success') ;
        this.imageList = [""];
      },
      (err:any)=> { 
         console.log(`ERROR ${err}`)
      },
      () => {
        console.log('complete');      
      }
    )
  }
}
