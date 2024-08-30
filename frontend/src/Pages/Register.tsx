import { useState } from "react";
import Component from "../Components/Auth/Main";
import { auth } from "@/@types/auth";
import useAuth from "@/Hooks/useAuth";
import { useToast } from "@/Components/ui/use-toast";

const Register = () => {
  const { req, res, error } = useAuth();
  const { toast } = useToast();
  const [data, setData] = useState<auth>({
    email: "",
    password: "",
  });
  const handleSubmit = async (data: auth) => {
    await req("register", data);
    if (!error) {
      localStorage.setItem("token", res?.token);
      return toast({
        title: "✅ Successfully Registered!",
        className: " bg-gray-200 font-[Quicksand] rounded-xl",
      });
    }
  };
  return (
    <div>
      <Component
        context="Register"
        Data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;
