import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";

async function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white border-b border-gray-200">
      {/* Left side*/}
      <div>
        <Link href="/">
          <h2>Creator Site</h2>
        </Link>
      </div>
      {/* Right side */}
      <div className="flex items-center p-4 gap-2">
        <SignedIn>
          <UserButton></UserButton>
          <ModeToggle />
        </SignedIn>
        <SignedOut>
          <Button
            asChild
            variant="outline"
            className="px-4 py-2 text-white rounded-lg bg-red-500"
          >
            <div>
              <SignInButton mode="modal" />
              <HeartIcon className="w-4 h-4 mr-2" />
            </div>
          </Button>
        </SignedOut>

        <ModeToggle />
      </div>
    </header>
  );
}
export default Header;
