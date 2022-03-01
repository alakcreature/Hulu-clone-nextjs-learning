import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({list}) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    2xl:flex flex-wrap justify-content">
      {list && list.results.map(result=>(
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results