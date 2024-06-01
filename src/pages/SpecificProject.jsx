const SpecificComponent = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-2/3">
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-semibold">Project X</h2>
            <p className="text-sm text-gray-400">Jan 7th, 2022</p>
            <p className="text-sm text-gray-400">Friday, 10:00pm WAT</p>
            <p className="mt-2">
              We exist to help people get answers to questions theyve not
              found. Either that they cannot ask them or they do not know to
              frame them, or the answers are not framed well...
            </p>
            <div className="flex items-center mt-4">
              <span className="text-xs bg-purple-700 py-1 px-2 rounded-full">
                Ongoing
              </span>
              <span className="ml-2 text-xs bg-purple-700 py-1 px-2 rounded-full">
                500+ going
              </span>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="bg-purple-600 py-2 px-4 rounded-lg">
                Join Now
              </button>
              <button className="bg-gray-700 py-2 px-4 rounded-lg">
                View Event
              </button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Event"
              className="w-full"
            />
          </div>
        </div>
        <div className="md:w-1/3 md:pl-4">
          <h3 className="text-lg font-semibold mb-4">Project members</h3>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="text-md font-semibold">Software Engineer</h4>
            <p className="text-sm">
              Hi, Im Bright Dumadi, a Software Engineer based in Chicago,
              Illinois...
            </p>
            <div className="flex space-x-2 mt-2">
              <span className="bg-purple-700 py-1 px-2 rounded-full text-xs">
                UI Design
              </span>
              <span className="bg-purple-700 py-1 px-2 rounded-full text-xs">
                UX Design
              </span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="text-md font-semibold">Software Engineer</h4>
            <p className="text-sm">
              Hi, Im Bright Dumadi, a Software Engineer based in Chicago,
              Illinois...
            </p>
            <div className="flex space-x-2 mt-2">
              <span className="bg-purple-700 py-1 px-2 rounded-full text-xs">
                UI Design
              </span>
              <span className="bg-purple-700 py-1 px-2 rounded-full text-xs">
                UX Design
              </span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="text-md font-semibold">User Experience Designer</h4>
            <p className="text-sm">
              Hi, Im Elvis Obi, a User Experience Designer based in Abuja,
              Nigeria...
            </p>
            <div className="flex space-x-2 mt-2">
              <span className="bg-purple-700 py-1 px-2 rounded-full text-xs">
                UI Design
              </span>
              <span className="bg-purple-700 py-1 px-2 rounded-full text-xs">
                UX Design
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">04</h4>
            <p className="text-sm">Days</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">12</h4>
            <p className="text-sm">Hours</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">32</h4>
            <p className="text-sm">Minutes</p>
          </div>
        </div>
        <div>
          <button className="bg-purple-600 py-2 px-4 rounded-lg">Enter Room</button>
        </div>
      </div>
    </div>
  );
};

export default SpecificComponent;
