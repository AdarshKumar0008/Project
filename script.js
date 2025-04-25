// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the video and play button elements
    const video = document.getElementById('featureVideo');
    const playBtn = document.getElementById('playBtn');
    
    // Add click event listener to the play button
    playBtn.addEventListener('click', function() {
        // If video is paused, play it
        if (video.paused) {
            video.play();
            // Hide the play button when video is playing
            playBtn.style.display = 'none';
        } else {
            // If video is playing, pause it
            video.pause();
            // Show the play button when video is paused
            playBtn.style.display = 'flex';
        }
    });
    
    // When video ends, show the play button again
    video.addEventListener('ended', function() {
        playBtn.style.display = 'flex';
    });
    
    // When video is paused, show the play button
    video.addEventListener('pause', function() {
        playBtn.style.display = 'flex';
    });
    
    // When video is playing, hide the play button
    video.addEventListener('playing', function() {
        playBtn.style.display = 'none';
    });
    
    // Add click event to the video itself to toggle play/pause
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

});