//TitleScene.js
var TitleLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();

var sprite = cc.Sprite.create(res2.Title_png);
sprite.setPosition(size.width / 2, size.height / 2);
sprite.setScale(0.8);
this.addChild(sprite, 0);

var sprite = cc.Sprite.create(res2.start_png);
sprite.setPosition(size.width / 2, size.height / 6);
sprite.setScale(0.4);
this.addChild(sprite, 0);
return true;
}
});

var TitleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new TitleLayer();
        this.addChild(layer);
    }
});
