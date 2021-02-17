function palindrome(str){
    if(str.length<=1){return true}
    if(str[0]==str[str.length-1])
    {return true && palindrome(str.slice(1,str.length-1))}
    else{return false}
    }   
    
    function palin(str){
    
       if(str.length<=1){return true}
       let l=0, r=str.length
       while (r>l)
       {  if(str[l]!==   str[r]){return false}
          l++;
          r--; }
    
       return true;
    }
    
    //console.log(palindrome("Tarek|keraT"))
    console.log(palin("Tarek|oookperaT"))