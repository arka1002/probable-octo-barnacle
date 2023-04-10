import Card from "./components/Card"
import { ReactComponent as Person } from './assets/person.svg'
import { ReactComponent as Finger } from './assets/finger.svg'
import { ReactComponent as Stopwatch } from './assets/stopwatch.svg'
import DoughNutChart from "./components/DoughNutChart"
import PieChart from "./components/PieChart"
import LineChart from "./components/LineChart"
import InputRange from "./components/InputRange"

function App() {
  return (
    <>
      {/* <div className="grid grid-cols-3 gap-6">
        <Card title={`Arka`} numbers={100}>
          <Person/>
        </Card>
        <Card title={`Pratim`} numbers={200}>
          <Finger/>
        </Card>
        <Card title={`Chaudhuri`} numbers={300}>
          <Stopwatch/>
        </Card>
      </div>
      <div className="mt-4 p-6 rounded-xl bg-[#f3f3ff]">
        <div className="grid grid-cols-3 gap-4">
          <DoughNutChart/>
          <PieChart/>
        </div>
        <div><LineChart/></div>
      </div> */}
      <InputRange/>
    </>
  )
}

export default App
