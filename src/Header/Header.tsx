import { Avatar, Indicator } from "@mantine/core";
import { IconAnchor, IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
 return <div className="w-full px-6 bg-mine-shaft-950 text-white h-24
  flex justify-between items-center gap-2
 " > 
  <div className="flex gap-1 items-center text-bright-sun-400">
   <IconAnchor 
    className="h-8 w-8" stroke={2.5}
   />
   <div className="text-3xl font-semibold">JobHook</div>
  </div>
  {NavLinks()}
  <div className="flex gap-5 items-center">
   <div className="flex items-center gap-2">
    <div>Marshal</div>
    <Avatar src="avatar.png" alt="it's me" />
   </div>
   <div className="bg-mine-shaft-800 p-1.5 rounded-full">
    <IconSettings stroke={1.5} />
   </div>
   <div className="bg-mine-shaft-800 p-1.5 rounded-full">
    <Indicator color="brightSun.4" offset={6} size={9} processing >
     <IconBell stroke={1.5} />
    </Indicator>
   </div>
  </div>
 </div>
}

export default Header;

// 01 : 35 : 47
