import ready from "domready";
import createContext from "webgl-context";
import createLoop from "canvas-loop";

const gl = createContext();
const canvas = gl.canvas;

const app = createLoop(canvas, {
  scale: window.devicePixelRatio
});

const render = require("./render")(gl);

app.on("tick", render);

app.on("resize", function() {
  let [width, height] = app.shape;
  console.log("canvas resized", width, height);
});

ready(function() {
  document.body.appendChild(canvas);
  app.start();
});
