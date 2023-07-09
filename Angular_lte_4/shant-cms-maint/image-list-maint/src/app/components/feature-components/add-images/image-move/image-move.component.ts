import { Component, OnInit } from '@angular/core';
import { LookupValues } from '../../../utils/lookup-values';
import { ListService } from '../../../../services/list.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-image-move',
  templateUrl: './image-move.component.html',
  styleUrls: ['./image-move.component.css']
})
export class ImageMoveComponent implements OnInit {
  mockdata = true; 
  @Output() imageVersionsDone = new EventEmitter<string[]>();
  
  lookups: LookupValues = new LookupValues();
  destinationStart = this.lookups.rootImageDestinationFolder ;
  rootImageSourceFolder = this.lookups.rootImageSourceFolder ;
  rootImageDestinationFolder = this.lookups.rootImageDestinationFolder ;
  currentParentFolder = this.lookups.rootImageDestinationFolder ;
  webAppRelativeFolderRoot = this.WebAppRoot;
  currentWebAppParentFolder =  this.WebAppRoot;
  level1Files = ["",""] ;
  level1Select = "";
  level1WebAppSelect = "";
  level2Files = ["",""] ;
  level2Select = "";
  level3Files = ["",""] ;
  level3Select = "";
  imageFileName="ee"
  imageFiles:string[]=[] ;
  constructor(private listService: ListService) { }
  get WebAppRoot() : string 
  {
    ;
    return this.currentParentFolder.substring(this.currentParentFolder.indexOf('asset') ) ;
  }
  ngOnInit(): void {
    this.getImageFolders(this.rootImageDestinationFolder, 1) ;
  }
  getImageSubFolder(event:any, level:number){
    switch(level) {
      case 1:  this.level1Select =  event.target.value;
              this.currentParentFolder = `${this.rootImageDestinationFolder}/${event.target.value}`;
              this.currentWebAppParentFolder  = `${this.webAppRelativeFolderRoot}${event.target.value}`
        break ;
      case 2:  this.level2Select =  event.target.value;
        this.currentParentFolder = `${this.rootImageDestinationFolder}/${this.level1Select}/${event.target.value}`;
        this.currentWebAppParentFolder  = `${this.webAppRelativeFolderRoot}${this.level1Select}${event.target.value}`;
        break ;
      case 3:  this.level3Select =  event.target.value;
        this.currentParentFolder = `${this.rootImageDestinationFolder}/${this.level1Select}/${this.level2Select}/${event.target.value}`;
        this.currentWebAppParentFolder  = `${this.webAppRelativeFolderRoot}${this.level1Select}${this.level2Select}/${event.target.value}`;
        break ;
    }
     this.getImageFolders(this.currentParentFolder, level) ;
  }
  
  getImageFolders(parent:string, level:number)  {
    this.listService.getFolderContent(parent)// { fileName: "tedt",description:"hefhkf"})
   .subscribe(
     (response:any)=> { 
       switch(level) {
         case 1:  this.level1Files = response ;
           break ;
         case 2:  this.level2Files = response ;
           break ;
         case 3:  this.level3Files = response ;
           break ;
       }
      
     },
     (err:any)=>{ console.log(`ERROR ${err}`);  ; },
     () => { console.log('complete') ;   },
   )
 } 
    moveFile() {
        let moveDetail = {
          sourceFolder: this.rootImageSourceFolder,
          destinationFolder:this.currentParentFolder,
          sourceFileName:this.imageFileName,   
          destFileName:this.imageFileName,   
        }
        this.listService.moveImageFile( moveDetail)// { fileName: "tedt",description:"hefhkf"})
        .subscribe(
          (response:any)=> { 
            console.log('success') ;
            let assetInd = this.currentParentFolder.indexOf('asset') ;
            this.imageFiles.push(`${this.currentParentFolder.substring(assetInd).replace(`//`,`/`)}/${this.imageFileName}`);
            
          },
          (err:any)=> { 
            let assetInd = this.currentParentFolder.indexOf('asset') ;
            this.imageFiles.push(`${this.currentParentFolder.substring(assetInd).replace(`//`,`/`)}/${this.imageFileName}`);
            console.log(`ERROR ${err}`)
          },
          () => {
            console.log('complete');
            let assetInd = this.currentParentFolder.indexOf('asset') ;
            this.imageFiles.push(`${this.currentParentFolder.substring(assetInd).replace(`//`,`/`)}/${this.imageFileName}`);
            
          }
        )
    }
    moveFileComplete() {
      this.imageVersionsDone.emit(this.imageFiles);
    }
    moveFileReverse() {
      let moveDetail = {
        sourceFolder: this.currentParentFolder,
        destinationFolder:this.rootImageSourceFolder,
        sourceFileName:this.imageFileName,   
        destFileName:this.imageFileName,   
      }
      this.listService.moveImageFile( moveDetail)// { fileName: "tedt",description:"hefhkf"})
      .subscribe(
        (response:any)=> { 
          console.log('success') ;
        },
        (err:any)=>console.log(`ERROR ${err}`),
        () => console.log('complete'),
      )
    }
}
