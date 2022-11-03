import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ByCountryAPI } from "../../api/casesAPI";
import Layout from "../../layouts/Dashboard";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'Country', headerName: 'Country', width: 200 },
    { field: 'Deaths', headerName: 'Deaths', type: 'number', width: 130 },
    { field: 'Confirmed', headerName: 'Confirmed', type: 'number', width: 130 },
    { field: 'Recovered', headerName: 'Recovered', type: 'number', width: 90 },
    { field: 'Active', headerName: 'Active', type: 'number', width: 90 },
];

export default function ShowCountry () {
    const { id } = useParams();
    const [results, setResults] = useState([]);
    
    const getCountryData = async (countryId) => {
        const data = await ByCountryAPI(countryId)
        setResults(data)
    }
    useEffect(() => {
        setResults([])
        getCountryData(id);
    }, [id]);

    return (
        <Layout>
            <Typography component="h1" variant="h4" mb={3}>Show country details</Typography>

            <div style={{ height: 400, width: '100%', maxWidth: '700px' }}>
                <DataGrid
                    getRowId={(row) => row.ID}
                    rows={results}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </Layout>
    );
}