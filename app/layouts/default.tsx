import { Outlet } from "react-router";
import Navbar from "~/navbar/navbar";
import { Box } from "@mui/material";


export default function DefaultLayout() {
    return  <Box sx={{ flexGrow: 1 }}>
        <Navbar></Navbar>
        <Outlet />
        </Box>
}