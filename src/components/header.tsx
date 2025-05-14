import { useTheme } from "@/context/theme-provider"
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom"
import CitySearch from "./city-search";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
  return (
    <header className="flex sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4">
            <div className="flex-shrink-0 mr-4">
                <Link to={"/"}>
                <img
                 src={isDark ? "/logo.png" : "/logo2.png"}
                 alt="Klimate logo"
                 className="h-10 md:h-12 lg:h-14"
                />
                </Link>
            </div>
       
            <div className="flex gap-2 md:gap-4 ml-auto items-center">
                {/* search */}
                <div className="flex-grow max-w-md">
                    <CitySearch />
                </div>
                {/* theme toggle */}
                <div 
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    className={`flex items-center cursor-pointer transition-transform duration-500 flex-shrink-0 ${isDark ? "rotate-180" : "rotate-0"}`}
                >
                    {isDark ? (
                        <Sun className="h-5 w-5 md:h-6 md:w-6 text-yellow-500 rotate-0 transition-all" />
                    ) : (
                        <Moon className="h-5 w-5 md:h-6 md:w-6 text-blue-500 rotate-0 transition-all" />
                    )}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header