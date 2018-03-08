function(instance, context) {

    // Generate a random ID for the element and add the video.js div
    var randomId = Math.floor((Math.random() * 100000) + 1);
    var elementId = 'vjsElement_' + randomId;
    instance.canvas.append("<div style='width:100%;height:100%'><video id='" + elementId + "' class='video-js' style='width:100%!important;height:100%!important;' crossorigin='anonymous'></video></div>");
    instance.data.elementId = elementId;




    // Include CSS file
    function addCSS(filename) {
        var head = document.getElementsByTagName('head')[0];

        var style = document.createElement('link');
        style.href = filename;
        style.type = 'text/css';
        style.rel = 'stylesheet';
        head.append(style);
    }
  





    $(document).ready(function() {

      // Load skin file
        if (instance.data.skin) {
          addCSS(instance.data.skin);
        }
     
      // Load video.js
        var vjsPlayer;
        vjsPlayer = videojs(elementId, instance.data.options);
 

      // Trigger events
        vjsPlayer.on('ended', function() {
      //      console.log('video ended');
            instance.triggerEvent('video_ended');
        });

        vjsPlayer.on('playing', function() {
      //      console.log('video playing');
            instance.triggerEvent('video_playing')
        });

        vjsPlayer.on('pause', function() {
      //      console.log('video paused');
            instance.triggerEvent('video_paused')
        });

        instance.data.vjsPlayer = vjsPlayer;

    });



}