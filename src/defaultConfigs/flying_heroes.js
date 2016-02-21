var communityart = GC.communityart,
    PREFIX = communityart.IMAGE_PREFIX + 'flying_heroes/',

    FLYING_MAN_SIZE = { w: 64, h: 92 },
    TWO_FIREMEN_SIZE = { w: 64, h: 92 },
    BIRD_SIZE = { w: 64, h: 92 },
    HELICOPTER_SIZE = { w: 64, h: 92 },
    BUILDING_SIZE = { w: 64, h: 92 },
    WINDOW_SIZE = { w: 64, h: 92 },
    VICTIM_SIZE = { w: 64, h: 92 },
    FLAME_SIZE = { w: 64, h: 92 };

scene.registerConfig('flying_heroes/background', {
  type: 'ImageView',
  opts: {
    url: PREFIX + 'background/bg.png'
  }
});

scene.registerConfig('flying_heroes/flying_man', {
  type: 'Entity',
  config: {
    width: PLAYER_SIZE.w,
    height: PLAYER_SIZE.h,
    hitOpts: {
    },
    viewOpts: {
      url: PREFIX + 'player/flying_man.png',
      defaultAnimation: 'stand',
      autoStart: true,
      loop: true,
      offsetX: PLAYER_SIZE.w / -2,
      offsetY: PLAYER_SIZE.h / -2
    }
  }
});

scene.registerConfig('flying_heroes/two_firemen', {
  type: 'Entity',
  config: {
    width: TWO_FIREMEN_SIZE.w,
    height: TWO_FIREMEN_SIZE.h,
    hitOpts: {
    },
    viewOpts: {
      url: PREFIX + 'player/two_firemen.png',
      defaultAnimation: 'stand',
      autoStart: true,
      loop: true,
      offsetX: TWO_FIREMEN_SIZE.w / -2,
      offsetY: TWO_FIREMEN_SIZE.h / -2
    }
  }
});

scene.registerConfig('flying_heroes/bird', {
  type: 'Entity',
  config: {
    width: BIRD_SIZE.w,
    height: BIRD_SIZE.h,
    hitOpts: {
    },
    viewOpts: {
      url: PREFIX + 'bird/b1.png',
      defaultAnimation: 'flying',
      autoStart: true,
      loop: true,
      offsetX: BIRD_SIZE.w / -2,
      offsetY: BIRD_SIZE.h / -2
    }
  }
});

scene.registerConfig('flying_heroes/helicopter', {
  type: 'Entity',
  config: {
    width: HELICOPTER_SIZE.w,
    height: HELICOPTER_SIZE.h,
    hitOpts: {
    },
    viewOpts: {
      url: PREFIX + 'helicopter/h1.png',
      defaultAnimation: 'flying',
      autoStart: true,
      loop: true,
      offsetX: HELICOPTER_SIZE.w / -2,
      offsetY: BIRD_SIZE.h / -2
    }
  }
});

scene.registerConfig('flying_heroes/building', {
});

scene.registerConfig('flying_heroes/window', {
});

scene.registerConfig('flying_heroes/victim', {
});

scene.registerConfig('flying_heroes/flame', {
});

