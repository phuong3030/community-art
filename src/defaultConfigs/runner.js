var communityart = GC.communityart;

var PREFIX = communityart.IMAGE_PREFIX + 'runner/';

var PLAYER_SIZE = 100;
var PLATFORM_SIZE = { w: 768, h: 228 };

communityart.registerConfig('runner/bg', {
  type: 'ImageView',
  opts: {
    width: 768,
    height: 1024,
    url: PREFIX + 'backgroundSky.png'
  }
});

communityart.registerConfig('runner/player', {
  type: 'default',
  opts: {
    url: PREFIX + 'kiwiTeal',
    defaultAnimation: 'run',
    autoStart: true,
    loop: true,
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    anchorX: PLAYER_SIZE / 2,
    anchorY: PLAYER_SIZE / 2,
    offsetX: PLAYER_SIZE / -2,
    offsetY: PLAYER_SIZE / -2,
    hitBounds: { radius: PLAYER_SIZE / 2 }
  }
});

communityart.registerConfig('runner/platform', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'platform768.png',
    width: PLATFORM_SIZE.w,
    height: PLATFORM_SIZE.h,
    hitBounds: { width: PLATFORM_SIZE.w, height: PLATFORM_SIZE.h }
  }
});
