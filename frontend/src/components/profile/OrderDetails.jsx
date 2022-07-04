import productImage from "../../img/1_1.jpg";

export default function OrderDetails() {
  return (
    <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Order #1234 Details</h1>

      <div className="bg-white p-3 rounded-md shadow-md">
        <div>
          <table className="table-sm">
            <tbody>
              <tr>
                <td className="font-bold">Order #</td>
                <td>1234</td>
              </tr>
              <tr>
                <td className="font-bold">Order Date</td>
                <td>May 3, 07:28PM</td>
              </tr>
              <tr>
                <td className="font-bold">Status</td>
                <td>
                  <span className="bg-emerald-500 text-white p-1 rounded">
                    Paid
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-bold">SubTotal</td>
                <td>$157</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        <div>
          <div className="flex gap-6">
            <div className="w-16 h-16 flex items-center border border-gray-300">
              <img src={productImage} alt="" />
            </div>
            <div className="flex-1 flex flex-col justify-between pb-3">
              <h3 className="text-ellipsis mb-4">
                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
              </h3>
            </div>
            <div className="flex flex-col justify-between items-end pb-3 w-32">
              <div className="text-lg mb-4">$17.99</div>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex gap-6">
            <div className="w-16 h-16 flex items-center border border-gray-300">
              <img src={productImage} alt="" />
            </div>
            <div className="flex-1 flex flex-col justify-between pb-3">
              <h3 className="text-ellipsis mb-4">
                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
              </h3>
            </div>
            <div className="flex flex-col justify-between items-end pb-3 w-32">
              <div className="text-lg mb-4">$17.99</div>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex gap-6">
            <div className="w-16 h-16 flex items-center border border-gray-300">
              <img src={productImage} alt="" />
            </div>
            <div className="flex-1 flex flex-col justify-between pb-3">
              <h3 className="text-ellipsis mb-4">
                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
              </h3>
            </div>
            <div className="flex flex-col justify-between items-end pb-3 w-32">
              <div className="text-lg mb-4">$17.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
