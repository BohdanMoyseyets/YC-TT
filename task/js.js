const { src, dest } = require("gulp");

const babel = require("gulp-babel")

const js = () => {
    return src("./src/js/*.js", { sourcemaps: true })
        .pipe(babel())
        .pipe(dest("./public/js", { sourcemaps: true }));
}

module.exports = js;