import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const layout = ({children}) => {
    return (
        <>
            <header>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Coronavirus
                        </Typography>
                    </Toolbar>
                </AppBar>
            </header>
            <main>{children}</main>
            <footer>Dashboard Footer</footer>
        </>
    );
}
 
export default layout;