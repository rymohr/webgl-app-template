import gulp from "gulp";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";

gulp.task("build", function() {
  browserify("./src/index.js", {debug: true})
    .transform(babelify)
    // .transform("glslify-live")
    .transform("glslify")
    .bundle()
    .on("error", console.error)
    .pipe(source("index.js"))
    .pipe(gulp.dest("./dist"));
});

// gulp.task("watch", ["build"], function() {
//   gulp.watch("src/**/*", ["build"]);
// });

gulp.task("default", ["build"]);
