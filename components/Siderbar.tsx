"use client";

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from "./Box";
import Library from "./Library";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
}

const Siderbar = ({ children }: SidebarProps) => {
  const pathname = usePathname()
  const routes = useMemo(() => [{
    icon: HiHome,
    path: pathname !== 'search',
    name: "Home",
    href: '/'
  }, {
    icon: BiSearch,
    path: pathname === 'search',
    name: "Search",
    href: '/search'
  }], [pathname])


  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-2 px-5 py-4">
            {
              routes.map((item) => (
                <SidebarItem key={item.name}{...item} />
              ))
            }
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  )
}

export default Siderbar