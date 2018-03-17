function formatTime(seconds) {
    if (seconds < 60) {
        return seconds + ' sek.';
    } else if (seconds < 3600) {
        var minutes = Math.floor(seconds / 60);
        var sec = seconds % 60;
        return minutes + ' min.' + sec + ' sek.';
    } else {
        var hour = Math.floor(seconds / 3600);
        var minutes = Math.floor(seconds % 3600 / 60);
        var sec = Math.floor(seconds % 3600 % 60);
        return hour + ' hours ' + minutes + ' min. ' + sec + ' sek.';
    }
}
exports.formatTime = formatTime;