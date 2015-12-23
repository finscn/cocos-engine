largeModule('Sprite');

test('basic test', function () {
    var url = assetDir + '/button.png';

    var node = new cc.Node();
    cc.director.getScene().addChild(node);

    node.color = Color.RED;
    var render = node.addComponent(cc.Sprite);

    deepEqual(render._sgNode.color, Color.RED, 'color set success');

    var newSprite = new cc.SpriteFrame();
    var texture = cc.textureCache.addImage(url);
    newSprite.setTexture(texture);
    render.spriteFrame = newSprite;

    ok(true);
});
