//TitleScene.js
var TitleLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();

var sprite = cc.Sprite.create(res.Title_png);
sprite.setPosition(size.width / 2, size.height / 2);
sprite.setScale(0.8);
this.addChild(sprite, 0);

var sprite = cc.Sprite.create(res.start_png);
sprite.setPosition(size.width / 2, size.height / 6);
sprite.setScale(0.4);
this.addChild(sprite, 0);

cc.eventManager.addListener({
          event: cc.EventListener.TOUCH_ONE_BY_ONE,
          swallowTouches: true,
          onTouchBegan: this.onTouchBegan,
          onTouchMoved: this.onTouchMoved,
          onTouchEnded: this.onTouchEnded
      }, this);

return true;
},

onTouchBegan: function(touch, event) {
      return true;
  },
  onTouchMoved: function(touch, event) {},
  onTouchEnded: function(touch, event) {
      // 次のシーンに切り替える
      cc.director.runScene(new gameScene());
  },
});

var TitleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new TitleLayer();
        this.addChild(layer);
    }
});
