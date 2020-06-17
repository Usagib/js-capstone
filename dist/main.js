!function(e){var t={};function r(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r,a,s,n={type:Phaser.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:function(){this.load.image("city","../src/assets/city.png"),this.load.image("ground","../src/assets/platform.png"),this.load.spritesheet("robot","../src/assets/bot.png",{frameWidth:52,frameHeight:52})},create:function(){this.add.image(400,300,"city"),(r=this.physics.add.staticGroup()).create(400,568,"ground").setScale(2).refreshBody(),(a=this.physics.add.sprite(100,450,"robot")).setBounce(.2),a.setCollideWorldBounds(!0),a.body.setGravityY(300),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("robot",{start:8,end:14}),frameRate:5,repeat:-1}),this.anims.create({key:"turn",frames:this.anims.generateFrameNumbers("robot",{start:0,end:6}),frameRate:3,repeat:-1}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("robot",{start:8,end:14}),frameRate:5,repeat:-1}),this.anims.create({key:"shoot",frames:this.anims.generateFrameNumbers("robot",{start:16,end:20}),frameRate:10,repeat:-1}),this.anims.create({key:"jump",frames:this.anims.generateFrameNumbers("robot",{start:32,end:36}),frameRate:10,repeat:-1}),this.anims.create({key:"death",frames:this.anims.generateFrameNumbers("robot",{start:35,end:44}),frameRate:5}),s=this.input.keyboard.createCursorKeys(),this.physics.add.collider(a,r)},update:function(){0;s.left.isDown?(a.setVelocityX(-160),a.anims.play("left",!0)):s.right.isDown?(a.setVelocityX(160),a.anims.play("right",!0)):(a.setVelocityX(0),a.anims.play("turn",!0));s.up.isDown&&(a.setVelocityY(-330),a.anims.play("jump",!0));s.down.isDown&&(a.setVelocityX(0),a.anims.play("shoot",!0))}}};new Phaser.Game(n)}]);