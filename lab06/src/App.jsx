

import Header from "./component/Header"
import Siderbar from "./component/Siderbar"
import Content from "./component/Content"
function App() {

  return (
    <>
      <div className="w-full">
          <div className="grid grid-cols-12">
            <div className="col-span-2 shadow-2xl">
            <Siderbar />
            </div>
            <div className="col-span-10">
            <Header />
            <Content />
            </div>

          </div>
      </div>
    </>
  )
}

export default App
