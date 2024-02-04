// Debugging in the console
function showVideo(event) {
  // Get the video source from the clicked thumbnail
  var videoSource = event.currentTarget.dataset.video;

  // Log information for debugging
  console.log("Event Target:", event.currentTarget);
  console.log("Video Source:", videoSource);

  // Set the video source for the popup video element
  var popupVideo = document.getElementById("popupVideo");
  popupVideo.src = videoSource;

  // Show the video popup
  var videoPopup = document.getElementById("videoPopup");
  videoPopup.style.display = "flex"; // Adjust this as needed based on your styling
}

// Function to close the video popup
function closeVideoPopup() {
  var videoPopup = document.getElementById("videoPopup");
  videoPopup.style.display = "none";

  // Pause the video when the popup is closed
  var popupVideo = document.getElementById("popupVideo");
  popupVideo.pause();
}
