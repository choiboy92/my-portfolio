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

function progress(duration) {
  let progress = anime.timeline({
    duration: duration,
    elasticity: 200,
    easing: 'linear',
    autoplay: false
  });

  progress.add({
    targets: '.vl',
    height: ['0%', '80%'],
  })
  return progress
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
    translateY: [100, 0],
  }, 300)
  .add({
    targets: '#apple_ideation',
    translateY: [100, 0],
  }, 200)
  .add({
    targets: '#apple_research',
    translateY: [100, 0],
  }, 150)
  .add({
    targets: '#apple_problem',
    opacity: [0, 1],
    translateX: [100, 0],
  }, 0)
  var vl_progress = progress(400+200)

  window.onscroll = () => {
    tl.seek(tl.duration * getScrollPercent());
    vl_progress.seek(vl_progress.duration * getScrollPercent());
  }
}



function jsviewhkl_anime(vl_progress) {
  var tl = anime.timeline({
    duration: 100,
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false
  });

  tl
  .add({
    targets: '#jsviewhkl_results',
    opacity: [0, 1],
  }, 300)
  .add({
    targets: '#jsviewhkl_oldvsnew',
    translateY: [100, 0],
  }, 200)
  .add({
    targets: '#jsviewhkl_solution',
    translateY: [100, 0],
  }, 100)
  .add({
    targets: '#jsviewhkl_problem',
    opacity: [0, 1],
    translateY: [100, 0],
  }, 0)
  var vl_progress = progress(300+100)

  window.onscroll = () => {
    tl.seek(tl.duration * getScrollPercent());
    vl_progress.seek(vl_progress.duration * getScrollPercent());
  }
}

function presweather_anime(vl_progress) {
  var tl = anime.timeline({
    duration: 200,
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false
  });

  tl
  .add({
    targets: '#presweather_impact',
    opacity: [0, 1],
  }, 800)
  .add({
    targets: '#presweather_training',
    translateY: [100, 0],
  }, 600)
  .add({
    targets: '#presweather_aws',
    translateY: [100, 0],
  }, 300)
  .add({
    targets: '#presweather_problem',
    opacity: [0, 1],
    translateY: [100, 0],
  }, 0)
  var vl_progress = progress(800+100)

  window.onscroll = () => {
    tl.seek(tl.duration * getScrollPercent());
    vl_progress.seek(vl_progress.duration * getScrollPercent());
  }
}

function kitchen_anime(vl_progress) {
  var tl = anime.timeline({
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false
  });

  tl
  .add({
    targets: '#kitchen_final',
    opacity: [0, 1],
  }, 1500)
  .add({
    targets: '#kitchen_refining',
    translateY: [100, 0],
    duration:200,
  }, 1600)
  .add({
    targets: '#kitchen_right2',
    translateX: [100, 0],
    duration:300,
  }, 1200)
  .add({
    targets: '#kitchen_left2',
    translateX: [-100, 0],
    duration:300,
  }, 1150)
  .add({
    targets: '#kitchen_right1',
    translateX: [100, 0],
    duration:200,
  }, 1100)
  .add({
    targets: '#kitchen_left1',
    translateX: [-100, 0],
    duration:200,
  }, 1050)
  .add({
    targets: '#kitchen_ideation',
    translateY: [100, 0],
    duration:150,
  }, 800)
  .add({
    targets: '#kitchen_research',
    translateY: [100, 0],
    duration:500,
  }, 400)
  .add({
    targets: '#kitchen_problem',
    opacity: [0, 1],
    translateY: [100, 0],
    duration:300,
  }, 0)
  var vl_progress = progress(1500+200)

  window.onscroll = () => {
    tl.seek(tl.duration * getScrollPercent());
    vl_progress.seek(vl_progress.duration * getScrollPercent());
  }
}

function neutoy_anime(vl_progress) {
  var tl = anime.timeline({
    duration: 200,
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false
  });

  tl
  .add({
    targets: '#neutoy_pivot',
    opacity: [0, 1],
    duration:200,
  }, 900)
  .add({
    targets: '#neutoy_mvp',
    translateY: [100, 0],
    duration:200,
  }, 400)
  .add({
    targets: '#neutoy_research',
    translateY: [100, 0],
    duration:200,
  }, 250)
  .add({
    targets: '#neutoy_refining',
    translateY: [100, 0],
    duration:200,
  }, 100)
  .add({
    targets: '#neutoy_problem',
    opacity: [0, 1],
    translateY: [100, 0],
    duration:100,
  }, 0)
  var vl_progress = progress(300+100)

  window.onscroll = () => {
    tl.seek(tl.duration * getScrollPercent());
    vl_progress.seek(vl_progress.duration * getScrollPercent());
  }
}


/*window.onscroll = () => {
  tl.seek(tl.duration * getScrollPercent());
}*/

/*window.onload = () => {
    init();
};*/
