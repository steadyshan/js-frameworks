import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockStringBundlerHost } from '../../../../node_modules_1/@angular/tsc-wrapped/test/bundler_spec';
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
  imageList:string[] = [
    `assets/all-images/starters/intro-Ganesh.jpg`,
    `assets/all-images/starters/Aumkar-Ganesh-sept-2020-final.jpeg`,
    `assets/all-images/starters/AumGaShivParKashiVishwCTLightNov172020Final.jpeg`,
    `assets/all-images/starters/unsignedShivVeena12272020.jpeg`,
    `assets/all-images/starters/ShreeSiddhivinayakQ42020.jpeg`


  ];
  currentImage =  `assets/all-images/starters/intro-Ganesh.jpg`;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=> { console.log(JSON.stringify(params))});
  }

  showFullSize(source:string) {
    this.currentImage = source;
  }

}
