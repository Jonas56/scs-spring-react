const features = [
  {
    name: "Lock & unlock from your phone",
    description:
      "Put your mind at ease knowing that you can lock your suitcase via your smartphone, if you get separated from your SCS, it will lock automatically. ",
  },
  {
    name: "Built-in digital scale",
    description:
      "Forget about checking your bag! SCS has a built-in digital scale so you can find out its weight and whether it’s approved by the airline. Just pull the handle and the app will tell you if you are ok to go.",
  },
  {
    name: "Built-in battery to recharge your devices",
    description:
      "That’s why we’ve included a super powerful battery charger that can charge two devices. The suitcase battery will enable you to recharge your smartphone six times over.",
  },
  {
    name: "Location Tracking ",
    description:
      "If you ever lose your SCS  or if it gets “re-routed”, the SCS network will help you track the location of your suitcase. As the network grows, we will cover the whole planet.",
  },
  {
    name: "Distance Alerts",
    description:
      "Thanks to the proximity sensors, you will receive alerts when you are separated from your SCS. You can also locate your SCS with a proximity heat map and receive a reminder of the last recorded location.",
  },
  {
    name: "Handly Access to your Electronic Devices",
    description:
      "Easy to access your electronics with a compartment at the front of the suitcase, specially designed to hold and protect your laptop and tablet. ",
  },
];

export default function Feature() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            SCS Features
          </h2>
          <p className="mt-4 text-gray-500">
            <b> SCS </b> is a high-quality carry-on suitcase that you can
            control from your phone, like a boss. From the app you can lock and
            unlock it, weigh it, track its location, be notified if you are
            leaving it behind and find out more about your travel habits. You
            can also charge your phone 6 times over with a built-in battery.
            Isn’t that awesome?
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://www.linkpicture.com/q/feat1_3.jpg"
            alt=" feature 1"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://www.linkpicture.com/q/feat2_1.jpg"
            alt="feature 2"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://www.linkpicture.com/q/feat3_1.jpg"
            alt="feature 3"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://www.linkpicture.com/q/feat4_1.jpg"
            alt="feature 4"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://www.linkpicture.com/q/feat5.jpg"
            alt="feature 5"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://www.linkpicture.com/q/feat6.jpg"
            alt="feature 6"
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
