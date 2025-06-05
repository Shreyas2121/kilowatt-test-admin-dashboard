import React from "react";

// Recharts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Utils
import { formatCurrencyIN, formatNumberIN } from "../../common/lib/utils";

const data = [
  { month: "Jan", sales: 120000 },
  { month: "Feb", sales: 150000 },
  { month: "Mar", sales: 100000 },
  { month: "Apr", sales: 170000 },
  { month: "May", sales: 140000 },
];

const SalesChart: React.FC = () => {
  return (
    <div className="bg-white p-3 rounded shadow-sm">
      <h6 className="mb-3">Sales in Last 6 Months</h6>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => formatNumberIN(value)} />
          <Tooltip formatter={(value: number) => formatCurrencyIN(value)} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
