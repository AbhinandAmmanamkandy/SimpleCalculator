import { useState } from "react"
import NormalButton from "./components/NormalButton"

const App = () => {
  const [currentValue, setCurrentValue] = useState<number>(0)

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container bg-gray-800 rounded w-[25%] h-[75%]">
        <div className="w-full bg-white text-black text-right px-3 py-2 text-xl font-bold">
          {currentValue}
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-3">
            <NormalButton/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App