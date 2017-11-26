const gulp = require('gulp'),
inlineNg2Template = require('gulp-inline-ng2-template'),
clean = require('gulp-clean'),
sass = require('node-sass');

gulp.task('clean', function () {
return gulp.src(['./tmp', './dist'], {read: false})
  .pipe(clean());
});

const styleProcessor = (stylePath, ext, styleFile, callback) => {
  if (ext[0] === '.scss') {
    let sassObj = sass.renderSync({ file: stylePath });
    if (sassObj && sassObj['css']){
      styleFile = sassObj.css.toString('utf8');
    }
  }
  return callback(null, styleFile);  
};

gulp.task('inline-templates', ['clean'], function () {
return gulp.src('./src/dks-number-input/*.ts')
  .pipe(inlineNg2Template({base: 'src/dks-number-input', UseRelativePaths: true, indent: 0, styleProcessor: styleProcessor, removeLineBreaks: true}))
  .pipe(gulp.dest('.tmp'));
});

