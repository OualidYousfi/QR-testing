//AECF293534044CMP9OI4C9B94130B3C

/* QRCode.toFile('qrnode/new_qrcode_library' + i + '.png', 'HTTPS://QR1.CH/Q/8452D30565044CMP9OI4CC7D47938DF', {
    errorCorrectionLevel: 'Q',
    maskPattern: 6,
    margin: 0,
    scale: 35,
    version: 4,
  }, function (err) {
  if (err) throw err
})

QRCode.toDataURL('HTTPS://QR1.CH/Q/8452D30565044CMP9OI4CC7D47938DF', {
    errorCorrectionLevel: 'Q',
    maskPattern: 6,
    margin: 0,
    scale: 35,
    version: 4,
  }, function (err, url) {
  if (err) throw err
})

QRCode.toString('http://www.google.com', function (err, string) {
  if (err) throw err
  console.log(string)
}) */

/* encoder.on('end', function (data) {
  // if you specify a file path, nothing will be passed to the end listener
  // do something
  console.log(data);
});
encoder.on('error', function (err) {
  console.log(err);
}); 
encoder.encode('HTTPS://QR1.CH/Q/8452D30565044CMP9OI4CC7D47938DF', 'qrnode/new_qrcode_library' + i + '.png', {
    dot_size: 35,
    margin: 0,
    level: "Q",
    version: 4,
    type: "PNG"
  });*/

/* let overlayImage = sharp("overlay.tiff");

overlayImage.background({ r: 255, g: 255, b: 255 })
  .extend({
    top: 18,
    bottom: 17,
    left: 18,
    right: 17
  }).png().toBuffer().then(overlay => {
    let baseImage = sharp("qrcode.png");
    baseImage.overlayWith(overlay);
    baseImage.toColorspace('b-w');
    baseImage.tiff({ compression: 'deflate', squash: true, xres: (2880 / 2.54), yres: (2880 / 2.54) });
    baseImage.toFile("resultImage.tiff");
  }); */