/* eslint-disable react/jsx-no-target-blank */
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-20 bg-gradient-to-bl from-violet-900 to-slate-800">

      <p className="mt-5 lg:mt-0 text-3xl lg:text-5xl font-sans text-violet-300 tracking-wider font-bold text-center">Blog API Links</p>

      <div className="flex flex-col gap-10 w-11/12 lg:w-2/4">

        <button
          className="p-6 outline-none rounded-xl shadow-lg bg-transparent border-8 border-indigo-500 text-white font-sans text-base lg:text-xl tracking-wider uppercase font-bold transition-all duration-500 hover:bg-indigo-800"
        > <a href="https://blog-api-kqjx.onrender.com/" className="flex items-center justify-center gap-3" target='_blank'>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl"></i> <span>Link to Deployed Link</span>
          </a>
        </button>

        <button className="p-6 outline-none rounded-xl shadow-lg bg-transparent border-8 border-black text-white font-sans text-base lg:text-xl tracking-wider uppercase font-bold transition-all duration-500 hover:bg-slate-800">
          <a href="https://github.com/somenath203/Blog-Backend-API#readme" className="flex items-center justify-center gap-3" target='_blank'>
            <i className="fa-brands fa-github-alt text-2xl"></i> <span>Link to Github README</span>
          </a>
        </button>

        <button
          className="p-6 outline-none rounded-xl shadow-lg bg-transparent border-8 border-orange-600 text-white font-sans text-base lg:text-xl tracking-wider uppercase font-bold transition-all duration-500 hover:bg-orange-800"
        > <a href="https://documenter.getpostman.com/view/14623339/2s935rLNnB" className="flex items-center gap-3 justify-center" target='_blank'>
            <i className="fa-solid fa-book text-2xl"></i> <span>Link to Postman API Docs</span>
          </a>
        </button>

      </div>

    </div>
  )
};

export default App;
