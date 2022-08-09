const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");

const clear = require("./task/clear.js");
const html = require("./task/html.js");
const css = require("./task/css.js");
const js = require("./task/js.js");
const img = require("./task/img.js");

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    })
}

const watcher = () => {
    watch("./src/html/**/*.html", html).on("all", browserSync.reload);
    watch("./src/css/**/*.css", css).on("all", browserSync.reload);
    watch("./src/js/**/*.js", js).on("all", browserSync.reload);
    watch("./src/img/**/*.{png, jpg, jpeg, gif, svg}", img).on("all", browserSync.reload);
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.dev = series(
    clear,
    parallel(html, css, js, img),
    parallel(watcher, server)
);