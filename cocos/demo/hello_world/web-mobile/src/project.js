require=function t(e,o,i){function c(r,a){if(!o[r]){if(!e[r]){var s="function"==typeof require&&require;if(!a&&s)return s(r,!0);if(n)return n(r,!0);var p=new Error("Cannot find module '"+r+"'");throw p.code="MODULE_NOT_FOUND",p}var u=o[r]={exports:{}};e[r][0].call(u.exports,function(t){var o=e[r][1][t];return c(o||t)},u,u.exports,t,e,o,i)}return o[r].exports}for(var n="function"==typeof require&&require,r=0;r<i.length;r++)c(i[r]);return c}({Game:[function(t,e,o){"use strict";cc._RF.push(e,"5a22cJJ8H1GvY+hvrcs42jr","Game"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=i.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.starPrefab=null,e.maxStarDuration=0,e.minStarDuration=0,e.playerNode=null,e.groundNode=null,e.scoreLabel=null,e.scoreAudio=null,e}return __extends(e,t),e.prototype.onLoad=function(){this.groundY=this.groundNode.y+this.groundNode.height/2,this.timer=0,this.starDuration=0,this.spawnNewStar(),this.score=0},e.prototype.spawnNewStar=function(){var t=cc.instantiate(this.starPrefab);this.node.addChild(t),t.setPosition(this.getNewStarPosition()),t.getComponent("Star").init(this),this.starDuration=this.minStarDuration+cc.random0To1()*(this.maxStarDuration-this.minStarDuration),this.timer=0},e.prototype.getNewStarPosition=function(){var t=0,e=this.groundY+cc.random0To1()*this.playerNode.getComponent("Player").jumpHeight+50,o=this.node.width/2;return t=cc.randomMinus1To1()*o,cc.p(t,e)},e.prototype.update=function(t){this.timer>this.starDuration?this.gameOver():this.timer+=t},e.prototype.gainScore=function(){this.score+=1,this.scoreLabel.string="Score: "+this.score.toString(),cc.audioEngine.play(this.scoreAudio,!1,1)},e.prototype.gameOver=function(){this.playerNode.stopAllActions(),cc.director.loadScene("game")},__decorate([n(cc.Label)],e.prototype,"label",void 0),__decorate([n],e.prototype,"text",void 0),__decorate([n(cc.Prefab)],e.prototype,"starPrefab",void 0),__decorate([n],e.prototype,"maxStarDuration",void 0),__decorate([n],e.prototype,"minStarDuration",void 0),__decorate([n(cc.Node)],e.prototype,"playerNode",void 0),__decorate([n(cc.Node)],e.prototype,"groundNode",void 0),__decorate([n(cc.Label)],e.prototype,"scoreLabel",void 0),__decorate([n(cc.AudioClip)],e.prototype,"scoreAudio",void 0),e=__decorate([c],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],Player:[function(t,e,o){"use strict";cc._RF.push(e,"67c8eg1oIRF5ZzHbX5N6xTR","Player"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=i.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.jumpHeight=0,e.jumpDuration=0,e.maxMoveSpeed=0,e.accel=0,e.jumpAudio=null,e.xSpeed=0,e.accLeft=!1,e.accRight=!1,e.jumpAction=null,e}return __extends(e,t),e.prototype.setJumpAction=function(){var t=cc.moveBy(this.jumpDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCubicActionOut()),e=cc.moveBy(this.jumpDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCubicActionIn()),o=cc.callFunc(this.playJumpSound,this);return cc.repeatForever(cc.sequence(t,e,o))},e.prototype.playJumpSound=function(){cc.audioEngine.play(this.jumpAudio,!1,1)},e.prototype.addEventListeners=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this),cc.find("Canvas").on(cc.Node.EventType.TOUCH_START,this.onScreenTouchStart,this),cc.find("Canvas").on(cc.Node.EventType.TOUCH_CANCEL,this.onScreenTouchEnd,this),cc.find("Canvas").on(cc.Node.EventType.TOUCH_END,this.onScreenTouchEnd,this)},e.prototype.moveLeft=function(){this.accLeft=!0,this.accRight=!1},e.prototype.moveRight=function(){this.accLeft=!1,this.accRight=!0},e.prototype.stopMove=function(){this.accLeft=!1,this.accRight=!1},e.prototype.onScreenTouchStart=function(t){t.getLocationX()>cc.winSize.width/2?this.moveRight():this.moveLeft()},e.prototype.onScreenTouchEnd=function(){this.stopMove()},e.prototype.onKeyDown=function(t){switch(t.keyCode){case cc.KEY.a:case cc.KEY.left:this.moveLeft();break;case cc.KEY.d:case cc.KEY.right:this.moveRight()}},e.prototype.onKeyUp=function(t){switch(t.keyCode){case cc.KEY.a:case cc.KEY.left:this.stopMove();break;case cc.KEY.d:case cc.KEY.right:this.stopMove()}},e.prototype.onLoad=function(){this.jumpAction=this.setJumpAction(),this.node.runAction(this.jumpAction),this.accLeft=!1,this.accRight=!1,this.xSpeed=0,this.addEventListeners()},e.prototype.update=function(t){this.accLeft?this.xSpeed-=this.accel*t:this.accRight&&(this.xSpeed+=this.accel*t),Math.abs(this.xSpeed)>this.maxMoveSpeed&&(this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed)),this.node.x+=this.xSpeed*t,this.node.x<=-this.node.parent.width/2&&(this.node.x=this.node.parent.width/2),this.node.x>this.node.parent.width/2&&(this.node.x=-this.node.parent.width/2)},__decorate([n],e.prototype,"jumpHeight",void 0),__decorate([n(cc.Integer)],e.prototype,"jumpDuration",void 0),__decorate([n(cc.Integer)],e.prototype,"maxMoveSpeed",void 0),__decorate([n(cc.Integer)],e.prototype,"accel",void 0),__decorate([n(cc.AudioClip)],e.prototype,"jumpAudio",void 0),e=__decorate([c],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],Star:[function(t,e,o){"use strict";cc._RF.push(e,"a6829kZZPtPb7jfxEaBQ4fk","Star"),Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,n=i.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pickRadius=0,e.game=null,e}return __extends(e,t),e.prototype.init=function(t){this.game=t},e.prototype.getPlayerDistance=function(){var t=this.game.playerNode.getPosition();return cc.pDistance(this.node.position,t)},e.prototype.onPicked=function(){this.game.spawnNewStar(),this.game.gainScore(),this.node.destroy()},e.prototype.update=function(t){if(this.getPlayerDistance()<this.pickRadius)this.onPicked();else{var e=1-this.game.timer/this.game.starDuration;this.node.opacity=50+Math.floor(205*e)}},__decorate([n(cc.Integer)],e.prototype,"pickRadius",void 0),e=__decorate([c],e)}(cc.Component);o.Star=r,cc._RF.pop()},{}]},{},["Game","Player","Star"]);