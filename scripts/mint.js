


chrome.storage.local.get(["galkaMint","mintCount"],(result)=>{
    
        if (result.galkaMint==true){
        
                var allelems = document.querySelectorAll('*')

        
                
                var allelems = document.querySelectorAll('*')
                for (let i = 0;i<allelems.length;i++){
                        if (allelems[i].textContent.toLowerCase().includes('mint')||allelems[i].textContent.toLowerCase().includes('buy')||allelems[i].textContent.toLowerCase().includes('reserve')||allelems[i].textContent.toLowerCase().includes('connect')) {
                
                                allelems[i].click()
                
                        }
                }

                
                    
                   
            }
      
    
      
})


