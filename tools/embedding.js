"use strict";

var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');

function main() {
  var inputHtml = process.argv[2];
  var outputPath = process.argv[3];

  console.log(inputHtml, outputPath);
  if(!outputPath || !outputPath.length) {
    console.error('invali usage');
    return;
  }

  var contents = fs.readFileSync(inputHtml, 'utf-8')
  var $ = cheerio.load(contents);
  $('section[data-markdown]').each(function() {
    var $section = $(this);
    var slidePath = $section.attr('data-markdown');
    var slideContent = fs.readFileSync(slidePath, 'utf-8');
    $section.attr('data-separator', "BRBRBR");
    $section.attr('data-markdown', '');
    $section.html('<script type="template/markdown">'+ slideContent + '</script>');
  });

  $('section[data-html]').each(function() {
    var $section = $(this);
    var slidePath = $section.attr('data-html');
    var slideContent = fs.readFileSync(slidePath, 'utf-8');
    $section.removeAttr('data-html', '');
    $section.html(slideContent);
  });

  fs.writeFileSync(outputPath, $.html(), 'utf-8');

}

main();

