import yt from './assets/yt.json'

function App() {

  return (
    <>
      <section className="w-full h-full bg-black flex flex-col justify-start items-center gap-10 pt-12 p-12">
        <h1 className="text-white font-sans text-3xl font-extrabold">{yt.items[0].snippet.channelTitle} Youtube Chanel</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white h-5/6 overflow-visible">
          {yt.items.map((item) => {
            return (
              <div className=" bg-slate-800 rounded-2xl p-3 text-right border border-white shadow-sm hover:scale-105 duration-300">
                <img src={item.snippet.thumbnails.high.url} className=" rounded-2xl shadow-lg" />
                <h3 className=" text-right font-bold text-white font-sans mt-2">
                  {item.snippet.title}
                </h3>
                <p className="text-sm font-thin text-gray-300 font-sans mt-1">
                  {item.snippet.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App
