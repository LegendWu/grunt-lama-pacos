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
        template: 'lama_pacos',
        commentSymbol: '//'
      }),
      duplicateCommentCheckingMap = {
        'lama_pacos': /┗┓┓┏━┳┓┏┛/
      },
      commentFilePathMap = {
        'lama_pacos': 'templates/lama_pacos.txt'
      },
      commentFilePath = path.join(__dirname, commentFilePathMap[options.template]),
      commentContent = grunt.file.read(commentFilePath),
      commentLineArr = commentContent.split('\n');
      //grunt.util.normalizelf('\n') doesn't work on Windows 10

    commentLineArr = commentLineArr.map(function(commentLine){
      return options.commentSymbol + commentLine;
    });

    commentContent = commentLineArr.join('\n');

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
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
        var newFileContent =  commentContent + '\n' + originalFileContent;
        if(duplicateCommentCheckingMap[options.template].test(originalFileContent)){
          return;
        }
        grunt.file.write(filepath, newFileContent);
      });

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" added comment successfully.');
    });
  });

};
