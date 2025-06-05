import React from "react";

// Material UI
import { Card, CardContent, Typography } from "@mui/material";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: any;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  const Icon = icon;
  return (
    <Card
      className="d-flex align-items-center p-4 h-100 shadow-sm"
      style={{ minHeight: 120 }}
    >
      <div
        className="me-4 bg-light rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: 56, height: 56 }}
      >
        <Icon />
      </div>
      <CardContent className="p-0">
        <Typography variant="subtitle1" color="textSecondary" className="mb-1">
          {title}
        </Typography>
        <Typography variant="h5" className="fw-bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
