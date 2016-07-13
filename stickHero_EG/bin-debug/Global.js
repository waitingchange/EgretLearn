/**
 * GlobalFunc
 */
var GlobalFunc = (function () {
    function GlobalFunc() {
    }
    var d = __define,c=GlobalFunc,p=c.prototype;
    GlobalFunc.createNornmalSprite = function (sprName, anchorPoint) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(sprName);
        result.texture = texture;
        if (!anchorPoint) {
            return result;
        }
        var rw = result.width;
        var rh = result.height;
        result.anchorOffsetX = rw * anchorPoint.x;
        result.anchorOffsetY = rh * anchorPoint.x;
        return result;
    };
    GlobalFunc.crateGameBg = function () {
        var result = new egret.Bitmap();
        var num = Math.floor(Math.random() * 3);
        var name = "background" + num + "_png";
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return GlobalFunc;
}());
egret.registerClass(GlobalFunc,'GlobalFunc');
//# sourceMappingURL=Global.js.map