L.ImageElementOverlay = L.ImageOverlay.extend({

    options: {
    },

    _initImage: function () {

        if (typeof (this._url) === 'string') {
            //convert to svg object
            var obj = document.createElement('object');
            obj.innerHTML = this._url;
            this._image = obj.firstChild();
        } else {
            this._image = this._url;
        }
        L.DomUtil.addClass(this._image, 'leaflet-image-layer');
        L.DomUtil.addClass(this._image, 'leaflet-image-layer');

        this._image.style.cssText = this._image.style.cssText + `-webkit-user-select: none; 
                    -moz-user-select: none; 
                    -ms-user-select: none;
                    -o-user-select: none;
                    user-select: none;`
        if (this._zoomAnimated) { L.DomUtil.addClass(this._image, 'leaflet-zoom-animated'); }
        if (this.options.className) { L.DomUtil.addClass(this._image, this.options.className); }
    }
});

L.imageElementOverlay = function (image, bounds, options) {
    return new L.ImageElementOverlay(image, bounds, options);
};
