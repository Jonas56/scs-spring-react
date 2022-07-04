import React, { useState, useEffect } from "react";
import { httpUpdateProfile } from "../../api/userService";
import Alert from "../utils/Alert";
import SuccessModal from "../utils/SuccessModal";
import EditPassword from "./EditPassword";
import { useNavigate } from "react-router-dom";

export default function EditProfile({ userDetails, token }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate("");

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (userDetails) {
      setInputs({
        firstName: userDetails?.name.split(" ")[0] || "",
        lastName: userDetails?.name.split(" ")[1] || "",
        email: userDetails?.email || "",
        username: userDetails?.username || "",
      });
    }
  }, [userDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = `${inputs.firstName.trim()} ${inputs.lastName.trim()}`;
    if (
      name === userDetails.name &&
      inputs.email.trim() === userDetails.email &&
      inputs.username.trim() === userDetails.username
    ) {
      alert("No changes detected");
    } else {
      const user = {
        name,
        email: inputs.email,
        username: inputs.username,
      };
      try {
        const response = await httpUpdateProfile(user, token);
        setSuccess("Profile updated successfully");
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
        if (response.headers.authorization) {
          const user = {
            accessToken: response.headers.authorization,
            username: response.data.username,
          };
          localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
          navigate(0);
        }
      } catch (error) {
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    }
  };

  return (
    <div className="mx-auto p-5">
      <div className="mt-10 sm:mt-0">
        <div className="px-4 sm:px-0 mb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                {error && (
                  <div className="w-1/2 ml-60">{<Alert error={error} />}</div>
                )}
                {success && (
                  <div className="w-1/2 ml-60">
                    {<SuccessModal message={success} />}
                  </div>
                )}
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="firstName"
                      onChange={handleChange}
                      defaultValue={inputs.firstName}
                      className="mt-1 focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="last-name"
                      className="mt-1 focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      defaultValue={inputs.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="mt-1 focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={handleChange}
                      defaultValue={inputs.username}
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 bg-gray-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      defaultValue={inputs.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <EditPassword token={token} />
    </div>
  );
}
