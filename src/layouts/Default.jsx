import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const layout = ({children}) => {
    return (
        <>
            <header>
                <AppBar color="default" position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Coronavirus
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </header>
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    );
}
 
export default layout;