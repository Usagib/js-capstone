!function(e){var t={};function s(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t){var s,a,i,r,n,o,l,d,c,h,m,u,p={type:Phaser.AUTO,width:1024,height:600,physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:function(){this.load.image("piso","../src/assets/platform.png"),this.load.spritesheet("robot","../src/assets/bot.png",{frameWidth:52,frameHeight:52}),this.load.spritesheet("firebullet","../src/assets/firebullet.png",{frameWidth:40,frameHeight:40}),this.load.spritesheet("coin","../src/assets/coin.png",{frameWidth:120,frameHeight:120}),this.load.spritesheet("whiteslime","../src/assets/slimewhite.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("skull","../src/assets/fire-skull.png",{frameWidth:96,frameHeight:112}),this.load.image("tiles","../src/assets/tilemap/tileset1.png"),this.load.tilemapTiledJSON("map","../src/assets/tilemap/map1.json"),this.load.image("background4","../src/assets/background/back1.png"),this.load.image("background3","../src/assets/background/farback.png"),this.load.image("background2","../src/assets/background/far.png"),this.load.image("background1","../src/assets/background/farfront.png")},create:function(){let e=window.innerWidth,t=window.innerHeight,p=e/2,y=t/5*1.5,f=t/5*3,g=f/150;this.add.image(p,y,"background4").setDisplaySize(e,f),(h=this.add.tileSprite(p,y,272,150,"background3")).setScale(g),(m=this.add.tileSprite(p,y,272,150,"background2")).setScale(g),(u=this.add.tileSprite(p,y,272,150,"background1")).setScale(g),this.cameras.main.setBounds(0,0,7700,950),i=this.make.tilemap({key:"map"}),r=i.addTilesetImage("tileset1","tiles"),(n=i.createStaticLayer("GroundLayer",r,0,200)).setScale(.3),n.setCollisionByExclusion(-1,!0),s=this.physics.add.sprite(100,450,"robot"),(o=this.physics.add.group({key:"coin",repeat:50,setXY:{x:100,y:0,stepX:100}})).children.iterate((function(e){e.setScale(.2),e.setBounce(.5)})),l=this.physics.add.group(),(d=this.physics.add.group({key:"whiteslime",repeat:10,setXY:{x:225,y:0,stepX:555}})).children.iterate((function(e){e.setScale(1.5)})),c=this.physics.add.group(),this.time.addEvent({delay:2500,callback:()=>{c.create(Phaser.Math.Between(s.x+500,6300),Phaser.Math.Between(0,900),"skull"),c.children.iterate((function(e){e.setGravityY(-300),e.setScale(.7),e.setVelocityX(-160),e.anims.play("skullfly",!0)}))},loop:!0}),s.setBounce(.2),s.body.setGravityY(300),this.cameras.main.startFollow(s,!0),this.anims.create({key:"skullfly",frames:this.anims.generateFrameNumbers("skull",{start:0,end:7}),frameRate:10,repeat:-1}),this.anims.create({key:"walkslime",frames:this.anims.generateFrameNumbers("whiteslime",{start:0,end:15}),frameRate:6,repeat:-1}),this.anims.create({key:"fireshoot",frames:this.anims.generateFrameNumbers("firebullet",{start:0,end:8}),frameRate:5}),this.anims.create({key:"coinidle",frames:this.anims.generateFrameNumbers("coin",{start:0,end:7}),frameRate:5,repeat:-1}),this.anims.create({key:"idle",frames:this.anims.generateFrameNumbers("robot",{start:0,end:6}),frameRate:3,repeat:-1}),this.anims.create({key:"walk",frames:this.anims.generateFrameNumbers("robot",{start:8,end:14}),frameRate:5,repeat:-1}),this.anims.create({key:"shoot",frames:this.anims.generateFrameNumbers("robot",{start:16,end:20}),frameRate:30}),this.anims.create({key:"jump",frames:this.anims.generateFrameNumbers("robot",{start:32,end:36}),frameRate:10,repeat:-1}),this.anims.create({key:"death",frames:this.anims.generateFrameNumbers("robot",{start:35,end:44}),frameRate:5}),a=this.input.keyboard.createCursorKeys(),this.physics.add.collider(s,n),this.physics.add.collider(o,n),this.physics.add.collider(d,n),this.physics.add.collider(l,n,(function(e,t){e.disableBody(!0,!0)}),null,this),this.physics.add.overlap(s,o,(function(e,t){t.disableBody(!0,!0)}),null,this),this.anims.staggerPlay("coinidle",o.getChildren(),.03),this.anims.staggerPlay("walkslime",d.getChildren(),.03),this.anims.staggerPlay("skullfly",c.getChildren(),.03),this.tweens.add({targets:d.getChildren(),props:{x:{value:"+=100",duration:1500}},ease:"Sine.easeInOut",yoyo:!0,repeat:-1})},update:function(){var e=this.cameras.main;this.anims.staggerPlay("fireshoot",l.getChildren(),.03),!1;a.left.isDown?(s.setVelocityX(-160),s.anims.play("walk",!0),e.scrollX-=4,h.tilePositionX-=.1,m.tilePositionX-=.2,u.tilePositionX-=.3):a.right.isDown?(s.setVelocityX(160),s.anims.play("walk",!0),e.scrollX+=4,h.tilePositionX+=.1,m.tilePositionX+=.2,u.tilePositionX+=.3):(s.setVelocityX(0),s.anims.play("idle",!0));a.up.isDown&&s.body.onFloor()&&(s.setVelocityY(-550),s.anims.play("jump",!0));if(this.input.keyboard.checkDown(a.space,300)){var t=l.create(s.x+40,s.y+15,"firebullet");a.left.isDown?t.setVelocityX(-500):t.setVelocityX(500),t.body.setGravityY(-300)}s.body.velocity.x>0?s.setFlipX(!1):s.body.velocity.x<0&&s.setFlipX(!0)}}};new Phaser.Game(p)}]);