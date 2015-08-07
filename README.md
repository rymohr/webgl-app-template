This template provides a framework for retina-ready WebGL apps
with support for:

- ES6/7 (through babel)
- GLSL modules (through glslify)
- live reloading (through budo / glslify-live)

# Getting started

```
npm install
npm start
open http://localhost:9966
```

You should now see a big ugly baboon in your browser if everything installed
correctly. If you make any changes to the source the page will
automatically refresh.

The interesting stuff is in
- https://github.com/rymohr/webgl-app-template/blob/master/src/render.js
- https://github.com/rymohr/webgl-app-template/tree/master/src/shaders

If you're using Atom you can use the [language-glsl][1] package
for GLSL syntax highlighting.

```
apm install language-glsl
```

# TODO

- [ ] Look into other stackgl packages http://stack.gl/packages/
- [ ] Look into other glsl modules http://stack.gl/packages/#stackgl/glsl-specular-beckmann
- [ ] Look into PEX http://vorg.github.io/pex/
- [ ] Find a replacement to budo that lets us use gulp

# Resources

- http://stack.gl
- http://glslb.in
- http://mattdesl.svbtle.com/glslify
- http://mattdesl.svbtle.com/rapid-prototyping


[1]: https://atom.io/packages/language-glsl
