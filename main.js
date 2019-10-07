document.addEventListener('DOMContentLoaded', function(){
    var tracks = document.querySelectorAll('.grid-list__item');
    var audioPlayer = document.querySelector('#audioPlayer');
    var playPauseBtn = document.querySelector('#playPause');
    var isPlaying = false;
    var trackInfo = document.querySelector('#trackName')
    

    tracks.forEach(function(e,i,parent){
        e.addEventListener('click', function (event) {
            var trackFile = event.currentTarget.getAttribute('data-trackfile');
            var trackName = event.currentTarget.getAttribute('data-trackname');
            document.querySelector('#trackName').innerText=trackName;
            audioPlayer.setAttribute('src', './audio-items/' + trackFile);
            audioPlayer.play();
            isPlaying = true;
            playPauseBtn.classList.add('control-btn--pause');
        })
    })

    playPauseBtn.addEventListener('click', function () {
    
        if(isPlaying){
            audioPlayer.pause();
            isPlaying=false;
        } else{
            audioPlayer.play();
            isPlaying=true;
        }
        this.classList.toggle('control-btn--pause');
    })


});
