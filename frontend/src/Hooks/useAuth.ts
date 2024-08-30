import { useState } from "react";
import API from "../Utils/api-requests";
import { auth } from "@/@types/auth";

const useAuth = () => {
  const [res, setRes] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const req = async (context: string, body: auth) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.auth(`auth/${context}`, body);
      setRes(response);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { res, loading, error, req };
};

export default useAuth;
