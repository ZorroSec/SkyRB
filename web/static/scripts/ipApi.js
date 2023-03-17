const fetchUrl = ()=>{
    fetch("http://ip-api.com/json/").then((res)=>{
        res.json()
    }).then((data)=>{
        let ex = document.getElementById('ex')
        ex.innerHTML=`<i>${data['query']}</i>`
    })
}
fetchUrl()