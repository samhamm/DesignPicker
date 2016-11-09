'use strict';
var nailDesignsImg = [];
var newImg = [];
var picture;



new NailDesigns('beigenblack', 'nails.jpg/beigenblack.jpg');
new NailDesigns('blackandwhite', 'nails.jpg/blackandwhite.jpg ');
new NailDesigns('blackswirlnail,s', 'nails.jpg/blackswirl.jpg');
new NailDesigns('cherryblosnails', 'nails.jpg/cherryblos.jpg');
new NailDesigns('goldstil.jpg', 'nails.jpg/goldstil.jpg');
new NailDesigns(' flowerprint', 'nails.jpg/flowerprint.jpg');
new NailDesigns('lines ', 'nails.jpg/lines.jpg');
new NailDesigns('navy', 'nails.jpg/navy.jpg');
new NailDesigns('neongreen', 'nails.jpg/neongreen.jpg');
new NailDesigns('Orange-Metallic-', 'nails.jpg/Orange-Metallic-.jpg');
new NailDesigns('redspark.jpg', 'nails.jpg/redspark.jpg ');
new NailDesigns(' redflow', 'nails.jpg/redflow.jpg');
new NailDesigns(' rednblack', 'nails.jpg/rednblack.jpg');
new NailDesigns(' royal', 'nails.jpg/royal.jpg');
new NailDesigns('simple ', ' nails.jpg/simple.jpg');
new NailDesigns('sparkle', ' nails.jpg/sparkle.jpg');
new NailDesigns('tiffanyblue', ' nails.jpg/tiffanyblue.jpg');
new NailDesigns(' whiteandblack', ' nails.jpg/whiteandblack.jpg');
new NailDesigns(' whitetri', ' nails.jpg/whitetri.jpg');

function NailDesigns(imgName, path) {
  this.imgName = ImgName;
  this.path = path;
  nailDesignsImg.push(this);
};

function render() {
  var imgRandom = function() {
    picture = Math.floor(Math.random() * nailDesignsImg.length);
    newImg = [];
  newImg.push(picture);
  };
  imgRandom();
