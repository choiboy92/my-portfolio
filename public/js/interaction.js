let leon, canvas, ctx;

const sw = 700;
const sh = 300;
const pixelRatio = 2;

function init(loc, txt2Render, date2Render) {
    canvas = document.getElementById(loc);
    ctx = canvas.getContext("2d");
    //canvas.width = sw * pixelRatio;
    //canvas.height = sh * pixelRatio;
    //canvas.style.width = sw + 'px';
    //canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);
    title = new LeonSans({
        text: txt2Render,
        color: ['#FFFFFF'],
        size: 80,
        weight: 200
    });

    date = new LeonSans({
        text: date2Render,
        colorful: ['#c5d73f', '#9d529c', '#49a9db', '#fec330', '#5eb96e', '#fc5356', '#f38f31'],
        size: 50,
        weight: 600
    });

    draw(title, 3.0);
    draw(date, 3.0);

    requestAnimationFrame(animate);
}

function draw(element, time) {
  let i, total = element.drawing.length;
  for (i = 0; i < total; i++) {
      TweenMax.fromTo(element.drawing[i], time, {
          value: 0
      }, {
          delay: i * 0.1,
          value: 1,
          ease: Power4.easeOut
          /*onComplete: function() {
            //console.log('done, ', i);
            count++;
            console.log('count, ', count);
          }*/
      });
  }
}


function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - title.rect.w) / 2;
    const y = (sh - title.rect.h) / 2;
    title.position(x, y);
    title.draw(ctx);
    date.position(x+400, y);
    date.drawColorful(ctx);
}

window.onload = () => {
    init();
};
