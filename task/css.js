const { src, dest } = require("gulp");

const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const groupCssMediaQueries = require("gulp-group-css-media-queries");

const css = () => {
    return src("./src/css/*.css", {sourcemaps: true})
        .pipe(concat("main.css"))
        .pipe(cssimport())
        .pipe(autoprefixer())
        .pipe(groupCssMediaQueries())
        .pipe(dest("./public/css", {sourcemaps: true}))
        .pipe(rename({suffix: ".min" }))
        .pipe(csso())
        .pipe(dest("./public/css", {sourcemaps: true}));
}

module.exports = css;