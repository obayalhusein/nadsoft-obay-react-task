import { Box, Typography, TextField, Button } from "@mui/material";
import Layout from "../../layouts/Auth";

const login = () => {
    return (
        <Layout>
            <Typography variant="h2" component="h1" p={3}>Sign in</Typography>
            <Box sx={{ px: 3, pb: 2 }}>
                <TextField label="Username" variant="outlined" fullWidth />
            </Box>
            <Box sx={{ px: 3, pb: 2 }}>
                <TextField label="Password" variant="outlined" fullWidth />
            </Box>
            <Box sx={{ px: 3, pb: 2, textAlign: 'right' }}>
                <Button color="primary" variant="contained" size="large">Login</Button>
            </Box>
        </Layout>
    );
}
 
export default login;