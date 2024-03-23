import { useEffect, useState } from "react";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { BorderRight } from "@mui/icons-material";
import imgAdmin from "../../assets/admin.jpg";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        active={to === window.location.pathname}
        style={{ color: colors.grey[100] }}
        onClick={() => {
          setSelected(title);
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const Sidebarr = ({ isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const isNonTablet = useMediaQuery("(min-width:768px)");
  const [disable, setdisable] = useState(false);
  useEffect(() => {
    if (!isNonTablet) {
      setdisable(true);
    } else {
      setdisable(false);
    }
  }, [isNonTablet]);

  return (
    <Sidebar
      collapsed={isCollapsed}
      backgroundColor={colors.primary[400]}
      style={{
        borderRightWidth: "0",
        minHeight: "100vh",
      }}
    >
      {!isCollapsed && (
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={"20px"}
          marginX={"20px"}
        >
          <Typography variant="h4" color={colors.grey[100]}>
            ADMINS
          </Typography>
          <IconButton
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
      )}
      {isCollapsed && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"20px"}
          marginX={"20px"}
        >
          <IconButton
            disabled={disable}
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
      )}
      {!isCollapsed && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          justifyContent={"center"}
          alignItems={"center"}
          marginY={"20px"}
        >
          <img
            src={imgAdmin}
            alt=""
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <Typography variant="h2" fontWeight={"normal"}>
            Ed Roh
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            VP Fancy Admin
          </Typography>
        </Box>
      )}
      <Menu
        menuItemStyles={{
          button: ({ level, active }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: !active ? "inherit" : "#6870fa",
                backgroundColor: active ? "#19111b9b" : undefined,
                ":hover": {
                  backgroundColor: colors.greenAccent[600],
                  color: "inherit",
                },
              };
          },
        }}
      >
        <Box>
          <Item
            title={"Dashboard"}
            to={"/dashboard"}
            selected={selected}
            setSelected={setSelected}
            icon={<HomeOutlinedIcon />}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            p={"15px 0 5px 20px"}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default Sidebarr;
