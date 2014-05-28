define(['jquery'], function($) {
    var ImagePreLoader = {
        //目前加载的数量
        current: 0,
        //总共需要加载的数量
        total: 0,

        init: function(imgs) {
            var self = this;
            self.current = 0;
            self.total = 0;
            for (var key in imgs) {
                self.total++;
            }
            for (var key in imgs) {
                var url = imgs[key];
                var img = new Image();
                //完成加载的时候
                img.onload = (function(key) {
                    self.current++;
                    var status = {
                        current: self.current,
                        total: self.total
                    }
                    if (self.current == self.total) {
                        $(self).trigger("loadFinish", status);
                    } else {
                        $(self).trigger("loadStatusChange", status);
                    }
                })(key);
                img.src = url;
            }
        }
    };

    return ImagePreLoader;
})