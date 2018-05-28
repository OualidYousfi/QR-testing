var QRCode = require('qrcode')

var Encoder = require('qr').Encoder;
var encoder = new Encoder;

var qrEncoder = require("qr-encoder");

var mkdirp = require('mkdirp');
mkdirp('/qrcode');
mkdirp('/qrnode');

function QRCodeToFile() {
  QRCode.toFile('qrcode/new_qrcode_library' + i + '.png', 'HTTPS://QR1.CH/Q/8452D30565044CMP9OI4CC7D47938DF', {
    errorCorrectionLevel: 'Q',
    maskPattern: 6,
    margin: 0,
    scale: 35,
    version: 4,
  }, function (err) {
    if (err) throw err
  })
}

function QRCodeToDataURL() {
  QRCode.toDataURL('HTTPS://QR1.CH/Q/8452D30565044CMP9OI4CC7D47938DF', {
    errorCorrectionLevel: 'Q',
    maskPattern: 6,
    margin: 0,
    scale: 35,
    version: 4,
  }, function (err, url) {
    if (err) throw err
  })
}

function QRNode() {
  encoder.encode('HTTPS://QR1.CH/Q/8452D30565044CMP9OI4CC7D47938DF', 'qrnode/new_qrcode_library' + i + '.png', {
    dot_size: 35,
    margin: 0,
    level: "Q",
    version: 4,
    type: "PNG"
  });
}

//can't pass along qr version or cell size. only ECC level. PREVIOUS PROJECT
function QREncoder() {
  var bitMatrix = qrEncoder.encode("HTTPS://QR1.CH/Q/8452D30565044CMP9OI4CC7D47938DF", 3);
}

var d = new Date();
var x = d.getTime();
for (i = 0; i < 150; i++) {
  //QRCodeToFile();
  //QRCodeToDataURL();
  //QRNode();
  //QREncoder();
}
var d = new Date();
var y = d.getTime();
var z = ((y - x) / 1000).toFixed(10);
console.log("seconds: " + z);