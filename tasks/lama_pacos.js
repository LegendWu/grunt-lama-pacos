/*
 * grunt-lama-pacos
 * 
 *
 * Copyright (c) 2015 Tommy Zhang
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('lama_pacos', 'a happy lama pacos', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        who: 'lama_pacos',
        commentSymbol: '//'
      }),
      duplicateCommentCheckingMap = {
        'lama_pacos': /┗┓┓┏━┳┓┏┛/
      },
      commentFilePathMap = {
        'lama_pacos': 'lama_pacos.txt'
      },
      commentFilePath = path.join(__dirname, commentFilePathMap[options.who]),
      commentContent = grunt.file.read(commentFilePath),
      commentLineArr = commentContent.split(grunt.util.normalizelf('\n'));

    commentLineArr = commentLineArr.map(function(commentLine){
      return options.commentSymbol + commentLine;
    });

    commentContent = commentLineArr.join(grunt.util.normalizelf('\n'));

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var originalFileContent = grunt.file.read(filepath);
        var newFileContent =  commentContent + grunt.util.normalizelf('\n') + originalFileContent;
        if(duplicateCommentCheckingMap[options.who].test(originalFileContent)){
          return;
        }
        grunt.file.write(filepath, newFileContent);
      });

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
