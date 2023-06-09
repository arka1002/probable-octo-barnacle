// import Card from "./components/Dashboard/Card"
// import { ReactComponent as Person } from './assets/person.svg'
// import { ReactComponent as Finger } from './assets/finger.svg'
// import { ReactComponent as Stopwatch } from './assets/stopwatch.svg'
// import DoughNutChart from "./components/Dashboard/DoughNutChart"
// import PieChart from "./components/Dashboard/PieChart"
// import LineChart from "./components/Dashboard/LineChart"
// import SliderSection from "./components/Dashboard/SliderSection"
import NavTabs from "./components/Valuation/NavTabs"

// import SourceTable from "./components/Expenses/SourceTable";
// import Expenses from "./components/IncomeStatement/Expenses";
// import Table from "./components/Table";
// import RevenueTable from "./components/IncomeStatement/RevenueTable";
// import EditableRow from "./components/CapTable/EditableRow";
// import ReadOnlyRow from "./components/CapTable/ReadOnly";
// import Revenue from "./components/IncomeStatement/Revenue";
import CapTable from "./components/CapTable/CapTable";
// import Ebita from "./components/IncomeStatement/Ebitda";
import RTable from "./components/Revenue/RTable";
// import BurnAnalysis from "./components/BurnAnalysis/BurnAnalysis";
// import BTable from "./components/BurnAnalysis/BTable";

import AccordianItem from "./components/On-BoardingData/AccordianItem";
import OnBoardingData from "./components/On-BoardingData";
import Expenses from "./components/On-BoardingData/Expenses";
import InputIcon from "./components/On-BoardingData/InputIcon";

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
      {/* <Expenses/> */}
      {/* <RevenueTable /> */}
      {/* <Revenue /> */}
      {/* <EditableRow /> */}
      {/* <ReadOnlyRow /> */}
      <CapTable />

      {/* <RTable /> */}
      {/* <NavTabs/> */}
      {/* <RevenueStreams /> */}
      {/* <OnBoardingData /> */}
      {/* <AccordianItem>
        <Expenses/>
      </AccordianItem> */}
      {/* <InputIcon/> */}
      
      {/* <BurnAnalysis /> */}
      {/* <BTable /> */}
    </>
  );
}

export default App;
