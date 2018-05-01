//定义单位画布常量
const HEIGHT = 83;
const WIDTH = 103;

// 这是我们的玩家要躲避的敌人 
class Enemy {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 100;
    // 敌人的图片，用一个我们提供的工具函数来轻松的加载文件
        this.sprite = 'images/enemy-bug.png';
    }
    // 此为游戏必须的函数，用来更新敌人的位置
    // 参数: dt ，表示时间间隙
    update(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
        this.x += this.speed * dt;
        console.log(`playerLocation:${player.x},${player.y}`);
    //碰撞检测
        if(player.x < this.x + WIDTH/2 && player.x + WIDTH/2 > this.x && player.y < this.y + HEIGHT/2 && player.y + HEIGHT/2 > this.y ) {
            console.log('撞了');
            player.resetPlayer();
        }
    }
    // 此为游戏必须的函数，用来在屏幕上画出敌人，
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}



// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite ='images/char-boy.png';
    }
    resetPlayer() {
        this.x = 2 * WIDTH;
        this.y = 4 * HEIGHT;
    }
    update() {

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(key) {
        switch(key) {
            case 'left': this.x -= WIDTH; 
            break;
            case 'right': this.x += WIDTH; 
            break; 
            case 'up': this.y -= HEIGHT; 
            break;
            case 'down': this.y += HEIGHT; 
            break;
        }
    }    

}

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [];
var player = new Player(2 * WIDTH,4 * HEIGHT);
var enemy = new Enemy(1,1);
allEnemies.push(enemy);

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
