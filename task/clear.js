const { src } = require("gulp");
const clean = require("gulp-clean");

const clear = () => {
    return src('./public', {allowEmpty: true})
        .pipe(clean());

}

module.exports = clear;