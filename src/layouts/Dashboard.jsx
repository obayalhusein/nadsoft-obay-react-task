import { AppBar, Toolbar, Typography, Box, CssBaseline, Drawer, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Countries from "../api/countries";

const drawerWidth = 240;

const layout = ({ children }) => {

    const data = Countries();
    const countries = data.map((country) =>
        <ListItem key={country.Country} disablePadding>
            <ListItemButton>
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
                        <ListItemButton>
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