function qesinput(fn,delay){
return function(){
    let t=null;
    return function(){
        if(t!==null){
            clearTimeout(t)
        }
        t=setTimeout(()=>{
            fn()
        },delay)
    }
}
}

export default qesinput