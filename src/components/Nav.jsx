import { Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import logo from "../images/hwhiskey-logo.png";

import Profile from "../pages/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "./SearchBar";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// create resources for Link to map over
const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Whiskies", to: "/whiskeys", current: false },
  { name: "Add a Whiskey", to: "/newwhiskey", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const [logInModal, setLogInModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <Disclosure as="nav" className="bg-amber-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <SearchBar
                  whiskeys={whiskeys}
                  className=" text-gray-300 hover:bg-amber-700 hover:text-white"
                />
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-amber-900 text-white"
                            : "text-gray-300 hover:bg-amber-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user && (
                  <>
                    <p>welcome {user.name}</p>
                    <button
                      onClick={logout}
                      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Log out
                    </button>
                  </>
                )}
                {!user && (
                  <>
                    <LoginModal
                      logInModal={logInModal}
                      setLogInModal={setLogInModal}
                      setRegisterModal={setRegisterModal}
                    ></LoginModal>
                    <RegisterModal
                      registerModal={registerModal}
                      setRegisterModal={setRegisterModal}
                    ></RegisterModal>
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div>
                  <Disclosure.Button>
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-amber-900 text-white"
                          : "text-amber-300 hover:bg-amber-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>

                    <Link
                      key="Make a Tasting"
                      to="/tasting"
                      className={classNames(
                        item.current
                          ? "bg-amber-900 text-white"
                          : "text-gray-300 hover:bg-amber-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    />
                  </Disclosure.Button>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
