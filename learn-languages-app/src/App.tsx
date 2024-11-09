import './index.css'

function App() {
  return (
    <div className="max-w-xl px-12 lg:max-w-lg">
      <div className="mt-6 flex max-w-md gap-x-4">
        <input
          id="wordForTranslation"
          type="text"
          placeholder="Enter word/sentence for translation"
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
        />
        <button
          type="submit"
          onClick={() => alert("Translating")}
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Translate
        </button>
      </div>
    </div>



  )
}

export default App