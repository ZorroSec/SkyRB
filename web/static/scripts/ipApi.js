const cep = document.getElementById('cep')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch("https://viacep.com.br/ws/"+cep.value+"/json/").then((res)=>{
            res.json().then((data)=>{
                ret.innerHTML=`
                <div class='returnBusca'>
                    <div class='cep'>
                        <h5>${data.cep}</h5>
                    </div>
                </div>
                `
            })
        })
    }
}