const ddd = document.getElementById('ddd')
const btn = document.getElementById('btn')
const ret = document.getElementById('ret')

if(btn){
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd.value}`).then((res)=>{
            res.json().then((data)=>{
                for(let i=0;i<=139;i++){
                    ret.innerHTML+=`
                    <div class='returnBusca'>
                        <div class='ddd'>
                            <i>Cities => ${data.cities[i]}</i>
                        </div>
                    </div>
                    `
                }
                console.log(data)
            })
        })
    }
}