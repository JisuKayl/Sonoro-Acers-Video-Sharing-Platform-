function showVideo(event) {
  var videoSource = event.currentTarget.dataset.video;

  console.log("Event Target:", event.currentTarget);
  console.log("Video Source:", videoSource);

  var popupVideo = document.getElementById("popupVideo");
  popupVideo.src = videoSource;

  var videoPopup = document.getElementById("videoPopup");
  videoPopup.style.display = "flex"; 
}

function closeVideoPopup() {
  var videoPopup = document.getElementById("videoPopup");
  videoPopup.style.display = "none";

  var popupVideo = document.getElementById("popupVideo");
  popupVideo.pause();
}
