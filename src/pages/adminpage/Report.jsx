import "./list/list.scss"
import Navbar from "../../components/admin/navbar/Navbar"
import Datareport from "../../components/admin/Datareport"
import Sidebar from "../../components/admin/sidebar/Sidebar"

const Report = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datareport/>
      </div>
    </div>
  )
}

export default Report