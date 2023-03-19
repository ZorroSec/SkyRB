const uf = document.getElementById('uf')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){{
    btn.onclick = ()=>{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}`).then((res)=>{
            res.json().then((data)=>{
                console.log(data)
            })
        })
    }
}}