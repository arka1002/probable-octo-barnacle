
import Card from "./components/Card"

import { ReactComponent as Person } from './assets/person.svg'
import { ReactComponent as Finger } from './assets/finger.svg'
import { ReactComponent as Stopwatch } from './assets/stopwatch.svg'

function App() {


  return (
    <>
      <div className="section-1 grid grid-cols-3 gap-6">
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
    </>
  )
}

export default App
