
      let img = document.createElement("img");
      img.src = './Assets/material4.png';

      var canvasEdited =  document.getElementById('canvasEdited');
            canvasEdited.width = "30"
            canvasEdited.height = "30"
      var ctx = canvasEdited.getContext('2d');
      var arr = [];
    
     function editPixels(imgData,R,G,B,alpha) {
         R = R*0.8+25
         G = G*0.8+25
         B = B*0.8+25
            for (var i=0; i < imgData.length; i += 4) {
                imgData[i] = imgData[i]*0.7 +100;//R
                imgData[i+1] = imgData[i+1]*0.7 +100;//G
                imgData[i+2] = imgData[i+2]*0.7 +100;//B
             }
              for (var i=0; i < imgData.length; i += 4) {
                imgData[i] = imgData[i] *R/255;//R
                imgData[i+1] = imgData[i+1] *G/255;//G
                imgData[i+2] = imgData[i+2] *B/255;//B
                imgData[i+3] = imgData[i+3] *alpha/255;//Alpha
             }
         //console.log(imgData)
     }
       
     function drawEditedImage(newData) {
         var ctxEdited = canvasEdited.getContext('2d');
         ctxEdited.putImageData(newData, 0, 0);
     }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
        } : null;
    }
    
    img.onload = function() {
          var scale = 1
          ctx.drawImage(img, 0, 0, 30, 30);
          var w = Math.floor(img.width * scale)
          var h = Math.floor(img.height * scale)
          var imageData = ctx.getImageData(0,0, w, h)

          editPixels(imageData.data,210,169,255,255);

          drawEditedImage( imageData)

     };

    
