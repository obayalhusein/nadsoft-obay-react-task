import { AppBar, Toolbar, Typography, Container, Divider } from '@mui/material';

const layout = ({children}) => {
    return (
        <>
            <header>
                <AppBar color="default" position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Coronavirus
                        </Typography>
                    </Toolbar>
                </AppBar>
            </header>
            <main>{children}</main>
            <footer>
                <Container>
                    <Divider />
                    <Typography align="center" m={3}>
                        copyright &copy; { new Date().getFullYear() }
                    </Typography>
                </Container>
            </footer>
        </>
    );
}
 
export default layout;