import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  stream!: MediaStream;
  streamStatus = true;
  
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
    const front = false;
    navigator.mediaDevices
    .getUserMedia({ audio: true, video: { facingMode: (front ? "user" : "environment") } })
    .then((stream) => {
      // window.URL.createObjectURL(stream)
      this.stream = stream;
      this.streamStatus = true;
    })
  }

  log(input : any){
    console.log(input)
  }

  toggle(){
    const self = this;
    this.stream.getTracks().forEach(function(track) {
      track.enabled = !track.enabled;
      self.streamStatus = track.enabled;
    });
  }

  // 
  flip(){
    const self = this;
    this.stream.getTracks().forEach(function(track) {
      self.streamStatus = track.enabled;
    });
  }


}
