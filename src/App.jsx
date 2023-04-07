import Card from "./components/Card"
import { ReactComponent as Person } from './assets/person.svg'
import { ReactComponent as Finger } from './assets/finger.svg'
import { ReactComponent as Stopwatch } from './assets/stopwatch.svg'
import DoughNutChart from "./components/DoughNutChart"
import PieChart from "./components/PieChart"
import LineChart from "./components/LineChart"

function App() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <Person/>
        </Card>
        <Card>
          <Finger/>
        </Card>
        <Card>
          <Stopwatch/>
        </Card>
      </div>
      <div className="mt-4 p-6 rounded-xl bg-[#f3f3ff]">
        <div className="grid grid-cols-3 gap-4">
          <DoughNutChart/>
          <PieChart/>
        </div>
        <div><LineChart/></div>
      </div>
    </>
  )
}

export default App
