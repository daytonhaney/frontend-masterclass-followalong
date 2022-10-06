export default function bs_list(haystack: number[], needle: number): boolean {
    
    let low = 0;
    let high = haystack.length;

    do{
        const m = Math.floor(low + (high - low )/ 2); // m = midpoint of needle 
        const v = haystack[m]; 
        
        if (v == needle){ // if value == needle , midpoint is found
            return true; 
        } else if (v > needle ){  // value is greater than needle... 
            high = m;
        } else {
          low = m + 1; // dropping the midpoint (exclude right "high " side )
    }  
        
    }while (low < high);
       return false
}

