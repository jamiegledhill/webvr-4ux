AFRAME.registerComponent('environment-select', {
    schema: {
      preset: { type: 'string' }
    },
    init: function () {
    var data = this.data;
      var el = this.el;
      var material = el.getAttribute('material');
      var initialColor = material.color;
      var self = this;

      el.addEventListener('mousedown', function (evt) {
        el.setAttribute('material', 'color', '#EF2D5E');
     //   proxy.emit('fade-up')
         document.querySelector('a-scene').setAttribute('environment', 'preset:'+data.preset)
      });

      el.addEventListener('mouseup', function (evt) {
        el.setAttribute('material', 'color', self.isMouseEnter ? '#24CAFF' : initialColor);
      //  proxy.emit('fade-down')
      });

      el.addEventListener('mouseenter', function () {
        el.setAttribute('material', 'color', '#24CAFF');
        self.isMouseEnter = true;

      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('material', 'color', initialColor);
        self.isMouseEnter = false;
        // proxy.emit('fade-down')
      });
    }
  });