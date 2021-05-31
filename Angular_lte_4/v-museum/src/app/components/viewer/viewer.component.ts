import { CompileMetadataResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import * as fs from 'fs';
// import { MockStringBundlerHost } from '../../../../node_modules_1/@angular/tsc-wrapped/test/bundler_spec';
/* interface DataDetail {
  fileName:string;
  type:string;// 'img'
  folder:string;
}
*/
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  imageListX:string[] = [
    `assets/all-images/starters/intro-Ganesh.jpg`,
    `assets/all-images/starters/Aumkar-Ganesh-sept-2020-final.jpeg`,
    `assets/all-images/starters/AumGaShivParKashiVishwCTLightNov172020Final.jpeg`,
    `assets/all-images/starters/unsignedShivVeena12272020.jpeg`,
    `assets/all-images/starters/ShreeSiddhivinayakQ42020.jpeg`


  ];
  selectedImageList:string[] = [ `assets/all-images-demo/starters/su-30-1.jpeg`,
  `assets/all-images-demo/starters/train1.jpeg`,
  `assets/all-images-demo/starters/boat1.jpeg`,
  `assets/all-images-demo/starters/car1.jpeg`,
  `assets/all-images-demo/starters/dc-10-1.jpeg`,
  `assets/all-images-demo/starters/train2.jpeg`,
  `assets/all-images-demo/starters/ship1.jpeg`,
  `assets/all-images-demo/starters/car2.jpeg`,];
  imageList2:any[] = [
   { 
    folder:'starters',
    files: [`su-30-1.jpeg`,
            `train1.jpeg`,
            `boat1.jpeg`,
            `car1.jpeg`,
            `dc-10-1.jpeg`,
            `train2.jpeg`,
            `ship1.jpeg`,
            `car2.jpeg`,
          ]
   }, { 
    folder:'planes',
    files: [`su-30-1.jpeg`,
    `dc-10-1.jpeg`,
          ]
   },{ 
    folder:'trains',
    files: [`train1.jpeg`,
    `train2.jpeg`]
   }, { 
    folder:'ships',
    files: [`boat1.jpeg`,
            `ship1.jpeg`,
          ]
   }, { 
    folder:'cars',
    files: [`car1.jpeg`,
            `car2.jpeg`,
          ]
   },

  ];
  imageList:any[] = [
    { 
     folder:'starters',
     files: [`intro-Ganesh.jpg`,
             `Aumkar-Ganesh-sept-2020-final.jpeg`,
             `AumGaShivParKashiVishwCTLightNov172020Final.jpeg`,
             `unsignedShivVeena12272020.jpeg`,
             `ShreeSiddhivinayakQ42020.jpeg`,
           ]
    },{ 
      folder:'starters-2',
      files: [`su-30-1.jpeg`,
              `train1.jpeg`,
              `boat1.jpeg`,
              `car1.jpeg`,
              `dc-10-1.jpeg`,
              `train2.jpeg`,
              `ship1.jpeg`,
              `car2.jpeg`,
            ]
     }, { 
     folder:'planes',
     files: [`su-30-1.jpeg`,
     `dc-10-1.jpeg`,
           ]
    },{ 
     folder:'trains',
     files: [`train1.jpeg`,
     `train2.jpeg`]
    }, { 
     folder:'ships',
     files: [`boat1.jpeg`,
             `ship1.jpeg`,
           ]
    }, { 
     folder:'cars',
     files: [`car1.jpeg`,
             `car2.jpeg`,
           ]
    },
 
   ];
  currentImage =  this.selectedImageList[0]; // `assets/all-images-demo/starters/su-30-1.jpeg`;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let themed:any = null ;
    let foundList:any = null ;
    this.activatedRoute.paramMap.subscribe(param => 
      { 
        themed = param; console.log(themed.params.theme);
        foundList = this.imageList.filter(x => x.folder === themed.params.theme.toString());
        if (foundList !== null && foundList.length > 0) {
          let foundFolder = foundList[0].folder;
          this.selectedImageList = [];
          foundList[0]
              .files
              .forEach( fileName => this.selectedImageList.push(`assets/all-images/${foundFolder}/${fileName}`));
          }
          this.currentImage = this.selectedImageList[0];
      });
    
  
  }

  showFullSize(source:string) {
    this.currentImage = source;
  }

}
