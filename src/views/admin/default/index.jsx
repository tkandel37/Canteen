import PieChartCard from "views/admin/default/components/PieChartCard";
import { MdAttachMoney, MdBarChart, MdDashboard } from "react-icons/md";
import { columnsDataComplex, sactisfactionData } from "./variables/columnsData";
import Widget from "components/widget/Widget";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import satisData from "./variables/satisfactionJson.json";
import SatisFaction from "./components/SatisFaction";
import { AiFillPlusCircle } from "react-icons/ai";
import UserStaus from "./components/UserStatus";
import { statusData } from "./variables/statusData";


const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdAttachMoney  className="h-7 w-7" />}
          title={"Platform Income"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<MdBarChart  className="h-6 w-6" />}
          title={"Sales count"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<AiFillPlusCircle  className="h-7 w-7" />}
          title={"New Sales"}
          subtitle={"$574.34"}
        />
        
      </div>


      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
         {/* Traffic chart & Pie Chart */}

         <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic headline = "User Registrations" subline = "Registrations Today"/>
          <PieChartCard />
          
        </div>
        {/* Check Table */}
        <div>
        <DailyTraffic headline = "User Demographichs" subline = "+ by User" />
         
        </div>

       

        {/* Complex Table , Task & Calendar */}
        <UserStaus
          columnsData={columnsDataComplex}
          tableData={statusData}
        />
        <SatisFaction
            columnsData={sactisfactionData}
            tableData={satisData}
          />
        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}

        {/* Task chart & Calendar */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
