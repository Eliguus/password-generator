
const passwordGenerator = (input) => {
    const small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const sym = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '=', '<', '>', '?', '_', '~']
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    var password = ''

    const amount = Math.floor(input/4)

    for (i=0; i<amount;i++){
        const n = small.length
        const idx = Math.floor(Math.random() * (n + 1));
        password+=small[idx]
        input-=1

    }

    for (i=0; i<amount;i++){
        const n = capital.length
        const idx = Math.floor(Math.random() * (n + 1));
        password+=capital[idx]
        input-=1
        
    }

    for (i=0; i<amount;i++){
        const n = sym.length
        const idx = Math.floor(Math.random() * (n + 1));
        password+=sym[idx]
        input-=1
        
    }

    for (i=0; i<amount;i++){
        const n = num.length
        const idx = Math.floor(Math.random() * (n + 1));
        password+=num[idx]
        input-=1
        
    }
    if (input>0){
        for (input;input>0;input--){
            const n = small.length
            const idx = Math.floor(Math.random() * (n + 1));
            password+=small[idx]
            
    
        }

    }
    console.log(password)
    const test = randomizeString(password)
    console.log(test)
    document.getElementById('a').innerHTML = test
    return password


}


function randomizeString(str) {
    var strArray = str.split(""); 
    var randomizedArray = shuffleArray(strArray); 
    var randomizedString = randomizedArray.join(""); 
    
    return randomizedString;
  }
  
  function shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    
    while (currentIndex !== 0) {
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
    
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    return array;
  }




const checker = () => {
    const input=document.getElementById("inputs").value

    const small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const sym = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '=', '<', '>', '?', '_', '~']
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


    var Csmall = 0
    var Ccap = 0
    var Cnum = 0
    var Csym = 0

    for (var i=0; i<input.length; i++){
            if (small.includes(input[i])) {
                Csmall+=1
          } else if (capital.includes(input[i])) {
            Ccap+=1
          } else if (num.includes(input[i])) {
            Cnum+=1
          } else if (sym.includes(input[i])) {
            Csym+=1
          } 
    }
    var vari = [Csmall,Ccap,Cnum,Csym]
    console.log(vari)
    var com = 1
    if (Csmall!=0){
      com*=(26**Csmall)
    }

    if (Ccap!=0){
      com*=(26**Ccap)
    }

    if (Cnum!=0){
      com*=(10**Cnum)
    }
    if (Csym!=0){
      com*=(15**Csym)
    }

    var time = (com/10)/2
    if (3600*24>=time>3600){
      document.getElementById('password').innerText = `${time/3600} hours`
    }
    
    else if (3600*24*30>time>3600*24){
      document.getElementById('password').innerText = `${time/(3600*24)} days`
    }
    else if (time<=3600){
      document.getElementById('password').innerText = `${time} seconds`
    }

    else if (3600*24*30*12>time>=3600*24*30){
      document.getElementById('password').innerText = `${time/(3600*24*30)} months`

    }
    else{
      document.getElementById('password').innerText = `${time/(3600*24*30*12)} years`
    }


    console.log(time)
    return

}

// document.getElementById("inputs").onchange = checker

//this is where the length is inputed
const temp = passwordGenerator(9)
var randomizedString = randomizeString(temp);

console.log(randomizedString);

// checker(temp)
