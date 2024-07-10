import React, { useState } from 'react'


function Login() {
    let [singup,setSignup] = useState(false);

    let inputs = singup ?
    [{type:"email",text:"Email",},{type:"password",text:"Passowrd",},{type:"password",text:"Confirm Passowrd",}] 
    :
    [{type:"email",text:"Email",},{type:"password",text:"Passowrd",}];

    const signUp = ()=>{
        setSignup(true);

    }
    const login =()=>{
        setSignup(false);
    }
    const switcPage =()=>{
        setSignup(!singup);
    }



  return (
    <div className='bg-gradient-to-r from-pink-600 to-purple-600 h-screen font-popins py-20 px-2'>
        <div className='w-[280px] exsm:w-[320px] sm:w-[350px]  border m-auto bg-white px-3 flex flex-col gap-5 py-5 rounded-sm shadow-lg'>
            <div>
                <h1 className='text-center mt-10 text-2xl font-bold'>{singup ? "Signup" : "Login"}</h1>
            </div>

            <div className='w-full flex gap-1'>
                <div className='w-6/12'><button onClick={login} className={`w-full  py-2 rounded-[4px] transition-all duration-500 border ${singup ? "hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white" : "bg-gradient-to-r from-pink-600 to-purple-600 text-white"}`}>Login</button></div>
                <div className='w-6/12'><button onClick={signUp} className={`w-full py-2 rounded-[4px] ransition-all duration-500 border ${singup ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white" : "border hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white"}`}>Signup</button></div>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='flex flex-col gap-2'>
                {
                   inputs.map((e,i)=>{
                    return(
                        <div className='w-full border-[2px]' key={i}><input  className='w-full focus:outline-purple-600  py-1 px-2' type={e.type} placeholder={e.text}/></div>
                    )
                   })
                }
                </div>
                {!singup ? <p className='text-pink-600 hover:text-purple-600 text-sm cursor-pointer text-center hover:underline'>Forgot Password</p> : <></>}
            </div>

            <div className='w-full'>
                <button className='bg-gradient-to-r from-pink-600 to-purple-600 w-full py-2 text-white'>{singup ? "Signup" : "Login"}</button>
            </div>
            
            <div className='flex justify-center flex-col sm:flex-row'>
                <p className='text-center'>{singup ? "Already a member?" : "Not a member?"}</p>
                <div onClick={()=>switcPage()} className='text-pink-700 cursor-pointer text-center hover:text-purple-600'>{singup ? "Login Now" : "Signup Now"}</div>
            </div>
        </div>
    </div>
  )
}

export default Login