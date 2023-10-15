const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];

// code start here!
const aside = document.querySelector('aside');
const video = document.getElementById('vidPlayer');
for (let f of files) {
    //load images through array
    const img = document.createElement('img');
    img.src = `images/${f}.jpg`;
    aside.appendChild(img);

    //add event
    img.addEventListener('click', function() {
        video.pause();
        video.src = `videos/${f}.mp4`;
    })//end event

    //content check
    console.log(img);
}//end loop

//implement buttons
const play = document.getElementById('play');
play.addEventListener("click", function() {
    video.play();
})
const stop = document.getElementById('stop');
stop.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;
})
const skipforward = document.getElementById('skipforward');
skipforward.addEventListener("click", function() {
    const skipTime = 5;
    video.currentTime += skipTime;
})
const skipbackward = document.getElementById('skipbackward');
skipbackward.addEventListener("click", function() {
    const skipTime = 5;
    video.currentTime -= skipTime;
})