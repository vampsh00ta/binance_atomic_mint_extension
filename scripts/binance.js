chrome.extension.onMessage.addListener(handleMessage);
function handleMessage(request) {


   
   
    if(request.site =='maxAmount'){
        alert('выбирает максимально возможное количество')

         //выбирает макс кол-во и жмет купить
        function checkoutingPart1(){

            try{
                document.querySelector(".css-1rqdfgy").click()
                document.querySelector("body div button").click()
            
            }
            catch{
                setTimeout(function()
                    {
                        console.log('релиз еще не начался,либо товар раскуплен:(');
                        checkoutingPart1()
                    }, 10)
                }
            }
        //подтверждение покупки
        function checkoutingPart2(){
            try{
              
                    
                    document.querySelector(".css-d8znwston").click()
                    checkoutingPart2()
                
            }
            catch{
                setTimeout(function()
                    {
                        console.log('ошибка');
                        checkoutingPart2()
                    }, 10)
            }
        }
        checkoutingPart1()
        checkoutingPart2()

    }
    else if(request.site =='onePos'){
        alert('выбирает 1 позицию ')

         //выбирает макс кол-во и жмет купить
        function checkoutingPart1(){

            
            if (document.querySelector(".css-1rqdfgy")!=null){
                document.querySelector("body div button").click()

            }
            else{
                setTimeout(function()
                    {
                        console.log('релиз еще не начался,либо товар раскуплен:(');
                        checkoutingPart1()
                    }, 10)
                }
                
            }
        //подтверждение покупки
        function checkoutingPart2(){
            try{
                
                    document.querySelector(".css-d8znwston").click()
                    checkoutingPart2()
                
            }
            catch{
                setTimeout(function()
                    {
                        console.log('ошибка');
                        checkoutingPart2()
                    }, 10)
            }
        }
        checkoutingPart1()
        checkoutingPart2()
    }
   
}
chrome.storage.local.get(["galkaMax","galkaOne"],(result)=>{
    
    
    if(result.galkaOne==true){
        function checkoutingPart1(){

            
            if (document.querySelector(".css-1rqdfgy")!=null){
                document.querySelector("body div button").click()

            }
            else{
                setTimeout(function()
                    {
                        console.log('релиз еще не начался,либо товар раскуплен:(');
                        checkoutingPart1()
                    }, 10)
                }
                
            }
        //подтверждение покупки
        function checkoutingPart2(){
            try{
                setTimeout(function()
                {
                    document.querySelector(".css-d8znwston").click()
                    checkoutingPart2()
                }, 10)
            }
            catch{
                setTimeout(function()
                    {
                        console.log('ошибка');
                        checkoutingPart2()
                    }, 10)
            }
        }
        checkoutingPart1()
        checkoutingPart2()
        
    }
    if (result.galkaMax==true){
        function checkoutingPart1(){
            if (document.querySelector(".css-1rqdfgy")!=null){
                document.querySelector(".css-1rqdfgy").click()
                document.querySelector("body div button").click()

            }
           
            else{
                setTimeout(function()
                    {
                        console.log('релиз еще не начался,либо товар раскуплен:(');
                        checkoutingPart1()
                    }, 10)
                }
            }
        //подтверждение покупки
        function checkoutingPart2(){
            try{
                setTimeout(function()
                {
                    document.querySelector(".css-d8znwston").click()
                    checkoutingPart2()
                }, 10)
            }
            catch{
                setTimeout(function()
                    {
                        console.log('ошибка');
                        checkoutingPart2()
                    }, 10)
            }
        }
        checkoutingPart1()
        checkoutingPart2()
        

    }
})


chrome.extension.onMessage.addListener(handleMessage);
function handleMessage(request) {


   
    if(request.site ==='atomic'){
        alert(`ждет блок №${request.blockNumber}`)
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
    else if(request.site =='maxAmount'){
        alert('выбирает максимально возможное количество')

         //выбирает макс кол-во и жмет купить
        function checkoutingPart1(){

            try{
                document.querySelector(".css-1rqdfgy").click()
                document.querySelector("body div button").click()
            
            }
            catch{
                setTimeout(function()
                    {
                        console.log('релиз еще не начался,либо товар раскуплен:(');
                        checkoutingPart1()
                    }, 10)
                }
            }
        //подтверждение покупки
        function checkoutingPart2(){
            try{
                document.querySelectorAll("button")[5].click()
            }
            catch{
                setTimeout(function()
                    {
                        console.log('ошибка');
                        checkoutingPart2()
                    }, 10)
            }
        }
        checkoutingPart1()
        checkoutingPart2()

    }
    else if(request.site =='onePos'){
        alert('выбирает 1 позицию ')

         //выбирает макс кол-во и жмет купить
        function checkoutingPart1(){

            
                let button =  document.querySelector(".css-t1aewe")
                if (button.getAttribute("disabled")==null)
                    button.click()
            
                else{
                    setTimeout(()=>{
                        console.log('релиз еще не начался,либо произошла какая-та ошибка :(');
                        checkoutingPart1()
                    },10)
                }
            }
        //подтверждение покупки
        function checkoutingPart2(){
            try{
                document.querySelectorAll("button")[5].click()
            }
            catch{
                setTimeout(function()
                    {
                        console.log('ошибка');
                        checkoutingPart2()
                    }, 10)
            }
        }
        checkoutingPart1()
        checkoutingPart2()
    }
   
}