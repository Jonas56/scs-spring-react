function Profil()
{
    return (<body>
        <main class="p-5">
          <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-5 items-start gap-6">
              <div class="col-span-3 bg-white p-4 rounded-lg shadow">

                <div class="mb-6">
                  <h2 class="text-xl mb-5">Your Profile Information</h2>
                  <div class="mb-4">
                    <input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      placeholder="Your Username"
                      type="text"
                      name="username"
                      class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                    />
                  </div>
                </div>
                <button
									class="text-red-500 bg-transparent border border-solid border-gray-900 hover:bg-blue-500 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button">
                  Update </button>
              </div>
    
              <div class="col-span-2 bg-white p-4 rounded-lg shadow">
                <h2 class="text-xl mb-5">For Updating Password</h2>
                <div class="mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Current password"
                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="New password"
                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Repeat new password"
                    class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                  />
                </div>
                <div>
                <button
									class="text-red-500 bg-transparent border border-solid border-gray-900 hover:bg-blue-500 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button">
                  Update </button>
                  
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>)
}
export default Profil;