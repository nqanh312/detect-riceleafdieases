import "./list/list.scss"
import Navbar from "../../components/admin/navbar/Navbar"
import Datadisease from "../../components/admin/Datadisease"

const ListDiseases = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Navbar/>
        <Datadisease/>
      </div>
    </div>
  )
}

export default ListDiseases