import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { ClaimCard } from "../components";
import { AuthContext } from "../context/AuthContext";
import requestHandler from "../hooks/requestHandler";

export default function VolunteerHome() {
    const { token }  = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(()=>{
      requestHandler('GET', '/volunteers', undefined, token)
      .then(res=>{
        if(!res.success) {
          navigate('/volunteer/login')
        }
      })
    },[])
    return(<>
        <ClaimCard/>
    </>)
}