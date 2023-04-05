import React ,{ useState,useEffect } from 'react';
import CheckoutCard from './CheckoutCard';
import ItemList from './ItemList';
import products from './data/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemPage from './ItemPage';
import NavUser from './NavUser';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';


function App() {
 

  const [userList,setUserList]=useState([])
  const [selectId,setselectId]=useState(0)
  const [userId,setUserId]=useState()
  const [user,setUser]=useState({
    username:'',
    password:''
  })
  const [isLogin,setIsLogin]=useState(false)
 
  const navigate= useNavigate()

  useEffect(()=>{
    isLogin&&handlelistUpdate(userId)
  },[userList])  // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = async (e) => {
    e.preventDefault();
    let response = await fetch('https://642af77400dfa3b54753ac12.mockapi.io/userinfo',{
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    if(response.status!==200){
        alert("We have an issue now. Please try again later");
        return;
    }
    let data = await response.json();
   
    let correctuser = data.find((userInfo) => (userInfo.username === user.username )&&( userInfo.password===user.password));
    if (correctuser) {
        setIsLogin(true);
        setUserId(correctuser.id)

        correctuser.list.length>0 ? setUserList(()=>{  
          let newList=[...correctuser.list]
          userList.forEach((item)=>{
          let search=newList.find((x)=>x[0].id===item[0].id)
          if(!search){
            newList.push(item)
            
          }
          
          else if(search){
            const index=newList.indexOf(search)
            newList[index][1]=item[1]
           
          }
        })
          return newList
        }
          ): handlelistUpdate(correctuser.id);
        ;
        navigate("/");
    } 
    else {
        alert("Wrong username or password");
    }
    return;
  };

  const handleChange=(e)=>{
    e.preventDefault()
    
    const {name,value}=e.target
    setUser((preV)=>{
      return {...preV,[name]:value}
    })
  }

  const handleLogout=()=>{
    setIsLogin(false)
    setUser({
      username:'',
      password:''
    })
    setUserList([])
    navigate('/')
    window.location.reload()
  }


  const itemNavigate=(id)=>{
    setselectId(id)
  }

  const handleIncrement=(id)=>{
    const product=products.find((item)=>item.id===id)
    if(userList.length===0 || userList.every((item)=>item[0].id!==id)){
      
      alert ('Item added to cart')
      setUserList([...userList,[product,1]])
      return
    }
    const x=userList.find((item)=>item[0].id===id)
    const index=userList.indexOf(x)
    const newList=[...userList]
    if(newList[index][1]<Number(product.stok)){
      newList[index][1]=newList[index][1]+1
    }
    else if(newList[index][1]===Number(product.stok)){
      alert ('Stok is full')
      return
    }
    setUserList(newList)
  }

  const handleDecrement=(id)=>{
    const x=userList.find((item)=>item[0].id===id)
    const index=userList.indexOf(x)
    const newList=[...userList]
    if(newList[index][1]>1)
    {
      newList[index][1]=newList[index][1]-1
      
    }
    else if(newList[index][1]===1){
      alert ('Item removed from cart')
      newList.splice(index,1)
      
    }
    setUserList(newList)
  }

  const handlelistUpdate=(id)=>{
    fetch(`https://642af77400dfa3b54753ac12.mockapi.io/userinfo/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        list:userList
      })
    })
  }

  const handleAddToCart=(id,quantity)=>{ 
    const x=userList.find((item)=>item[0].id===id)
     if(x){
        handleIncrement(id)
          return
        }
      
      else if(quantity!==1&&!x){
        handleQuantity(id,quantity)
        return
      }
      else if(quantity===1&&!x){
      const product=products.find((item)=>item.id===id)
      setUserList([...userList,[product,1]])
    }
  }

  const handleQuantity=(id,quantity)=>{
    quantity=Number(quantity)
    const y=userList.find((item)=>item[0].id===id)
    const stock=products.find((item)=>item.id===id).stok
    if(quantity>stock){
      alert('Stok is not enough')
      return
    }
    else if(y){
      
      if(quantity===0){
        handleDelete(id)
        return
      }
      else if(quantity<=stock && quantity>0){
      const index=userList.indexOf(y)
      const newList=[...userList]
      newList[index][1]=quantity
      setUserList(newList)
      return
    }
  }
    else if(!y){
      const product=products.find((item)=>item.id===id)
      const newList=[...userList,[product,quantity]]
      console.log(newList)
      setUserList(newList)
      return
    }
  }

  const handleDelete=(id)=>{ 
    const x=userList.find((item)=>item[0].id===id)
    const index=userList.indexOf(x)
    const newList=[...userList]
    newList.splice(index,1)
    setUserList(newList)
  }

  return (
    <>
    
    <NavUser handleLogout={handleLogout} logininfo={isLogin} username={user.username}list={userList}/>
    
    <Routes>
      <Route path="/" element={<ItemList handleAddToCart={handleAddToCart}  itemNavigate={itemNavigate}/>}/>
      <Route path= {`/item/:${selectId}`} element={<ItemPage list={userList}  handleQuantity={handleQuantity} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleAddToCart={handleAddToCart} selectId={selectId}/>}/>
      <Route path="/checkout" element={<CheckoutCard handleDelete={handleDelete} list={userList} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>}/>
      <Route path="/signin" element={<Login 
        handleChange={handleChange}  
        validateUser={handleLogin}
        />}/>
      <Route path='/signup' element={<Register/>}/>
    </Routes>
    
  
    

    
    </>
  );
}

export default App;
 