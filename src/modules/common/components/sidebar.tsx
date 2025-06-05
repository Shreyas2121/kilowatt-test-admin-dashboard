import React from "react";

//Libraries
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router";

// utils
import { navItems } from "../lib/constants";

interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleDrawer, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open || !isMobile}
      onClose={toggleDrawer}
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ p: 2 }}>
        <List>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => navigate(item.path)}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
