console.log("https://youtu.be/lCGrVHUsXPo")

let linkInput = document.getElementById('link-input')
let go = document.getElementById('go')
let downloadLink = document.getElementById('downloadLink')
let indiv = document.querySelector('div.in')
let out = document.querySelector('div.out')
let guide = document.querySelector('div.guide')
let videoLink = ''

let wait = false

linkInput.onpaste = () => {
    if (wait) return

    // while waiting paste event will not work
    wait = true

    downloadLink.style.display = 'none'
    out.innerHTML = ''
    go.style.background = "url('../images/dloading.svg') 6px 0px no-repeat"
    guide.style.display = 'none'
    indiv.style.margin = '180px auto 20px auto'




    // show the download link and allow to download next video
    setTimeout(() => {
        wait = false
        go.style.background = ''
        downloadLink.style.display = 'block'
        let encodedVideoLink = [...videoLink].map(x => x.codePointAt(0)).toString()
        downloadLink.href = `https://cdn.geekshine.io/geekshine2?url=${encodedVideoLink}`
    }, 3000)



    // show the video's title,description and the thumbnail
    setTimeout(() => {
        videoLink = linkInput.value.trim()
        if (videoLink.indexOf('https://youtu.be/') === -1) return

        out.style.display = 'block'
        out.style.background = `url('../images/loading.svg') center 0px no-repeat`
        $.ajax({
            type: 'post',
            url: 'https://cdn.geekshine.io/info2',
            data: { url: videoLink },
            success: (info) => {
                out.style.background = ''
                let { title, description, imgHashName } = JSON.parse(info)
                out.innerHTML = `<div id='info'><h2>${title}</h2><p>${description}<p></div><img  src='https://cdn.geekshine.io/imgCdn?imgHashName=${imgHashName}'>`
            }
        })
    }, 50)
}
