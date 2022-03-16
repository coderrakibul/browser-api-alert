// alert er kaj holo kono kicu inform korbe

alert("do you want to stay here")

const loadMore = () => {
    alert("do you want to visit more")
}

// confirm er kaj holo option debe ha othoba na bolar jonno
const tripDey = () => {
    const response = confirm("do you want to go to picnic");
    console.log(response);
    if(response === true){
        alert("tahole taka de");
    }
    else{
       alert("dure giye mor")
    }
}

// prompt er kaj holo input neya
const yourName = () => {
    const name = prompt("what is your name");
    if(name === true){
        console.log(name)
    }
   
}