import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 400,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 300,
    },
    {
      field: "access",
      headerName: "Access Name",
      width: 200,
      headerAlign: "center",
      align: "center",

      renderCell: ({ row: { access } }) => {
        return (
          <Box
            bgcolor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            width={"60%"}
            display={"flex"}
            justifyContent={"center"}
            p={"5px"}
          >
            {access == "admin" && <AdminPanelSettingsOutlined />}
            {access == "manager" && <SecurityOutlined />}
            {access == "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} ml={"5px"}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box mx={"20px"}>
      <Header title={"TEAM"} subtitle={"Managing The Team Members"} />
      <Box sx={{ height: 520, width: "100%" }}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Team;
