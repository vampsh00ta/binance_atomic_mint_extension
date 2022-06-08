chrome.extension.onMessage.addListener(handleMessage);
function handleMessage(request) {


   
    if(request.site ==='atomic'){
        
        function buy(){
            let button =  document.querySelectorAll('.col-lg-6.col-md-8.align-self-stretch.mb-4')[request.blockNumber-1].querySelector(".btn-block")
            if (button.getAttribute("disabled")==null)
                button.click()
        
            else{
                setTimeout(()=>{
                    console.log('релиз еще не начался,либо произошла какая-та ошибка :(');
                    buy()
                },10)
            }
        }
        function confirmation(){
        
        
                let len =  document.querySelectorAll(".btn-block")
                if(len[len.length-1].getAttribute("disabled")==null){
                    len[len.length-1].click()
                } 
                else{
                    setTimeout(() => {
                        console.log('ошибка')
                        confirmation()
                    }, 10);
        
                }
        
        }
        buy()
        confirmation()
    }
}