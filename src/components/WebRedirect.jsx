import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WebRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, [navigate]);
  return <></>;
};

export default WebRedirect;
