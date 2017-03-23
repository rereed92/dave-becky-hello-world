const el = document.getElementById('current-time')
function updateTime () {
    var time = new Date();
    el.innerHTML = time;
    setTimeout(function() {
        updateTime();
    }, 1000);
}
updateTime();