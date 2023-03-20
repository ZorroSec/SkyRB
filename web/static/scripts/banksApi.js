const ban = document.getElementById('bank')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api/banks/v1/${ban.value}`).then((res)=>{
            res.json().then((data)=>{
                ret.innerHTML=`
                <div class='returnBusca'>
                    <div class='bank'>
                        <code>
                            Code => ${data.code}<br>
                            fullName => ${data.fullName}<br>
                            ispb => ${data.ispb}<br>
                            name => ${data.name}
                        </code>
                    </div>
                </div>
                `
                console.log(data)
            })
        })
    }
}