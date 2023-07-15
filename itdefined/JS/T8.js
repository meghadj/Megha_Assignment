
function randomString() {  
            
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'; 
        
    let emptystr = '';  
  
           
    for (let i=0; i<10; i++) {  
        let temp = Math.floor(Math.random() * characters.length);  
        emptystr=emptystr + characters.charAt(temp);
    }  
  
             console.log(emptystr);
             let x= emptystr
             for(let j=0;j<x.length;j++) {
                 console.log(x.charCodeAt(j));
             }
            
}  

randomString();