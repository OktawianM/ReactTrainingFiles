import "./index.css";

function App() {
  return (
    <div className="mx-auto px-20 py-5 max-w-xl lg:max-w-none ">
      <div className="grid gap-x-10 gap-y-10 w-full h-1/2 place-items-center items-end">
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 w-1/4 h-1/2 place-items-center items-end">
          <div className="grid text-white place-items-center">
            <input
              type="checkbox"
              className="checkbox bg-blue-500 rounded p-4 "
              placeholder="aaa"
            />
            <h4>2D</h4>
          </div>
          <div className="grid text-white place-items-center">
            <input
              type="checkbox"
              className="checkbox bg-blue-500 rounded p-4"
              placeholder="aaa"
            />
            <h4>3D</h4>
          </div>
          <div className="grid text-white place-items-center">
            <input
              type="checkbox"
              className="checkbox bg-blue-500 rounded p-4"
              placeholder="aaa"
            />
            <h4>Texture</h4>
          </div>
        </div>

        <div className="w-1/4 text-white mt-5 ">
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
          />
          <h4>Hours in the office</h4>
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
          />
          <h4>Preparing files (hours)</h4>
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
          />
          <h4>Number of commutes to the company</h4>
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
            type="number"
          />
          <h4>Total number of forms</h4>
        </div>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Calculate
        </button>
        <input
          className="w-1/4 rounded-md border-1 bg-black/5 text-white sm:text-sm/12 h-10 bottom-0 mt-5"
          type="number"
        />
      </div>
    </div>
  );
}

export default App;
