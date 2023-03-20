
const cnpj = document.getElementById('cnpj')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj.value}`).then(function(resp){
            resp.json().then(function(data){
                // ret.innerHTML=`
                // <div class='returnBusca'>
                //     <div class='cnpj'>
                //         <code>
                //             data_sitacao => ${data.data_situacao}
                //             fantasia => ${data.fantasia}
                //             complemento => ${data.complemento}
                //             tipo => ${data.tipo}
                //             nome => ${data.nome}
                //             efr => ${data.erf}
                //             abertura => ${data.abertura}
                //             telefone => ${data.telefone}
                //             email => ${data.email}
                //         </code>
                //     </div>
                // </div>
                // `
                console.log(data)
            })
        })
    }
}