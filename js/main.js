 require.config({
     baseUrl: 'js',
     paths: {
         'jquery': 'lib/jquery-1.11.1.min'
     }
 })

 require(["jquery", "lib/Game", "data/Sources", "data/ImagePreLoader"], function($, Game, Sources, ImagePreLoader) {
     var game = new Game({
         FPS: 60,
         width: 640,
         height: 480,
         onInit: function() {
             $(ImagePreLoader).bind('loadStatusChange', function(event, obj) {
                 console.log(event, obj);
             })
             $(ImagePreLoader).bind('loadFinish', function(event, obj) {
                 console.log(event, obj);
             })
             // ImagePreLoader.addEventListener("loadFinish", function(event) {
             //     console.log(event);
             // })

             ImagePreLoader.init(Sources.imgs);
             this.canvas = document.getElementById("canvas");
             this.canvas.width = this.width;
             this.canvas.height = this.height;
             this.context = this.canvas.getContext("2d");

             this.initEvent();

             window.img = new Image();
             img.src = Sources.imgs.bg;
         },
         initEvent: function() {
             window.addEventListener("keydown", function(event) {
                 KeyState[event.keyCode] = true;
             }, true);

             window.addEventListener("keyup", function(event) {
                 KeyState[event.keyCode] = false;
             }, true);
         },
         onStart: function() {
             this.context.font = text.size + "px " + text.font;
             this.context.fillStyle = text.color;
             text.height = text.size + 2;
             text.width = this.context.measureText(text.content).width;
             text.x = Math.random() * (this.width - text.width) >> 0;
             text.y = Math.random() * (this.height - text.height) >> 0;
         },
         handleInput: function(timeStep, now) {
             if (KeyState[Key.P]) {
                 this.pause();
             }
             if (KeyState[Key.R]) {
                 this.resume();
             }
         },
         update: function(timeStep, now) {

             text.x += text.moveSpeedX * timeStep;
             text.y += text.moveSpeedY * timeStep;

             if (text.x + text.width >= this.width && text.moveSpeedX > 0 || text.x < 2 && text.moveSpeedX < 0) {
                 text.moveSpeedX = -text.moveSpeedX;
             }
             if (text.y + 1 >= this.height && text.moveSpeedY > 0 || text.y < text.height && text.moveSpeedY < 0) {
                 text.moveSpeedY = -text.moveSpeedY;
             }

         },
         render: function(timeStep, now) {
             var ctx = this.context;
             ctx.clearRect(0, 0, this.width, this.height);
             ctx.fillText(text.content, text.x, text.y);

             ctx.drawImage(img, 0, 0);
         },
     });

     var KeyState = {};
     var Key = {
         P: 80,
         R: 82,
     };

     var text = {
         content: "Hello, World!",
         x: 0,
         y: 0,
         moveSpeedX: 0.05,
         moveSpeedY: 0.05,
         color: "#0000ff",
         font: "Arial",
         size: 30
     }
     $(function() {
         game.init();
         game.start();
     })

 })