import { AppBar, Toolbar, Typography, Box, CssBaseline, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CountriesAPI from "../api/countriesAPI";

const drawerWidth = 240;

export default function Layout({ children }) {

    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState([]);
    
    const getCountriesData = async () => {
        const data = await CountriesAPI()
        setCountries(data)
    }
    
    useEffect(() => {
        getCountriesData();
    }, []);

    const countriesDom = countries.filter(country => country.Country.toLowerCase().includes(query)).map((country) =>
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
                    <ListItem disablePadding>
                        <TextField label="Search" variant="outlined" onChange={e => setQuery(e.target.value.toLowerCase())} sx={{ mx: 'auto' }} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {countriesDom}
                </List>
            </Drawer>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
