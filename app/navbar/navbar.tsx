import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"


export default function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <IconButton size="large" edge="start" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}