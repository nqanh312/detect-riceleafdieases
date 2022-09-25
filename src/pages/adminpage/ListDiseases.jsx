import "./list/list.scss"
import Navbar from "../../components/admin/navbar/Navbar"
import Datadisease from "../../components/admin/Datadisease"
import Sidebar from "../../components/admin/sidebar/Sidebar"

const ListDiseases = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datadisease/>
      </div>
    </div>
  )
}

export default ListDiseases