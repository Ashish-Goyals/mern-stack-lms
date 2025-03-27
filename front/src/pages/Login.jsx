import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "../features/api/authApi.js";

export default function Login() {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();

  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, formType) => {
    const { name, value } = e.target;

    if (formType === "login") {
      setLoginInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (formType === "registration") {
      setSignupInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "registration" ? signupInput : loginInput;
    const action = type === "registration" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData?.message || "SignUp Successfully");
      setSignupInput({
        name: "",
        email: "",
        password: "",
      });
    }
    if (registerError) {
      toast.error(registerError?.data?.message || "Signup Failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData?.message || "Login Successfully");

      setLoginInput({
        email: "",
        password: "",
      });
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError?.data?.message || "Login Failed");
    }
  }, [
    loginIsSuccess,
    registerIsSuccess,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);

  return (
    <div className="flex justify-center mt-20">
      <Tabs defaultValue="login" className="w-[400px] justify-content-center">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="registration">Registration</TabsTrigger>
        </TabsList>

        {/* Login Form */}
        <TabsContent value="login">
          <Card>
            <CardHeader className="text-left">
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-left block">
                  Email
                </Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="lms@gmail.com"
                  value={loginInput.email}
                  onChange={(e) => changeInputHandler(e, "login")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="text-left block">
                  Password
                </Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="xyz...."
                  value={loginInput.password}
                  onChange={(e) => changeInputHandler(e, "login")}
                />
              </div>
            </CardContent>
            <CardFooter className="text-left">
              <Button
                disabled={loginIsLoading}
                onClick={() => {
                  handleRegistration("login");
                }}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please Wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Registration Form */}
        <TabsContent value="registration">
          <Card>
            <CardHeader className="text-left">
              <CardTitle>Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-left block">
                  Name
                </Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="Krishu"
                  value={signupInput.name}
                  onChange={(e) => changeInputHandler(e, "registration")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="text-left block">
                  Email
                </Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="abc@gmail.com"
                  value={signupInput.email}
                  onChange={(e) => changeInputHandler(e, "registration")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="text-left block">
                  Password
                </Label>
                <Input
                  name="password"
                  type="password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHandler(e, "registration")}
                />
              </div>
            </CardContent>
            <CardFooter className="text-left">
              <Button
                disabled={registerIsLoading}
                onClick={() => {
                  handleRegistration("registration");
                }}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please Wait
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
