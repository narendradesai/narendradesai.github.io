var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Rectangle
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(250,300,100,100);

// Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = 'red';
// c.stroke();


// Arc/ circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for(var i = 0 ; i < 10; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI * 2, false);
//     c.strokeStyle = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     c.stroke();

//     c.beginPath();
//     c.moveTo(x,300);
//     c.lineTo(y,100);
//     c.strokeStyle = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     c.stroke();
// }


// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 40; 
// var dy = (Math.random() - 0.5) * 40; 
// var radius = 30;

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
    '#F69A9A',
    '#EF4566',
    '#F9CDAE',
    '#C8C8A9',
    '#83AE9B',
]
//console.log(colorArray);
window.addEventListener('mousemove', function(event) {
    //console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() { 
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    
    this.update = function(){ 
        if (this.x + radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 4;
            }            
        } else if (this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    }
}


var circleArray = [];

function init() {

    circleArray = [];
    for (var i = 0; i < 900; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5); 
        var dy = (Math.random() - 0.5); 

        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    

}

init()
animate();