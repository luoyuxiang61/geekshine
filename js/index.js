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
                url: 'http://geekshine.io:3000/info2',
                data: {
                    url: videoLink
                },
                success: (info) => {
                    let { title, description, imgHashName } = JSON.parse(info)
                    let out = $("div.out")
                    out.append(`<div>${title}</div><div>${description}</div><img  src='http://geekshine.io:3000/imgCdn?imgHashName=${imgHashName}'>`)
                }
            })
        }, 50)
    }
}