import React, { useMemo } from "react";

// MUI
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

// Utils
import { generateMockOrders } from "../../../lib/mockData";

// Columns
import { columnsOrders } from "../columns";

const RecentOrdersTable: React.FC = () => {
  const rows = useMemo(() => generateMockOrders(20), []);

  return (
    <Box className="bg-white p-3 rounded shadow-sm">
      <Typography variant="h6" gutterBottom>
        Recent Orders
      </Typography>

      <Box sx={{ width: "100%", overflowX: "auto", my: 2 }}>
        <DataGrid
          rows={rows}
          columns={columnsOrders}
          disableRowSelectionOnClick
          autoHeight
        />
      </Box>
    </Box>
  );
};

export default RecentOrdersTable;
