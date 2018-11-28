import React, { Component } from "react";
import "./index.css";
export class EmptyPage extends Component {
  componentDidMount() {
    let canvas = this.canvas;
    let context = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    let fontSize = 16;
    let colunms = Math.floor(W / fontSize);
    let drops = [];
    for (var i = 0; i < colunms; i++) {
      drops.push(0);
    }
    var str = "CANVASJAVASCRIPThtmljavasrciptnksdanlkn";

    function draw() {
      context.fillStyle = "rgb(0,0,0,.05)";
      context.fillRect(0, 0, W, H);
      context.font = "700 " + fontSize * 0.7 + "px 微软雅黑";
      context.fillStyle = "#00cc33";
      for (var i = 0; i < colunms; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      window.requestAnimationFrame(draw);
    }
    draw();
  }
  render() {
    return (
      <div className="canvas-wrapper">
        <canvas
          className="canvas"
          ref={canvas => {
            this.canvas = canvas;
          }}
        />
      </div>
    );
  }
}

export default EmptyPage;
