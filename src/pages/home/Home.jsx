import "./home.scss";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { FaBook } from "react-icons/fa";
// import TopBox from "../../components/topBox/TopBox";
import Calendar from "../../components/calendar/Calendar";
import Chart from "../../components/linechart/Chart";
const Home = () => {
  return (
    <>
      <div className="home-dash">
        <div className="box box1">
          <div className="container">
            <div className="logo">
              <PiStudent />
            </div>
            <h3>Students</h3>
          </div>
          <p>200</p>
        </div>
        <div className="box box2">
          <div className="container">
            <div className="logo">
              <FaChalkboardTeacher />
            </div>
            <h3>Teachers</h3>
          </div>
          <p>200</p>
        </div>
        <div className="box box3">
          <div className="container">
            <div className="logo">
              <MdClass />
            </div>
            <h3>Class</h3>
          </div>
          <p>200</p>
        </div>
        <div className="box box4">
          <div className="container">
            <div className="logo">
              <FaBook />
            </div>
            <h3>Subjects</h3>
          </div>
          <p>200</p>
        </div>
      </div>
      <div className="home-chart">
        <div className="box5">
          <h3>Event Calendar</h3>
          <Calendar />
        </div>
        <div className="box6">
          <h3>Line Chart</h3>
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Home;
