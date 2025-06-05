// Icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";

// Utils
import { formatCurrencyIN, formatNumberIN } from "../../common/lib/utils";

// Components
import SalesChart from "../components/sales-chart";
import RecentOrdersTable from "../components/recent-orders";
import SummaryCard from "../components/summary-card";

const Dashboard = () => {
  return (
    <div className="container-fluid px-4">
      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <SummaryCard
            title="Total Sales"
            value={formatCurrencyIN(49999)}
            icon={AttachMoneyIcon}
          />
        </div>
        <div className="col-12 col-md-4">
          <SummaryCard
            title="Total Orders"
            value={formatNumberIN(1200)}
            icon={ShoppingCartIcon}
          />
        </div>
        <div className="col-12 col-md-4">
          <SummaryCard
            title="Active Users"
            value={formatNumberIN(288)}
            icon={PeopleIcon}
          />
        </div>
      </div>

      {/* Charts */}

      <div className="mb-4">
        <SalesChart />
      </div>

      {/* Recent Orders */}

      <div className="mb-4">
        <RecentOrdersTable />
      </div>
    </div>
  );
};

export default Dashboard;
