import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import IconHoverEffect from "./IconHoverEffect";
import { VscAccount, VscHome, VscSignIn, VscSignOut } from "react-icons/vsc";

export default function SideNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-center gap-2 whitespace-nowrap md:items-end">
        <li>
          <Link href="/"></Link>
          <IconHoverEffect>
            <span className="flex items-center gap-4">
              <VscHome className="h-6 w-6" />
              <span className="hidden text-lg md:inline">Home</span>
            </span>
          </IconHoverEffect>
        </li>

        {user != null && (
          <li>
            <Link href={`/profiles/${user?.id}`}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscAccount className="h-5 w-5" />
                  <span className="hidden text-lg md:inline">Profile</span>
                </span>
              </IconHoverEffect>
            </Link>
          </li>
        )}
        {user == null ? (
          <li>
            {/* void mean we don't care what returns from this function */}
            <button onClick={() => void signIn()}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscSignIn className="h-6 w-6 fill-green-700" />
                  <span className="hidden fill-green-700 text-lg md:inline">
                    Log In
                  </span>
                </span>
              </IconHoverEffect>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => void signOut()}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscSignOut className="h-6 w-6 fill-red-700" />
                  <span className="hidden fill-red-700 text-lg md:inline">
                    Log Out
                  </span>
                </span>
              </IconHoverEffect>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
