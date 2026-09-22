
import { IoPeople, IoSettings, IoFlash } from "react-icons/io5";
import { MdStickyNote2 } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { MdDashboard } from "react-icons/md"; // Added an icon for the core dashboard link if needed

export const navLinks = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: MdDashboard, 
  },
  {
    id: 2,
    title: "Report",
    path: "report",
    icon: IoMdTrendingUp,
  },
  {
    id: 3,
    title: "Library",
    path: "library",
    icon: IoFlash,
  },
  {
    id: 4,
    title: "People",
    path: "people",
    icon: IoPeople,
  },
  {
    id: 5,
    title: "Activities",
    path: "activities",
    icon: MdStickyNote2,
  },
  {
    id: 6,
    title: "Get Started",
    path: "getstarted",
    icon: FaLightbulb,
  },
  {
    id: 7,
    title: "Settings",
    path: "settings",
    icon: IoSettings,
  },
];

// import { IoPeople, IoSettings, IoFlash } from "react-icons/io5";
// import { MdStickyNote2 } from "react-icons/md";
// import { FaLightbulb } from "react-icons/fa";
// import { IoMdTrendingUp } from "react-icons/io";

// export const mainNavLinks = [
//   { id: 1, title: "Reports", path: "report", icon: IoMdTrendingUp },
//   { id: 2, title: "Library", path: "library", icon: IoFlash },
//   { id: 3, title: "People", path: "people", icon: IoPeople },
//   { id: 4, title: "Activities", path: "activities", icon: MdStickyNote2 },
// ];

// export const supportNavLinks = [
//   { id: 5, title: "Get Started", path: "getstarted", icon: FaLightbulb },
//   { id: 6, title: "Settings", path: "settings", icon: IoSettings },
// ];