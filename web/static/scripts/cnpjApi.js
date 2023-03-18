
const cnpj = document.getElementById('cnpj')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch('https://www.receitaws.com.br/v1/cnpj/'+cnpj.value, {mode:'no-cors',}).then(function(resp){
            return resp.json()
        }).then(function(data){
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
    }
}