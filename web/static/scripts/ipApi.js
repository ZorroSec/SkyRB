const ip = document.getElementById('ip')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch('http://ip-api.com/json/'+ip.value).then((res)=>{
            res.json().then((data)=>{
                ret.innerHTML=`
                <div class='returnBusca">
                    <div class='ip'>
                        <code>
                            As => ${data.as}<br>
                            City => ${data.city}<br>
                            COtry => ${data.country}<br>
                            countryCode = ${data.countryCode}<br>
                            Isp => ${data.isp}<br>
                            lat => ${data.lat}<br>
                            Lon => ${data.lon}<br>
                            Org => ${data.org}<br>
                            Query => ${data.query}<br>
                            regionName => ${data.regionName}<br>
                            region => ${data.region}<br>
                            status => ${data.ststus}<br>
                            timezone => ${data.timezone}<br>
                            zip => ${data.zip}<br>
                        </code>
                    </div>
                </div>
                `
                console.log(data)
            })
        })
    }
}