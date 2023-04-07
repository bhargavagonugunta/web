import { useState } from "react";

const Login = ()=>{
    const [Username , setUsername]= useState("") 

    return(
        <div className="bg-blue-300">
            <div>
                <h2>USER NAME</h2>
                <h1>{Username}</h1>
                <input className="w-[200px] bg-gray-100 rounded-lg shadow-2xl" placeholder="User Name" value={Username} onChange={(e)=>setUsername(e.target.value)}/>
                <h2>PASSWORD</h2>
                <input className="w-[200px] bg-gray-100 rounded-lg shadow-2xl" placeholder="Password" />
                <option>hello</option>
                <button className=" w-[100px] rounded-xl bg-blue-500 ">Login</button>
            </div>

        </div>

    )
}
export default Login;
