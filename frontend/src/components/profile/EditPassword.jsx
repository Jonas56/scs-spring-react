import React, { useState } from "react";
import Alert from "../utils/Alert";
import SuccessModal from "../utils/SuccessModal";
import { htppUpdatePassword } from "../../api/userService";

export default function EditPassword({ token }) {
  const [inputs, setInputs] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.newPassword !== inputs.confirmPassword) {
      setError("Passwords do not match");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      try {
        const credentials = {
          oldPassword: inputs.oldPassword,
          newPassword: inputs.newPassword,
        };
        const reponse = await htppUpdatePassword(credentials, token);
        setSuccess(reponse);
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
        setInputs({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        setError("Error updating password. Please try again!");
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
      document.getElementById("old-password").value = "";
      document.getElementById("new-password").value = "";
      document.getElementById("confirm-password").value = "";
    }
  };

  return (
    <div className="mt-10 sm:mt-5">
      <div className="px-4 sm:px-0 my-7">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Change Password
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          Use a password that is at least 8 characters long. It must contain at
          least one letter, one number and one special character.
        </p>
      </div>

      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              {error && <div className="w-1/2">{<Alert error={error} />}</div>}
              {success && (
                <div className="w-1/2">
                  {<SuccessModal message={success} />}
                </div>
              )}
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="old-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Old Password (required)
                  </label>
                  <input
                    type="password"
                    name="oldPassword"
                    id="old-password"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password (required)
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="new-password"
                    autoComplete="password"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm New Password (required)
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                Update Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
