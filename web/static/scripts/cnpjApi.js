
const cnpj = document.getElementById('cnpj')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj.value}`).then(function(resp){
            resp.json().then(function(data){
                for(let [key, value] of Object.entries(data)){
                    ret.innerHTML+=`
                    <div class='${key}'>
                        <code>
                            ${key} => ${value}
                        </code>
                    </div>
                    `
                    console.log(key, value)
                }
                
            })
        })
    }
}