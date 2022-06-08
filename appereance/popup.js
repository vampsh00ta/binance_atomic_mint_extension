 

let mint = document.querySelector('.mint')
//atomic hub script
let galkaMint = document.querySelector('.galka_mint')



chrome.storage.local.get(["mintCount"],(result)=>{
   
    
    document.querySelector('.mint_input').placeholder = result.mintCount

    
})





let atomicScript = document.querySelector('.atomic')

atomicScript.onclick = function(){
   
    mint.remove()
    let binanceRemoving = document.querySelector('.binance')
    binanceRemoving.remove() 
    document.querySelector("header").innerHTML='ATOMICHUB SCRIPT'  
    let buttonClass = document.querySelector('.button')
    let input = document.createElement('div')

    input.innerHTML = '<input type="text" placeholder="номер блока">'
    buttonClass.prepend(input)
    atomic = document.querySelector(".atomic")
    atomic.innerHTML='<a href="#">ПУСК</a>'
    
    atomic.onclick = function(){
        

        blockNumber = document.querySelector('input').value
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {site:'atomic',blockNumber:blockNumber});
        });
    
    }
   
    

}
//binance  script

let binanceScript = document.querySelector('.binance')
binanceScript.onclick = function(){
    
  

   
    
 //one pos button
    mint.remove()
    onePosButton =  document.querySelector(".binance")
    onePosButton.classList = 'onepos'
    onePosButton.innerHTML='<a href="#">1 pos</a>' 
    
    let galkaMax = document.createElement('div')
    galkaMax.innerHTML = '<input class = "galka" type="checkbox">'
    onePosButton.after(galkaMax)

    let galkaOne = document.createElement('div')
    galkaOne.innerHTML = '<input class = "galka" type="checkbox">'
    onePosButton.after(galkaOne)

    galkaMax = document.querySelectorAll('.galka')[0]
    chrome.storage.local.get(["galkaMax"],(result)=>{
        console.log(result.galkaMax)
        if (result.galkaMax==true){
            galkaMax.checked = true
    
        }
    })
    galkaMax.addEventListener('click',()=>{
        console.log(galkaMax.checked);
        if(galkaMax.checked == true){
              
            chrome.storage.local.set({"galkaMax":true})
        }
        else{
            chrome.storage.local.set({"galkaMax":false})
    
        }
     
    })
  
    
    
    

    

    galkaOne = document.querySelectorAll('.galka')[1]
    chrome.storage.local.get(["galkaOne"],(result)=>{
        console.log(result.galkaOne)
        if (result.galkaOne==true){
            galkaOne.checked = true
    
        }
    })
    galkaOne.addEventListener('click',()=>{
        console.log(galkaOne.checked);
        if(galkaOne.checked == true){
              
            chrome.storage.local.set({"galkaOne":true})
        }
        else{
            chrome.storage.local.set({"galkaOne":false})
    
        }
     
    })





    



 //max button
   
    mint.remove()
    maxButton =  document.querySelector(".atomic")
    maxButton.classList = 'max'
    maxButton.innerHTML='<a href="#">MAX</a>' 


    
    maxButton.onclick = function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {site:'maxAmount'});
        });
        
    }
    onePosButton.onclick = function(){
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {site:'onePos'});
        });

      
    }


}


//mint 



chrome.storage.local.get(["galkaMint"],(result)=>{
    
    if (result.galkaMint==true){
        galkaMint.checked = true

    }
})
galkaMint.addEventListener('click',()=>{
    console.log(galkaMint.checked);
    if(galkaMint.checked == true){
            
        chrome.storage.local.set({"galkaMint":true})
        
    }
    else{
        chrome.storage.local.set({"galkaMint":false})
       

    }
    
})



let save = document.querySelector('.save')

save.addEventListener('click',()=>{
    let keyWord = document.querySelector('.mint_input').value
    
    chrome.storage.local.set({"mintCount":keyWord})
    document.querySelector('.mint_input').value = ''
    document.querySelector('.mint_input').placeholder = keyWord
   
    
})





