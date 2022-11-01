import Layout from "../layouts/Default";
import { Link } from 'react-router-dom';
import { Box, Container, Button, Typography } from '@mui/material';

const homepage = () => {
    return (
        <Layout>
            <Box my={5} textAlign="center">
                <Container>
                    <Typography component="h1" variant="h2" maxWidth={500} marginX="auto" mb={3}>Welcome to CoronaVirus statistics</Typography>
                    <Button component={Link} to="/login" color="primary" variant="contained" size="large">Show statistics</Button>
                </Container>
            </Box>
        </Layout>
    );
}
 
export default homepage;