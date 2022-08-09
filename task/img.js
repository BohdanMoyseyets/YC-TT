const { src, dest } = require("gulp");

const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

const img = () => {
    return src("./src/img/*.{png, jpg, jpeg, gif, svg}")
        .pipe(newer("./public/img"))
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(dest("./public/img"));
}

module.exports = img;