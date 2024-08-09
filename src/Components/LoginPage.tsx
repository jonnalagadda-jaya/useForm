import { Hand } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }
  return (
    <div>
      <div className="bg-slate-100 w-full h-4/6 pt-10 rounded-md flex items-center flex-col leading-9 ml-32 mt-32 border-2 border-indigo-600">
        <div>
          <img
            src="https://lh4.googleusercontent.com/proxy/OT_f3ON45Y3u68YQjVZDUBhmePN3GOi94_k8GX8ra1AncZqRKHYe24bPa4b19kQnQtAa4TmLaHctyf9zbUyZW5pKgg"
            className="w-7 h-7"
          ></img>
        </div>
        <h1>Welcome Back</h1>
        <div className="flex justify-center flex-row">
          <p className="flex-col">
            <span className="flex"> Glad to see you again{<Hand />}</span> Login
            to your account below
          </p>
        </div>
        <div className="flex w-5/6">
          <div className="text-center w-full border border-slate-600 rounded-md">
            Continue with Google
          </div>
        </div>
        <div className="flex w-full items-start flex-col">
          <label className="pl-9" htmlFor="email">
            Email
          </label>
          <div className="w-full flex justify-center">
            <input
              {...register("email")}
              placeholder="enter..."
              className="flex items-center w-5/6 pl-2 border border-slate-600 rounded-md"
            />
          </div>
        </div>
        <div className="flex w-full items-start flex-col">
          <label className="pl-9" htmlFor="password"> Password</label>
          <div className="w-full flex justify-center">
            <input
              {...register("password")}
              placeholder="enter..."
              className=" flex items-center pl-2 w-5/6 border border-slate-600 rounded-md"
            />
          </div>
        </div>
        <div className="flex w-5/6">
          <button
            className="border border-slate-600 rounded-md w-full mt-5"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </button>
        </div>
        <p className="text-center">Dont't have an account?Sign up for Free</p>
      </div>
    </div>
  );
}

export default LoginPage;
