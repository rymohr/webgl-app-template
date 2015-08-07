const glslify = require("glslify"); // not es6 friendly

import createTexture from "gl-texture2d";
import createShader from "gl-shader";

import triangle from "a-big-triangle";
import baboon from "baboon-image";

export default function(gl) {
  // grab a test image, rotate it upright
  const texture = createTexture(gl, baboon.transpose(1, 0, 2));

  const shader = createShader(gl,
    glslify("./shaders/blend.vert"),
    glslify("./shaders/blend.frag")
  );

  function render(dt) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    shader.bind();
    shader.uniforms.colorBuffer = 0;

    texture.bind();
    triangle(gl);
  }

  return render;
};
