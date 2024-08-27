import {
  AutoAwesome,
  Brush,
  ChatBubble,
  Home,
  MoreHoriz,
  MoreHorizOutlined,
  Notifications,
  PeopleAlt,
  Person2Rounded,
  Search,
  VerifiedOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { users } from "../db/seed";
const NavButtons = [
  {
    text: "Home",
    icon: <Home />,
  },
  {
    text: "Explore",
    icon: <Search />,
  },
  {
    text: "Notifications",
    icon: <Notifications />,
  },
  {
    text: "Messages",
    icon: <ChatBubble />,
  },
  {
    text: "Grok",
    icon: <AutoAwesome />,
  },
  {
    text: "Communities",
    icon: <PeopleAlt />,
  },
  {
    text: "Premium",
    icon: <VerifiedOutlined />,
  },
  {
    text: "Profile",
    icon: <Person2Rounded />,
  },
  {
    text: "More",
    icon: <MoreHoriz />,
  },
];

function SideNav(): React.ReactNode {
  return (
    <nav>
      <div className="flex items-center justify-start px-4 py-3">
        <svg
          className="size-8"
          viewBox="0 0 29 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.9 36V33.35L19.2 2.95H2.5V0.299998H28.55V2.95L10.6 33.35H28.05V36H0.9ZM3.9 33.35H7.55L25.65 2.95H22.1L3.9 33.35Z"
            fill="black"
          />
        </svg>
      </div>
      <ul className="flex flex-col items-start justify-center gap-1">
        {NavButtons.map((button, index) => (
          <li
            key={index}
            className="flex w-16 items-center justify-start gap-3 rounded-3xl px-4 py-3 hover:bg-gray-100 hover:text-blue-500 active:bg-blue-100 active:text-blue-500 lg:w-36"
          >
            {button.icon}
            {<span className={`hidden lg:block`}>{button.text}</span>}
          </li>
        ))}
        <li className="mx-auto mt-2 flex items-center justify-center self-start rounded-full bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 lg:m-0 lg:w-4/5">
          <span className="block lg:hidden">
            <Brush />
          </span>
          <span className="hidden lg:block">Post</span>
        </li>
      </ul>
      <div className="mt-8 flex w-4/5 items-center justify-start gap-2 rounded-3xl px-4 py-2 hover:bg-gray-200">
        <Avatar
          sx={{ bgcolor: "#3b82f6 " }}
          src={users[0].avatar}
          alt={users[0].name}
        />
        <div className="hidden flex-col items-start justify-start lg:flex">
          <span className="text-base font-semibold tracking-tight">
            Koushal
          </span>
          <span className="text-xs font-semibold text-gray-500">
            @koushal_pro
          </span>
        </div>
        <div className="hidden lg:block">
          <MoreHorizOutlined />
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
