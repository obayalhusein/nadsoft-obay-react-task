import { Box, Container, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';

const layout = ({children}) => {
    return (
        <Box textAlign='center' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', background: grey[200] }}>
            <Container sx={{ maxWidth: '500px' }}>
                <Paper>
                    {children}
                </Paper>
            </Container>
        </Box>
    );
}
 
export default layout;