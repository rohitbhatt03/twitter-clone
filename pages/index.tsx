import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci"
import { FiUsers } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import React from "react";



interface xsidebarbutton{
  title: string;
  icon: React.ReactNode;
}

const sidebarmenuitems: xsidebarbutton[] = [
  {
    title:"Home",
    icon:<AiFillHome />,
  },
  {
    title:"Explore",
    icon:<IoIosSearch />,
  },
  {
    title:"Notifications",
    icon:< IoMdNotificationsOutline/>,
  },
  {
    title:"Message",
    icon:<CiMail />,
  },
  {
    title:"Bookmarks",
    icon:<PiBookmarkSimpleThin />,
  },
  {
    title:"Communities",
    icon:<FiUsers />,
  },
  {
    title:"Premium",
    icon:<BsTwitterX/>,
  },
  {
    title:"Verified Orgs",
    icon:<BsLightning />,
  },
  {
    title:"Profile",
    icon:<CiUser />,
  },
  {
    title:"More",
    icon:<CgMoreO />,
  },


];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen  px-56">
      {/* Left Sidebar - No Scroll */}
      <div className="col-span-3 pt-2 ml-35">
        <div className="text-1xl h-fit hover:bg-gray-900 rounded-full w-fit p-2 cursor-pointer transition-all">
          <BsTwitterX />
        </div>
        <div className="mt-2 text-1xl font-semibold pr-4">
          <ul>
            {sidebarmenuitems.map((item) => (
              <li
                className="flex justify-start items-center gap-4 hover:bg-gray-900 rounded-full cursor-pointer transition-all px-3 py-3 w-fit"
                key={item.title}
              >
                <span className="text-2xl">{item.icon}</span>
                <span >{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 pr-10">
            <button className="bg-[#1d9bf0] font-semibold text-lg p-3 rounded-full w-full hover:bg-[#49acee]">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Middle Content */}
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-700"></div>

      {/* Right Sidebar */}
      <div className="col-span-3"></div>
    </div>
  );
}
