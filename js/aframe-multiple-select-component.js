AFRAME.registerComponent('multiple-select', {
    schema: {
      target: { type: 'string' }
    },
    init: function () {
      var proxy = document.querySelector('a-scene').querySelector(this.data.target)
      proxy.setAttribute('animation__fadeup', 'property: components.material.material.opacity; type: opacity; to: 1; dur: 200; startEvents: fade-up');
      proxy.setAttribute('animation__fadedown', 'property: components.material.material.opacity; type: opacity; to: 0; dur: 200; startEvents: fade-down');
      var el = this.el;
      var material = el.getAttribute('material');
      var initialColor = material.color;
      var self = this;

      el.addEventListener('mousedown', function (evt) {
        el.setAttribute('material', 'color', '#EF2D5E');
        proxy.emit('fade-up')
      });

      el.addEventListener('mouseup', function (evt) {
        el.setAttribute('material', 'color', self.isMouseEnter ? '#24CAFF' : initialColor);
        proxy.emit('fade-down')
      });

      el.addEventListener('mouseenter', function () {
        el.setAttribute('material', 'color', '#24CAFF');
        self.isMouseEnter = true;

      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('material', 'color', initialColor);
        self.isMouseEnter = false;
        proxy.emit('fade-down')
      });
    }
  });