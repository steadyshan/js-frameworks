import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiline',
  templateUrl: './multiline.component.html',
  styleUrls: ['./multiline.component.css']
})
export class MultilineComponent implements OnInit {
  @Input() entityName = "" ;
  @Input() textLines = [""] ;
  @Output() multiTextDone = new EventEmitter<string[]>();
  
  constructor() { }

  ngOnInit(): void {
  }
  addLine() {
    this.textLines.push("") ;
  }
  completed()
  {
    this.multiTextDone.emit(this.textLines);
  }
  getId(lineIndex:any) {
    return `content-${lineIndex}`
  }
}
