import { useState,useEffect } from "react";
import { useAuth } from "../../context/authcontext";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminPrivateRoute(){
    const [ok,setok]=useState(false)
    const [auth,setauth]=useAuth()

    useEffect(()=>{
        const authCheck =async()=>{
            const res=await axios.get("http://localhost:8080/admin-auth")
            if(res.data.ok){
                setok(true)
            }
            else{
                setok(false)
            }
        }
        if(auth?.token)authCheck()
    },[auth?.token])
    return ok ? <Outlet/>:<Spinner />
}