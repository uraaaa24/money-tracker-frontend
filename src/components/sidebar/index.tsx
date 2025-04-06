import { Button } from "@/components/ui/button"
import { navItems } from "@/constants/nav-items"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { LogIn } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 border-r bg-white p-4">
      <div className="flex items-center justify-between mb-6 h-10 px-2">
        <div className="text-xl font-bold leading-none">Money Tracker</div>
        <div className="flex items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SignInButton mode="modal">
                    <Button size="icon" variant="ghost" className="cursor-pointer">
                      <LogIn size={18} />
                    </Button>
                  </SignInButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sign in</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SignedOut>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 px-3 hover:bg-gray-100 cursor-pointer"
            >
              {item.icon}
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
