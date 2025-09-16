const videos = document.querySelectorAll("video")
const container = document.querySelector(".videos-container")


function tocarVideo(){
    const alturaTela = window.innerHeight

    const videoAtual = Math.round(container.scrollTop / alturaTela)

    videos.forEach( (video, index) => {
        if(index === videoAtual){
            video.play()
        } else {
            video.pause()
            video.currentTime = 0
        }
    })
}


container.addEventListener("scroll", tocarVideo)

tocarVideo()