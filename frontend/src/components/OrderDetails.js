import productImage from '../img/1_1.jpg'; 
function OrderDetails()
{
    return (<body>
      <main class="p-5">
        <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
          <h1 class="text-3xl font-bold mb-6">Order #1234 Details</h1>
  
          <div class="bg-white p-3 rounded-md shadow-md">
            <div>
              <table class="table-sm">
                <tbody>
                  <tr>
                    <td class="font-bold">Order #</td>
                    <td>1234</td>
                  </tr>
                  <tr>
                    <td class="font-bold">Order Date</td>
                    <td>May 3, 07:28PM</td>
                  </tr>
                  <tr>
                    <td class="font-bold">Status</td>
                    <td>
                      <span class="bg-emerald-500 text-white p-1 rounded"
                        >Paid</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold">SubTotal</td>
                    <td>$157</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <hr class="my-5" />
  
            <div>
              <div class="flex gap-6">
                <div class="w-16 h-16 flex items-center border border-gray-300">
                  <img src={productImage} alt="" />
                </div>
                <div class="flex-1 flex flex-col justify-between pb-3">
                  <h3 class="text-ellipsis mb-4">
                    Logitech G502 HERO High Performance Wired Gaming Mouse, HERO
                    25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                  </h3>
                </div>
                <div class="flex flex-col justify-between items-end pb-3 w-32">
                  <div class="text-lg mb-4">$17.99</div>
                </div>
              </div>
              <hr class="my-2" />
              <div class="flex gap-6">
                <div class="w-16 h-16 flex items-center border border-gray-300">
                  <img src={productImage} alt="" />
                </div>
                <div class="flex-1 flex flex-col justify-between pb-3">
                  <h3 class="text-ellipsis mb-4">
                    Logitech G502 HERO High Performance Wired Gaming Mouse, HERO
                    25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                  </h3>
                </div>
                <div class="flex flex-col justify-between items-end pb-3 w-32">
                  <div class="text-lg mb-4">$17.99</div>
                </div>
              </div>
              <hr class="my-2" />
              <div class="flex gap-6">
                <div class="w-16 h-16 flex items-center border border-gray-300">
                  <img src={productImage} alt="" />
                </div>
                <div class="flex-1 flex flex-col justify-between pb-3">
                  <h3 class="text-ellipsis mb-4">
                    Logitech G502 HERO High Performance Wired Gaming Mouse, HERO
                    25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                  </h3>
                </div>
                <div class="flex flex-col justify-between items-end pb-3 w-32">
                  <div class="text-lg mb-4">$17.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>);
  }    
      
export default OrderDetails;