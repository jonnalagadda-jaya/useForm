import { useForm } from "react-hook-form";

interface FormValues {
  fullname: "string";
  email: "string";
  dateofbirth: number;
  phonenumber: number;
  nationality: "string";
  idtype: "string";
  password: any;
  confirmpassword: any;
}
function SignupPage() {
  const { register, formState, handleSubmit, setError } = useForm<FormValues>();
  const { errors } = formState;

  function onSubmit(data: any) {
    console.log(data);
  }
  function onSubmitClear() {
    const fieldsToClear = [
      "fullname",
      "email",
      "dateofbirth",
      "phonenumber",
      "nationality",
      "idtype",
      "password",
      "confirmpassword"
    ];
    for (var i = 0; i < fieldsToClear.length; i++) {
      setError(fieldsToClear[i], {
        type: "custom",
        message: ""
      })
    }
  }
  return (
    <div>
      <div className="flex flex-col ml-14 mt-32 w-full min-h-lvh bg-slate-100 pl-10 pt-10 rounded-md leading-9 border-2 border-indigo-600">
        <img
          src="https://lh4.googleusercontent.com/proxy/OT_f3ON45Y3u68YQjVZDUBhmePN3GOi94_k8GX8ra1AncZqRKHYe24bPa4b19kQnQtAa4TmLaHctyf9zbUyZW5pKgg"
          className="w-7 h-7"
        ></img>
        <p className="text-2xl font-semibold">Sign Up</p>
        <p>Enter your details below to create your account and get started</p>
        <div className="flex">
          <div>
            <label htmlFor="fullname"> Full Name</label>
            <input
              {...register("fullname", {
                required: "Full name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Invalid Username",
                },
              })}
              placeholder="enter..."
              className=" flex pl-2 border border-slate-600 w-64 rounded-md"
            />
            <p className="error text-red-600">{errors.fullname?.message}</p>
          </div>
          <div className="ml-3">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email formate",
                },
              })}
              placeholder="example@gmail.com"
              className="flex pl-2 border border-slate-600 w-64 rounded-md"
            />
            <p className="error text-red-600">{errors.email?.message}</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <label htmlFor="dateofbirth">Date of Birth</label>
            <input
              {...register("dateofbirth")}
              placeholder="MM/DD/YY"
              type="date"
              className=" flex pl-2 border border-slate-600 w-64 rounded-md"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              {...register("phonenumber", {
                required: "Number is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Only numbers are allowed",
                },
              })}
              placeholder="+45 1344-343"
              type="text"
              className="flex pl-2 border border-slate-600 w-64 rounded-md"
            />
            <p className="error text-red-600">{errors.phonenumber?.message}</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <label htmlFor="nationality">Nationality</label>
            <input
              {...register("nationality")}
              className=" flex pl-2 border border-slate-600 w-64 rounded-md"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="idtype">ID Type</label>
            <select
              className=" flex pl-2 w-64 border border-slate-600 rounded-md h-10"
              {...register("idtype", { required: "Id Type is required" })}
            >
              <option value="">Select</option>
              <option value="A">Adhar</option>
              <option value="B">Pan</option>
              <option value="B">Voter</option>
              <option value="B">Passport</option>
            </select>
            <p className="error text-red-600">{errors.idtype?.message}</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: "Create Password" })}
              placeholder="enter..."
              className=" flex pl-2 border border-slate-600 w-64 rounded-md"
            />
            <p className="error text-red-600">{errors.password?.message}</p>
          </div>
          <div className="ml-3">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              {...register("confirmpassword", {
                required: "Confirm your Password",
              })}
              placeholder="enter..."
              className="flex pl-2 border border-slate-600 w-64 rounded-md"
            />
            <p className="error text-red-600">
              {errors.confirmpassword?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <button
            className="border border-slate-600 w-64 rounded-md mt-7"
            onClick={()=>onSubmitClear()}
            // onClick={()=>{onSubmitClear}}
          >
            Clear
          </button>
          <button
            className="border border-slate-600 w-64 rounded-md mt-7 ml-3"
            onClick={handleSubmit(onSubmit)}
          >
            Confirm
          </button>
        </div>
        <p className="mt-7 text-center">Already have an account? Login</p>
      </div>
    </div>
  );
}

export default SignupPage;
