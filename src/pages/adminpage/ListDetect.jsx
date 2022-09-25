import "./list/list.scss"
import Navbar from "../../components/admin/navbar/Navbar"
import Datadetect from "../../components/admin/Datadetect"
import Sidebar from "../../components/admin/sidebar/Sidebar"

const ListDetect = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datadetect/>
      </div>
    </div>
  )
}

export default ListDetect