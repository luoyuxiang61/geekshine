let linkInput = document.getElementById('link-input')

let wait = false

linkInput.onpaste = () => {
    if (wait) {
        console.log('please wait!')
    }
    else {
        wait = true
        setTimeout(() => wait = false, 5000)
        setTimeout(() => {
            let videoLink = linkInput.value.trim()
            if (videoLink.indexOf('https://youtu.be/') === -1) return
            $.ajax({
                type: 'post',
                url: 'https://io.geekshine.io/info2',
                data: {
                    url: videoLink
                },
                success: (info) => {
                    let { title, description, imgHashName } = JSON.parse(info)
                    let out = $("div.out")
                    out.append(`<div id='info'><h2>${title}</h2><p>${description}<p></div><img  src='https://io.geekshine.io/imgCdn?imgHashName=${imgHashName}'>`)
                }
            })
        }, 50)
    }
}