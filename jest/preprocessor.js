var babel = require("babel-core");

module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && babel.util.canCompile(filename)) {
      return babel.transform(src, {
        filename: filename,
        retainLines: true,
        auxiliaryCommentBefore: "istanbul ignore next",
        presets: ["es2015","react", "stage-0"]
      }).code;
    }

    return src;
  }
};