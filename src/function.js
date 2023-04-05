export   const calculateTotal=(list)=>{
    const calculatePrice = x => {
      return x.split('.').join('').replace(',', '.')
    }
    let total=0
    list.forEach((item)=>{
      total=total+(parseFloat(calculatePrice(item[0].price))*item[1])
    })
    return total
  }

 export   const findquantity=(list,id)=>{
    const x=list.find((item)=>item[0].id===id)
    if(x){
      return x[1]
    }
    else{
      return 0
    }
  }
 