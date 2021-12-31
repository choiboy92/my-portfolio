let leon, canvas, ctx;

const sw = 700;
const sh = 200;
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
        size: 60,
        weight: 200,
    });

    date = new LeonSans({
        text: date2Render,
        colorful: ['#96c8a2', '#63D2FF', '#2081C3', '#426A5A', '#F17F29'],
        size: 50,
        weight: 600
    });

    draw(title, 2.0);
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
      });
  }
}


function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    //const x = (sw - title.rect.w) / 2;
    const x = 70;
    const y = (sh - title.rect.h) / 2;
    title.position(x, y);
    title.draw(ctx);
    date.position(x+400, y);
    date.drawColorful(ctx);
}

/* ANIME.JS FUNCTIONS */
function sideQuickNav_bounce() {
  anime({
    targets: '#sideWrapper',
    translateY: [250,0],
    duration: 3000
  })
}

function aboutPage_anime() {
  anime({
    targets: '#aboutLH',
    translateX:[-250,0],
    duration: 2000
  })
  anime({
    targets: '#aboutRH',
    translateX:[250,0],
    duration: 3000
  })
}

function homePage_anime() {
  anime({
    targets: '#rotateLabel',
    rotateY: 360,
    duration: 8000,
    loop: true,
    easing: 'linear',
  })
}

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    //console.log((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100)
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}

function apple_anime() {
  var tl = anime.timeline({
    duration: 200,
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false
  });

  tl
  .add({
    targets: '#apple_outcome',
    opacity: [0, 1],
    translateX: [100, 0],
  }, 400)
  .add({
    targets: '#apple_mvp',
    translateY: [200, 0],
  }, 300)
  .add({
    targets: '#apple_ideation',
    translateY: [200, 0],
  }, 200)
  .add({
    targets: '#apple_research',
    translateY: [200, 0],
  }, 150)
  .add({
    targets: '#apple_problem',
    opacity: [0, 1],
    translateX: [100, 0],
  }, 0)

  window.onscroll = () => {
    tl.seek(tl.duration * getScrollPercent());
  }
}
/*window.onscroll = () => {
  tl.seek(tl.duration * getScrollPercent());
}*/

window.onload = () => {
    init();
};
