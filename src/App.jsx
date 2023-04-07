import DoughNutChart from "./components/DoughNutChart"
import PieChart from "./components/PieChart"



function App() {


  return (
    <div className="App grid grid-cols-3 gap-4">
      {/* <ChartSect/> */}
      {/* <PieChart/> */}
      <PieChart/>
      <DoughNutChart/>
    </div>
  )
}

export default App
