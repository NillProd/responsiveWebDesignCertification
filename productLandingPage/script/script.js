var video = document.getElementById("video");


function videoPause()
{
  if (video.paused)
  {
    video.play();
  }
  else
  {
    video.pause();
  }
}