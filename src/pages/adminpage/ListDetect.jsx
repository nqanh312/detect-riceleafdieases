import "./list/list.scss"
import Navbar from "../../components/admin/navbar/Navbar"
import Datadetect from "../../components/admin/Datadetect"

const ListDetect = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Navbar/>
        <Datadetect/>
      </div>
    </div>
  )
}

export default ListDetect