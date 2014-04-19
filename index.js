'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var StudioGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.green('Deploying Studio w/ Canvas, Paint, Brush & Water! ;0'));

    var prompts = [{
      name: 'projectName',
      message: ' What do you want to call you\'re project?'
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('project');
    this.mkdir('project/css');
    this.mkdir('project/scss');
    this.mkdir('project/js');
    this.mkdir('project/docs');

    this.copy('package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    
    this.copy('.gitignore', 'project/.gitignore');

    this.copy('index.html', 'project/index.html');
    this.copy('404.html', 'project/404.html');

    this.copy('paint.css', 'project/css/paint.css');
    
    this.copy('_base.scss', 'project/scss/_base.scss');
    this.copy('_buttons.scss', 'project/scss/_buttons.scss');
    this.copy('_canvas.scss', 'project/scss/_canvas.scss');
    this.copy('_elements.scss', 'project/scss/_elements.scss');
    this.copy('_options.scss', 'project/scss/_options.scss');
    this.copy('_reset.scss', 'project/scss/_reset.scss');
    this.copy('_utility.scss', 'project/scss/_utility.scss');
    this.copy('_water.scss', 'project/scss/_water.scss');
    this.copy('_flexbox.scss', 'project/scss/_flexbox.scss');
    this.copy('paint.scss', 'project/scss/paint.scss');
    
    this.copy('brush.js', 'project/js/brush.js');
    
    this.copy('gruntfile.js', 'project/gruntfile.js');
    this.directory('node_modules', 'project/node_modules');
    this.copy('package.json', 'project/package.json');

    this.copy('LOGGER.md', 'project/docs/LOGGER.md');
    this.copy('TRACKER.md', 'project/docs/TRACKER.md');
    }
});

module.exports = StudioGenerator;