const cep = document.getElementById('cep')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

// 01001000

if(btn){
    btn.onclick = ()=>{
        fetch("https://viacep.com.br/ws/"+cep.value+"/json/").then((res)=>{
            res.json().then((data)=>{
                ret.innerHTML=`
                <div class='returnBusca'>
                    <div class='cep'>
                        <code>
                            Cep => ${data.cep}<br>
                            Bairro => ${data.bairro}<br>
                            Complemento => ${data.complemento}<br>
                            Ddd => ${data.ddd}<br>
                            Gia => ${data.gia}<br>
                            Ibge => ${data.ibge}<br>
                            Localidade => ${data.localidade}<br>
                            Logradouro => ${data.logradouro}<br>
                            Siafi => ${data.siafi}<br>
                            Uf => ${data.uf}
                        </code>
                    </div>
                </div>
                `
                console.log(data)
            })
        })
    }
}