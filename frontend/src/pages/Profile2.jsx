import Footer from "../components/Footer";
import Header from "../components/Header";
import Orders from "../components/profile/Orders";
import EditProfile from "../components/profile/EditProfile";
import ProfileImage from "../components/profile/ProfileImage";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { httpGetUserProfile } from "../api/userService";

export default function Profile2() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate("");

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await httpGetUserProfile(user.accessToken);
        setUserDetails(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (user) {
      getUserDetails();
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <Header />
      <div className="container mx-auto my-10  ">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3">
              <div className="overflow-hidden">
                <ProfileImage avatar={userDetails?.userAvatar} />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                Jane Doe
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Owner at Her Company Inc.
              </h3>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-indigo-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
                <li className="flex items-center py-3">
                  <span>Logout</span>
                  <span className="ml-auto">
                    <Link className="text-indigo-500" to="/logout">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="bg-white p-3 shadow-sm rounded-sm w-full">
            <EditProfile userDetails={userDetails} token={user?.accessToken} />

            {userDetails?.orders.length === 0 ? (
              <div></div>
            ) : (
              <>
                <div className="border border-gray-100 solid my-5"></div>
                <Orders
                  orders={userDetails?.orders}
                  token={user?.accessToken}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
