
/**
 * GlobalFunc
 */
class GlobalFunc {

    public static createNornmalSprite(sprName: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(sprName);
        result.texture = texture;
        return result;
    }

    public static changeAnchro(spr: egret.Bitmap, point: egret.Point) {
        var rw: number = spr.width;
        var rh: number = spr.height;
        spr.anchorOffsetX = rw * point.x;
        spr.anchorOffsetY = rh * point.x;
    }
}