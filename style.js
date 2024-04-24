
function loadSpotifyTrack(trackID, elementID) {
    var embedCode = `<iframe src="https://open.spotify.com/embed/track/${trackID}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    document.getElementById(elementID).innerHTML = embedCode;
}