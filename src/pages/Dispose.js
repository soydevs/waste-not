import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { History, Items, Navbar, Requests } from "../components";
import { AuthContext } from "../context/AuthContext";
import requestHandler from "../hooks/requestHandler";

const Dispose = () => {
  const { token }  = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(()=>{
    requestHandler('GET', '/users', undefined, token)
    .then(res=>{
      console.log(res)
      if(!res.success) {
        navigate('/login')
      }
    }).catch(()=>{
      navigate('/login')
    })
  },[token])
  return (
    <>
    <Navbar/>
      <Items/>
      <History/>
      <Requests/>
    </>
  );
};

export default Dispose;
