import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  canvas: any;
  ctx: any;
  images: any;
  curImage: any;
  width: number;
  height: number;
  imgNum: number;
  tot: number;

  constructor() { }

  ngOnInit() {
    this.imgNum = -1;
    this.tot = 0;
    this.width = 1000;
    this.height = 500;
    this.canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
  }

  updateImg(image) {
    let img = new Image();
    let url = window.URL;
    let src = url.createObjectURL(image);

    img.src = src;

    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, this.width, this.height);
      url.revokeObjectURL(src); 
    }
   
  }

  fileInput(files) {
    this.images = files;
    this.tot = files.length;
    this.imgNum = 0;
    this.curImage = this.images.item(this.imgNum);
    this.updateImg(this.curImage);
  }

  changeImg(change) {
    let newNum = this.imgNum + change;
    if(newNum >= 0 && newNum < this.tot) {
      this.imgNum = newNum; 
      this.curImage = this.images.item(newNum);
      this.updateImg(this.curImage);
    }
  }

}
