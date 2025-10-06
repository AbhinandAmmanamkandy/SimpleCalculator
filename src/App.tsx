import { useState } from "react"

const App = () => {
  const [currentValue, setCurrentValue] = useState<number>(0)

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container bg-gray-800 rounded w-[25%] h-[75%]">
        <div className="w-full bg-white text-black text-right px-3 py-2 text-xl font-bold">
          {currentValue}
        </div>
      </div>
    </div>
  )
}

export default App