// import LoginPage from "./Components/LoginPage";
// import SignupPage from "./Components/SignupPage";

import { getData } from "./Components/api";

function App() {
  const [data, setData] useState("")
  const data = getData();
  return (
    <>
    {/* <div className="flex w-full border-2 border-indigo-600">
     <SignupPage />
     <LoginPage />
     </div> */}
      {
        data?.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))
      }
    </>
  )
}

export default App;
