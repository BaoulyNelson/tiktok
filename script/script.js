function showLiveStream() {
    // Reference to the video container
    var videoContainer = document.getElementById('videoContainer');

    // Replace content of video container with a live video stream
    videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" frameborder="0" allowfullscreen></iframe>';
}