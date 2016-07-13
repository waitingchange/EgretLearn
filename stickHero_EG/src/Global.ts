
/**
 * GlobalFunc
 */
class GlobalFunc {

    public static createNornmalSprite(sprName: string, anchorPoint: any): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(sprName);
        result.texture = texture;
        if (!anchorPoint) {
            return result;
        }
        var rw: number = result.width;
        var rh: number = result.height;
        result.anchorOffsetX = rw * anchorPoint.x;
        result.anchorOffsetY = rh * anchorPoint.x;
        return result;
    }

    public static crateGameBg():egret.Bitmap{
        var result = new egret.Bitmap();
        var num = Math.floor(Math.random() * 3);
        var name = "background" + num + "_png";
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}