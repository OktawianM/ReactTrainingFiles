import "./index.css";

function App() {
  return (
    <div className="mx-auto px-20 py-5 max-w-xl lg:max-w-none ">
      <div className="flex flex-row gap-x-10 w-full place-content-end ">
        <div className="mt-6 text-lg/12 text-gray-600"> User name </div>
      </div>
      <div className="flex ">
        <div className="mt-6 text-lg/12 text-gray-600 px-5 border-r border-gray-500">
          Home
        </div>
        <div className="mt-6 text-lg/12 text-gray-600 px-5 border-r border-gray-500">
          Words
        </div>
        <div className="mt-6 text-lg/12 text-gray-600 px-5  border-r border-gray-500">
          Grammar
        </div>
        <div className="mt-6 text-lg/12 text-gray-600 px-5"> Sources </div>
      </div>
      <div className="grid grid-cols-1 my-20 lg:grid-cols-2 gap-x-10 gap-y-5 w-full h-1/2 place-items-center items-end">
        <div className="w-full">
          <input
            className="w-full rounded-md border-1 bg-white/5 text-white sm:text-sm/12 h-20 bottom-0"
            type="text"
            placeholder="Enter word/sentence for translation"
          />
        </div>
        <div className="w-full">
          <div className="flex my-5">
            <div className="mt-6 text-lg/12 text-gray-600 px-5 border-r border-gray-500">
              English
            </div>
            <div className="mt-6 text-lg/12 text-gray-600 px-5  border-r border-gray-500">
              German
            </div>
            <div className="mt-6 text-lg/12 text-gray-600 px-5"> Italian </div>
          </div>
          <input
            className=" flex-auto w-full rounded-md text-white sm:text-sm/12 bg-gray-600 h-20"
            type="text"
          />
        </div>
      </div>

      <div className=" flex-auto w-full text-lg/12 text-gray-600 place-items-center">
        Examples of use:
        <div className="grid grid-cols-9 my-3 w-full text-gray-400">
          <div className="grid col-start-1 col-span-4 place-items-end">
            Przykład 1
          </div>
          <div className="grid col-start-5 col-span-1 place-items-center ">
            <img src="../images/vectors/favoriteIcon.svg" />
          </div>
          <div className="grid col-start-6 col-span-4 text-gray-400">
            Example 1
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
