
//Assignment
//To generate a unique alphanumeric sting using 8 characters


function randomString() {  
            
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'; 
    let numbers= '0123456789';
        
    let emptystr = '';  
  
           
    for (let i=0; i<4; i++) {  
        let temp = Math.floor(Math.random() * characters.length);  
        emptystr=emptystr + characters.charAt(temp);
    }  

     for (let i=0; i<4; i++) {  
        let temp = Math.floor(Math.random() * numbers.length);  
        emptystr=emptystr + numbers.charAt(temp);
    }  
  
             console.log(emptystr); 
             
}  

randomString();