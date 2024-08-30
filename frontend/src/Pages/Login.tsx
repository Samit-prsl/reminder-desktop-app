import { useState } from "react";
import Component from "../Components/Auth/Main";
import { auth } from "@/@types/auth";
import useAuth from "@/Hooks/useAuth";
import { useToast } from "@/Components/ui/use-toast";

const Login = () => {
  const { req, res, error } = useAuth();
  const { toast } = useToast();
  const [data, setData] = useState<auth>({
    email: "",
    password: "",
  });
  const handleSubmit = async (data: auth) => {
    await req("login", data);
    if (!error) {
      localStorage.setItem("token", res?.token);
      return toast({
        title: "✅ Successfully Logged In!",
        className: " bg-gray-200 font-[Quicksand] rounded-xl",
      });
    }
  };
  return (
    <div>
      <Component
        context="Login"
        Data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
