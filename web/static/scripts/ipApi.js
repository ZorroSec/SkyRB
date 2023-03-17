const cep = document.getElementById('cep')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res)=>{
            res.json()
        }).then((data)=>{
            ret.innerHTML=`<i>${data.logradouro}</i>`
        })
    }
}