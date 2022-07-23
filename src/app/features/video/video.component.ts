import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  stream!: MediaStream;
  
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
    navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      this.stream = stream;
    })
  }


}
