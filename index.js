const countValue = document.querySelector('#counter');

console.log("hello ji")

const increment = () => {
        // get the value from Ui
    let value = parseInt(countValue.innerText);
      
        // update the value 
        value = value + 1;

          //set the value onto UI
        countValue.innerText = value;                  

};



const decrement = () => {
       // get the value from Ui
    let value = parseInt(countValue.innerText);

      // update the value 
    value = value - 1;
        
     //set the value onto UI
    countValue.innerText = value;
}