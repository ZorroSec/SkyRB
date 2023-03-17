const cep = document.getElementById('cep').value
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch("https://viacep.com.br/ws/"+cep+"/json/", {
            "mode": 'no-cors',
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
        }).then((res)=>{
            return res.json()
            res.set({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            });
        }).then((data)=>{
            ret.innerHTML=`<i>${data["logradouro"]}</i>`
        })
    }
}