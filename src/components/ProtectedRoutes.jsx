import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TokenLayout = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/"); // kalau sudah login, lempar ke home
    } else {
      setChecked(true); // kalau belum login, boleh render children
    }
  }, [navigate]);

  if (!checked) return null; // kasih loading kecil kalau mau
  return <>{children}</>;
};

export const NoTokenLayout = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login"); // kalau belum login, lempar ke login
    } else {
      setChecked(true); // kalau ada token, boleh render children
    }
  }, [navigate]);

  if (!checked) return null;
  return <>{children}</>;
};