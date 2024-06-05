import { useAppContext } from "../context/AppContext";

function Paginations() {
  const {page, setPage, totalPage} = useAppContext()
  return <div className="bottom-0 flex justify-between max-w-5xl py-5 mx-auto">
    <div className="flex gap-2">
      <button onClick={() => setPage(prev => prev - 1)} className={`text-black btn btn-outline ${page > 1 ? "block" : "hidden"}`}>Previous</button>
      <button onClick={() => setPage(prev => prev + 1)} 
      className={`text-black btn btn-outline ${page < totalPage ? "block" : "hidden"}`}>Next</button>
    </div>
    <div>Page {page} of {totalPage}</div>
  </div>;
}

export default Paginations;
