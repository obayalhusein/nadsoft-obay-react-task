import Layout from "../../layouts/Dashboard";
import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SummaryAPI from "../../api/summaryAPI";
import Moment from 'react-moment';

const Overview = () => {
    const [summary, setSummary] = useState({});
    
    const getSummaryData = async () => {
        const data = await SummaryAPI()
        setSummary(data)
    }
    
    useEffect(() => {
        getSummaryData();
    }, []);
    
    return (
        <Layout>
            <Typography component="h1" variant="h4" mb={3}>Overview</Typography>
            <Typography mb={3}>
                <Moment format="YYYY/MM/DD">{ summary.Date || <Skeleton width={200} /> }</Moment>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography>New Confirmed</Typography>
                            { summary.Global ? summary.Global.NewConfirmed : <Skeleton width={200} /> }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography>New Deaths</Typography>
                            { summary.Global ? summary.Global.NewDeaths : <Skeleton width={200} /> }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography>New Recovered</Typography>
                            { summary.Global ? summary.Global.NewRecovered : <Skeleton width={200} /> }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography>Total Confirmed</Typography>
                            { summary.Global ? summary.Global.TotalConfirmed : <Skeleton width={200} /> }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography>Total Deaths</Typography>
                            { summary.Global ? summary.Global.TotalDeaths : <Skeleton width={200} /> }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography>Total Recovered</Typography>
                            { summary.Global ? summary.Global.TotalRecovered : <Skeleton width={200} /> }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
}
 
export default Overview;