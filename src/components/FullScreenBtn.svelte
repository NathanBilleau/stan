<script>
    let isFullscreen = false

    function toogleFullScreen () {
        const elem = document.documentElement

        if(!isFullscreen) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { 
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { 
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { 
                elem.msRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { 
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { 
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        
        isFullscreen = !isFullscreen
    }
</script>

<button on:click={toogleFullScreen}>
    <i class="fa fa-compress"></i>
</button>

<style>
button {
    border:none;
    background: none;
    cursor: pointer;
}

i {
    font-size: 1.6em;
    color: #fff;
}
</style>