var Bubble = function(scope) {
  var self = this;
  Loader.whenAvailable('jQuery', function() {
    self.initialize(scope);
  });
}

var BubbleIDs = {
  duplicates: {},
  list: []
}

Bubble.generateID = function(jsonID) {
  if (BubbleIDs.list.indexOf(jsonID) >= 0) { // duplicate ID
    if (!BubbleIDs.duplicates.hasOwnProperty(jsonID)) {
      BubbleIDs.duplicates[jsonID] = {count: 1};
    }
    BubbleIDs.duplicates[jsonID].count += 1;
    return jsonID + BubbleIDs.duplicates[jsonID].count;
  } else {
    BubbleIDs.list.push(jsonID);
    return jsonID;
  }
}

Bubble.prototype = {
  
  initialize: function(scope) {
    var self = this;
    
    self.containerClass = '.bubble';
    self.bubbleClass = self.containerClass+'--photo';
    self.labelClass = self.containerClass+'--label';
    self.iconClass = self.containerClass+'--icon';
    
    self.scope = scope;
    self.size = parseInt(scope.size);
    self.borderSize = self.size / 10;
    self.labelTop = self.size * 0.9;
    self.container = $('#'+scope.itemID);
    self.bubble = $(self.bubbleClass, self.container);
    self.label = $(self.labelClass, self.container);
    self.sameAs = self.scope.json['@graph'][0]['schema:sameAs']; // must fix this!
    
    self.setCSS();
    self.addIcons();
    self.setHoverAnimation();
    self.setHoverEvent();
  },
  
  setCSS: function() {
    var self = this;
    
    self.bubble.css({
      width: self.size,
      height: self.size,
      borderRadius: self.size,
      borderWidth: self.borderSize
    });
    
    self.label.css({
      fontSize: self.borderSize,
      top: self.labelTop,
      borderRadius: self.borderSize/2
    });
  },
  
  addIcons: function() {
    var self = this;
    
    $(self.iconClass, self.bubble).remove();
    
    $.each(BubbleServices, function(serviceName, service) {
      $.each(self.sameAs, function(index, url) {
        if (url.indexOf(service.keyString) > -1) { // has service
          var icon = $('<a class="'+self.iconClass.substring(1)+'" />');
          icon.data('service', serviceName);
          icon.data('url', url);
          icon.attr('href', url);
          icon.attr('target', '_blank');
          if (service.hasOwnProperty('image')) {
            icon.css('background-image', 'url('+service.image+')');
            Loader.preloadImages(service.image);
            if (service.hasOwnProperty('hoverImage')) {
              icon.hover(function() {
                icon.css('background-image', 'url('+service.hoverImage+')');
              }, function() {
                icon.css('background-image', 'url('+service.image+')');
              }); 
              Loader.preloadImages(service.hoverImage);
            }
          } else {
            icon.addClass(self.iconClass+'-naked');
            icon.html(serviceName.substr(0,2));
          }
          icon.appendTo(self.bubble);
        }
      });
    });
  },
  
  setHoverAnimation: function() {
    var self = this;
    
    self.borderIncrease = self.borderSize * 2;
    self.newBorder = self.borderSize + self.borderIncrease;
    self.newSize = self.size + self.borderIncrease*2;
    self.iconSize = self.newBorder * 0.8;

    self.hoverAnimation = {
      borderWidth: self.newBorder+'px',
      top: '-='+self.borderIncrease+'px',
      left: '-='+self.borderIncrease+'px'
    };
    
    self.cssReset = {
      borderWidth: self.borderSize+'px',
      top: 0,
      left: 0
    }
  },
  
  getIconPosition: function (angle) {
    var self = this;
    
    function toRad(angle) {
      return angle * (Math.PI / 180);
    }

    var d = self.size;
    var r = d/2;
    var rPad = self.newBorder/2;
    var x = r * Math.sin(toRad(angle));
    var y = r * Math.cos(toRad(angle));
    var xPad = rPad * Math.sin(toRad(angle));
    var yPad = rPad * Math.cos(toRad(angle));
    var left = r + x + xPad - self.iconSize/2;
    var top = r - y - yPad - self.iconSize/2;
    return {'left':left, 'top':top};
  },
  
  placeIcon: function(icon, angle) {
    var self = this;
    var pos = self.getIconPosition(angle);
    icon.css({
      width: self.iconSize+'px',
      height: self.iconSize+'px',
      lineHeight: self.iconSize+'px',
      left: pos.left+'px', top: pos.top+'px',
      borderRadius: self.iconSize+'px'
    });
    icon.fadeIn(300);
  },
  
  setHoverEvent: function() {
    var self = this;
    
    self.bubble.unbind('mouseenter mouseleave');
    
    self.bubble.hover(function() {
      
      self.bubble.addClass('hover');
      
      self.label.css({backgroundColor: 'transparent'});
      self.label.animate({
        top: self.size + (self.borderSize/3) + 'px'
      }, 300);
      
      self.bubble.animate(self.hoverAnimation, 300, function() {
        if (self.bubble.hasClass('hover')) { // place icons
          var angle = 0;
          var delta = 30;
          $(self.iconClass, self.bubble).each(function() {
            angle += delta;
            self.placeIcon($(this), angle);
          });
        }
      });
    }, function() { // unhover
      
        self.bubble.finish();
        self.label.finish();
        self.bubble.removeClass('hover');
        
        $(self.iconClass, self.bubble).finish();
        $(self.iconClass, self.bubble).hide();

        self.bubble.css(self.cssReset);
        self.label.css({
          backgroundColor: 'black',
          top: self.labelTop
        });
        
        //Connections.redraw();
        
    });
  }
  
}

var BubbleServices = {
  
  Twitter: {
    keyString: 'twitter.com',
    image: 'http://smartspac.es/style/twitter.png',
    hoverImage: 'http://smartspac.es/style/twitter-hover.png'
  },
  
  LinkedIn: {
    keyString: 'linkedin.com',
    image: 'http://smartspac.es/style/linkedin.png',
    hoverImage: 'http://smartspac.es/style/linkedin-hover.png'
  }
  
}

var Loader = {
  
  getJQuery: function() {
    var script = document.createElement('script');
    script.src = '//code.jquery.com/jquery-3.1.0.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
  },
  
  getFonts: function() {
    var font = document.createElement('link');
    font.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300';
    font.rel = 'stylesheet';
    font.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(font);
  },
  
  whenAvailable: function(name, callback) {
    var interval = 10; // ms
    window.setTimeout(function() {
      if (window[name]) {
        callback(window[name]);
      } else {
        window.setTimeout(arguments.callee, interval);
      }
    }, interval);
  },
  
  preloadImages: function() {
    for (var i = 0; i < arguments.length; i++) {
      $("<img />").attr("src", arguments[i]);
    }
  }
  
}

Loader.getJQuery();
Loader.getFonts();