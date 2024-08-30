import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { authprops } from "@/@types/auth";

const Main: React.FC<authprops> = ({
  context,
  Data,
  setData,
  handleSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 via-slate-800 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[350px] shadow-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-100 font-[Quicksand]">
              {context == "Login" ? "Welcome back" : "Set up an account"}
            </CardTitle>
            <CardDescription className="text-center text-gray-400 font-[Quicksand]">
              {context == "Login" ? "Login to your account" : "Signup here"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200 font-[Roboto]">
                  Email
                </Label>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={Data.email}
                    onChange={(e) =>
                      setData({ ...Data, email: e.target.value })
                    }
                    required
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-xl placeholder-gray-400 text-gray-100 font-[Roboto]"
                  />
                </motion.div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-gray-200 font-[Roboto]"
                >
                  Password
                </Label>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={Data.password}
                    onChange={(e) =>
                      setData({ ...Data, password: e.target.value })
                    }
                    required
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 placeholder-gray-400 text-gray-100 pr-10 font-[Roboto] rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </motion.div>
              </div>
            </div>
            <CardFooter className="flex justify-center mt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-200 font-[Quicksand]"
                  onClick={() => handleSubmit(Data)}
                >
                  {context}
                </Button>
              </motion.div>
            </CardFooter>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Main;
