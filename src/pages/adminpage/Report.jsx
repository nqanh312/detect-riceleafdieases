import "./list/list.scss"
import Navbar from "../../components/admin/navbar/Navbar"
import Datareport from "../../components/admin/Datareport"

const Report = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Navbar/>
        <Datareport/>
      </div>
    </div>
  )
}

export default Report