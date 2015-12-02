# grunt-lama-pacos

> a happy lama pacos

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lama-pacos --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lama-pacos');
```

## The "lama_pacos" task

### Overview
In your project's Gruntfile, add a section named `lama_pacos` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  lama_pacos: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `lama_pacos`

A string value that is used to do something with whatever.

#### options.commentSymbol
Type: `String`
Default value: `//`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  lama_pacos: {
    options: {
      'who': 'lama_pacos',
      'commentSymbol': '//'
    },
    dist: ['examples/*.js']
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-12-2

## License
Copyright (c) 2015 Tommy Zhang. Licensed under the MIT license.