import { useState } from "react"
import Button from "./components/NormalButton"

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
            <Button title="1" currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <Button title="2" currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <Button title="3" currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <Button title="4" currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <Button title="5" currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <Button title="6" currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <Button title="7" currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <Button title="8" currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <Button title="9" currentValue={currentValue} setCurrentValue={setCurrentValue} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App