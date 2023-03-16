const timezone = ()=>{
    const today = new Date()
    const h = today.getHours()
    const m = today.getMinutes()
    const s = today.getSeconds()
    const minutes = checkTime(m)
    const seconds = checkTime(s)
    document.getElementById('getHours').innerHTML=`${h}:${minutes}:${seconds}`
    t=setTimeout('timezone()', 500)
}
const checkTime = (i)=>{
    if(i<=10){
        return "0" + i
    }
    return i
}