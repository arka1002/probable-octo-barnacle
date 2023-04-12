// import Card from "./components/Dashboard/Card"
// import { ReactComponent as Person } from './assets/person.svg'
// import { ReactComponent as Finger } from './assets/finger.svg'
// import { ReactComponent as Stopwatch } from './assets/stopwatch.svg'
// import DoughNutChart from "./components/Dashboard/DoughNutChart"
// import PieChart from "./components/Dashboard/PieChart"
// import LineChart from "./components/Dashboard/LineChart"
// import SliderSection from "./components/Dashboard/SliderSection"
// import NavTabs from "./components/Valuation/NavTabs"

import SourceTable from "./components/Expenses/SourceTable"
import Table from "./components/Table"



function App() {
  return (
    <>
      {/* <div className="grid grid-cols-3 gap-6">
        <Card title={`Arka`} numbers={100}>
          <Person />
        </Card>
        <Card title={`Pratim`} numbers={200}>
          <Finger />
        </Card>
        <Card title={`Chaudhuri`} numbers={300}>
          <Stopwatch />
        </Card>
      </div>
      <SliderSection />
      <div className="mt-4 p-6 rounded-xl bg-[#f3f3ff]">
        <div className="grid grid-cols-3 gap-4">
          <DoughNutChart />
          <PieChart />
        </div>
        <div><LineChart /></div>
      </div> */}
      {/* <SliderSection />
      <div className="mt-4"><NavTabs /></div> */}
      {/* <SourceTable/> */}
      <Table/>
    </>
  )
}

export default App
