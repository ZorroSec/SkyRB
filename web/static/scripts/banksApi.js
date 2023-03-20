const ban = document.getElementById('bank')
const btn = document.getElementById('btn')
const ret = document.getElementById('return')

if(btn){
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api#tag/BANKS/paths/~1banks~1v1/get/banks/v1/${ban.value}`)
    }
}