import { AppBar, Toolbar, Typography, Box, CssBaseline, Drawer, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import CountriesAPI from "../api/countriesAPI";

const drawerWidth = 240;

const layout = ({ children }) => {

    const data = CountriesAPI();
    const countries = data.map((country) =>
        <ListItem key={country.Country} disablePadding>
            <ListItemButton component={Link} to={`/dashboard/${country.Slug}`}>
                <ListItemText primary={country.Country} />
            </ListItemButton>
        </ListItem>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                color="default"
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Coronavirus
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/dashboard/">
                            <ListItemText primary="All Countries" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {countries}
                </List>
            </Drawer>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default layout;