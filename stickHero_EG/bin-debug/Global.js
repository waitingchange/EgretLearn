/**
 * GlobalFunc
 */
var GlobalFunc = (function () {
    function GlobalFunc() {
    }
    var d = __define,c=GlobalFunc,p=c.prototype;
    GlobalFunc.createNornmalSprite = function (sprName) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(sprName);
        result.texture = texture;
        return result;
    };
    GlobalFunc.changeAnchro = function (spr, point) {
        var rw = spr.width;
        var rh = spr.height;
        spr.anchorOffsetX = rw * point.x;
        spr.anchorOffsetY = rh * point.x;
    };
    return GlobalFunc;
}());
egret.registerClass(GlobalFunc,'GlobalFunc');
//# sourceMappingURL=Global.js.map