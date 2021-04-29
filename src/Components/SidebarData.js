import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "AddStudent",
    path: "/add",
    icon: <BsIcons.BsFillPersonCheckFill />,
    cName: "nav-text",
  },
  {
    title: "UpdateStudent",
    path: "/update",
    icon: <BsIcons.BsFillPersonLinesFill />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <AiIcons.AiOutlineLogin />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: <FaIcons.FaRegistered />,
    cName: "nav-text",
  },
];
