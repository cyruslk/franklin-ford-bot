import React, { Component } from 'react';
import './App.css';
import * as faceapi from 'face-api.js';
import WebCamPicture from './components/WebCamPicture.js';
let ford_txt_test = require('./ford_txt_test.js');


const MODEL_URL = '/models'
const minConfidence = 0.6
const testImage = ''

export default class App extends Component {

  constructor(props){
    super(props);
    this.fullFaceDescriptions = null;
    this.canvas = React.createRef();
    this.canvasPicWebCam = React.createRef();
    this.state = {
      faceLandmarks: "",
      fordText: ""
    }
  }

  async componentDidMount() {
    await this.loadModels();
    const testImageHTML = document.getElementById('test')
    this.drawHTMLImage(this.canvas.current,testImageHTML,296,296);
    await this.getFullFaceDescription(this.canvas.current);
    this.drawDescription(this.canvas.current);

    console.log(ford_txt_test);
      this.setState({
        fordText: ford_txt_test[0].split(" ")
      })
  }

  async loadModels () {
    //await faceapi.loadModels(MODEL_URL)
    await faceapi.loadFaceDetectionModel(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)
  }

  getFullFaceDescription = async (canvas) => {
    console.log(canvas);
    this.fullFaceDescriptions = await faceapi.allFaces(canvas, minConfidence);
    const data = this.fullFaceDescriptions;
    if(data.length>0){
      console.log(data[0].landmarks._faceLandmarks);
      this.setState({    
        faceLandmarks: data[0].landmarks._faceLandmarks
      })
    }
  }

  drawDescription = (canvas) => {
    this.fullFaceDescriptions.forEach((fd, i) => {
      faceapi.drawLandmarks(canvas, fd.landmarks, { drawLines: false })
    })
  }

  drawHTMLImage(canvas,image,width,height){
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image,0,0,width,height);
  }

  landmarkWebCamPicture = (picture) => {
    const ctx = this.canvasPicWebCam.current.getContext("2d");
    var image = new Image();
    image.onload = async () => {
      ctx.drawImage(image,0,0);
      await this.getFullFaceDescription(this.canvasPicWebCam.current);
      this.drawDescription(this.canvasPicWebCam.current);
    };
    image.src = picture;
  }

  render() {
    if(this.state.faceLandmarks.length === 0){
      return (
        <div className="App" >
            <img id="test" src={testImage} alt="test" style={{display: "none"}}/>
            <canvas ref={this.canvas} width={296} height={296} />
          <WebCamPicture landmarkPicture={this.landmarkWebCamPicture} />
          <canvas ref={this.canvasPicWebCam} width={350} height={350} />
        </div>
      );
    }else{
      const ford = this.state.fordText;
      const landmarks = this.state.faceLandmarks
      .map((ele, index) => {
        return (
          <span key={index}>
            <span>{ford[Math.trunc(ele.x)]}</span>
            <span>{ford[Math.trunc(ele.y)]}</span>
          </span>
        )
      })


      return (
        <div className="App" >
            <img id="test" src={testImage} alt="test" style={{display: "none"}}/>
            <canvas ref={this.canvas} width={296} height={296} />
          <WebCamPicture landmarkPicture={this.landmarkWebCamPicture} />
          <canvas ref={this.canvasPicWebCam} width={350} height={350} />
            <div className="spans_container">
            {landmarks}
            </div>
        </div>
      );
    }
  }
}
