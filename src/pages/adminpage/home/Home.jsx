import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import "./home.scss";
import Widget from "../../../components/admin/widget/Widget";
import Featured from "../../../components/admin/featured/Featured";
import Chart from "../../../components/admin/chart/Chart";
import Table from "../../../components/admin/table/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="detection" />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Detection)" aspect={3.5 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;