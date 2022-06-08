
let atomicScript = document.querySelector('.atomic')

atomicScript.onclick = function(){
   
    
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

let binanceScript = document.querySelector('.binance')
binanceScript.onclick = function(){

 //max button
    onePosButton =  document.querySelector(".binance")
    onePosButton.classList = 'onepos'
    onePosButton.innerHTML='<a href="#">1 pos</a>' 
 //one pos button

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

