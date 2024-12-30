import React, { useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

function Sidebar() {
  const { email } = useParams();
  const { setToken } = useContext(UserContext);
  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <div className="w-[20vw] border-r h-[90vh] fixed flex flex-col justify-start gap-4 items-center">
      <div className="flex flex-col  justify-start items-center w-full p-4 border-b">
        <img
          width={"150px"}
          height={"150px"}
          className="bg-[#EAD5E0] shadow-lg border-2 border-[var(--pink--)]  rounded-full"
          src="https://cdn2.iconfinder.com/data/icons/male-avatars/512/avatars_accounts___man_male_people_person_beard_round_glasses_glasses_turtleneck_jacket.png"
          alt=""
        />
        <p className="font-bold text-sm">{email}</p>
      </div>
      <button className="border-[var(--pink--)] hover:border-b-8 transition-all duration-200">
        Dashboard
      </button>
      <button
        className="border-[var(--pink--)]  hover:border-b-8 transition-all duration-200"
        onClick={Logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
