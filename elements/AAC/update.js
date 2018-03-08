function(instance, properties, context) {

    var preload = properties.preload.toLowerCase();
    var options = {
        controls: properties.controls,
        autoplay: properties.autoplay,
        loop: properties.loop,
        preload: preload,
        muted: properties.muted,
        fluid: properties.fluid,
        plugins: {
        pannellum: {}
        }
    }

    instance.data.options = options;
    instance.data.skin = properties.skin_file;

    $(document).ready(function() {

        var vjsPlayer = instance.data.vjsPlayer;
        // Load the source video or Youtube URL
        if (!properties.youtube_url && properties.video) { 
          vjsPlayer.src(properties.video);
        } else if (properties.youtube_url) {
          var SourceObject = {src: properties.youtube_url, type: 'video/youtube'};
          vjsPlayer.src(SourceObject);
        }
        
      if (properties.poster) {
      vjsPlayer.poster(properties.poster);
      }



    });

}