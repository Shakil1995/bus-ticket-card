
// document.getElementById("class-plusBtn").addEventListener("click",function(){

//     handleFirstClassTicket(true);
// //   const  firstClassInput=document.getElementById('firstClassInputID');
// //   const firstClassInputValue=parseInt(firstClassInput.value);
// // const firstClassNewCount=firstClassInputValue +1;
// // //   console.log("update :"+ firstClassNewCount);

// //  firstClassInput.value=firstClassNewCount;
// // //  console.log(firstClassNewCount);

// // const firstClassTotalPrice=firstClassNewCount*150;
// // document.getElementById("ticket-price").innerText="$"+ firstClassTotalPrice;

// });

// document.getElementById("class-minusBtn").addEventListener("click",function(){
//     handleFirstClassTicket(false)
// //     const  firstClassInput=document.getElementById('firstClassInputID');
// //     const firstClassInputValue=parseInt(firstClassInput.value);
// //   const firstClassNewCount=firstClassInputValue -1;
// //   //   console.log("update :"+ firstClassNewCount);
  
// //    firstClassInput.value=firstClassNewCount;
// //   //  console.log(firstClassNewCount);
  
// //   const firstClassTotalPrice=firstClassNewCount*150;
// //   document.getElementById("ticket-price").innerText="$"+ firstClassTotalPrice;
  
//   });



  document.getElementById("class-plusBtn").addEventListener("click",function(){
 handleFirstClassTicket(true);
});
document.getElementById("class-minusBtn").addEventListener("click",function(){
    handleFirstClassTicket(false)
});


document.getElementById("economy-plusBtn").addEventListener("click",function(){
 handleEconomyClassTicket(true);
});
document.getElementById("economy-minusBtn").addEventListener("click",function(){
    handleEconomyClassTicket(false)
  });






  function handleFirstClassTicket(isIncrease){

        const  firstClassInput=document.getElementById('firstClassInputID');
        const firstClassInputValue=parseInt(firstClassInput.value);

        //  const firstClassNewCount=firstClassInputValue +1;
        let firstClassNewCount=firstClassInputValue;

        if(isIncrease==true   ){
            firstClassNewCount=firstClassInputValue+1;
        }
        if(isIncrease==false && firstClassInputValue>0){
            firstClassNewCount=firstClassInputValue-1;
        }
        
         firstClassInput.value=firstClassNewCount;
        const firstClassTotalPrice=firstClassNewCount*1199;
     document.getElementById("ticket-price").innerText="৳"+ firstClassTotalPrice;

     calculateTotal()
  } 


  function handleEconomyClassTicket(isIncrease){

        const  economyClassInput=document.getElementById('economyInputID');
        const economyClassInputValue=parseInt(economyClassInput.value);

        //  const firstClassNewCount=firstClassInputValue +1;
        let economyClassNewCount=economyClassInputValue;

        if(isIncrease==true){
            economyClassNewCount=economyClassInputValue+1;
        }
        if(isIncrease==false && economyClassInputValue>0){
            economyClassNewCount=economyClassInputValue-1;
        }
        
        economyClassInput.value=economyClassNewCount;
        const economyClassTotalPrice=economyClassNewCount*999;
     document.getElementById("economy-ticket-priceID").innerText="৳"+ economyClassTotalPrice;

     calculateTotal()
  } 


  function calculateTotal(){
       const firstClassticket= document.getElementById("firstClassInputID");
       const firstClassPrice=parseInt(firstClassticket.value);

       const economyClassticket= document.getElementById("economyInputID");
       const economyClassPrice=parseInt(economyClassticket.value);

       const subTotalPrice=firstClassPrice*1199 +economyClassPrice*999;
       document.getElementById("subTotalPrice").innerText="৳"+subTotalPrice;


       const tax=Math.ceil(subTotalPrice *0.1);
       document.getElementById("tax-amountID").innerText="৳" +tax;

       const totalAmount=subTotalPrice+tax;

       document.getElementById("total-amountID").innerText="৳"+totalAmount;
       
  }




 