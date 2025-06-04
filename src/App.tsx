import Form from './Form'
import Sidebar from './Sidebar'

export default function App() {
  return (
    <>
    <div className="d-flex">

    <div>
      <Sidebar/>
    </div>
    <div style={{flex: 3}}>
      <Form/>
    </div>
    </div>
    </>
  )
}
