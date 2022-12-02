import { Typography } from "@material-tailwind/react";
import { AuthModal } from "./components/AuthModal/AuthModal";
import { Button } from "@material-tailwind/react";
import { getAllUsers, getCurrentUser, refreshToken } from "./services/axios";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Strava } from "./pages/Strava";
import { DexCom } from "./pages/DexCom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} exact={true}>
          {/* <Route index element={<Layout />} /> */}
          <Route path="strava-redirect" element={<Strava />} />
          <Route path="dexcom-redirect" element={<DexCom />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  const allUser = () => {
    getAllUsers();
  };

  const currentUser = () => {
    getCurrentUser();
  };
  const refresh = () => {
    refreshToken();
  };
  return (
    <>
      <Outlet />

      <div className="bg-blue-gray-700 w-full h-screen p-5 flex flex-col ">
        <div className="relative grid place-items-center h-full ">
          <div className="-z-1 opacity-60 relative">
            <div className="bg-pink-200 blur-3xl h-[222px] w-[222px] absolute top-[10%] left-[20%]"></div>
            <div className="bg-cyan-300 blur-3xl h-[222px] w-[222px]  absolute top-[50%] left-[50%]"></div>
            <div className="bg-deep-purple-300 blur-3xl h-[222px] w-[222px] absolute top-[30%] left-[40%]"></div>
          </div>
          <Typography
            variant="h1"
            className="text-5xl md:text-7xl xl:text-9xl"
            color="blue-gray"
            textGradient
          >
            ....
          </Typography>
          <AuthModal />
          <div className="flex gap-2">
            <Button onClick={allUser}>All Users</Button>
            <Button onClick={currentUser}>Current User</Button>
            <Button onClick={refresh}>Refresh Token</Button>
          </div>
        </div>
      </div>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
