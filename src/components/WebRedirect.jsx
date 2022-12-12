import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const WebRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return <></>;
};

export default WebRedirect;
