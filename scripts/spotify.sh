showArtist () {
  echo `osascript -e 'tell application "Spotify" to artist of current track as string'`
}
showAlbum () {
  echo `osascript -e 'tell application "Spotify" to album of current track as string'`
}
showTrack () {
  echo `osascript -e 'tell application "Spotify" to name of current track as string'`
}

showStatus () {
  echo "{\"album\": \"$(showAlbum)\", \"track\": \"$(showTrack)\"}"
}

showStatus
