function timeElapsed(timestamp) {
  const currentTimestamp = Date.now();

  var seconds = Math.floor((currentTimestamp - timestamp) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }

  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }

  if (seconds === 0) {
    return "Now";
  }

  return Math.floor(seconds) + " seconds ago";
}

export default timeElapsed;
