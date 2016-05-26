'use strict';

var path = require('path');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var cpx = require('cpx');
var resourceDemoDir = path.join(__dirname, '..', '..', 'resources', 'demo');
var distDir = path.join(resourceDemoDir, path.basename(process.cwd()));
var pkg = require(path.join(process.cwd(), 'package.json'));
var files = pkg.files || [];

rimraf.sync(distDir);
mkdirp.sync(distDir);
files.push('./{dist, dist_tmp}/**/*');
files.push('index.html');
files.forEach(f => {
  cpx.copySync(f, distDir)
  console.log('cp ' + f + ' to ' + distDir);
});

