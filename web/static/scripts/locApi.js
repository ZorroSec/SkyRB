const uf = document.getElementById('uf')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){{
    btn.onclick = ()=>{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}`).then((res)=>{
            res.json().then((data)=>{
                ret.innerHTML=`
                <div class='returnBusca'>
                    <div class='uf'>
                        <code>
                            id => ${data.id}
                            sigla => ${data.sigla}
                            nome => ${data.nome}
                            regiao => ${data.regiao['nome']}
                        </code>
                    </div>
                </div>
                `
                console.log(data)
            })
        })
    }
}}