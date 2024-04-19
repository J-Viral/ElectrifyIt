import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Daily from "./Daily";
import Weekly from "./Weekly";
import Month from "./Month";


const Dashboard = () => {
  return (
    <div className=" m-6">
      <Tabs aria-label="Tabs with underline">
        <Tabs.Item active title="Daily" icon={HiUserCircle}>
          <Daily />
        </Tabs.Item>
        <Tabs.Item title="Weekly" icon={MdDashboard}>
          <Weekly />
        </Tabs.Item>
        <Tabs.Item title="Monthly" icon={HiAdjustments}>
          <Month />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Dashboard;
