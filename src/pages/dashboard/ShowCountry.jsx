import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryAPI from "../../api/byCountryAPI";
import Layout from "../../layouts/Dashboard";

export default function ShowCountry () {
    const id = useParams().id;
    const [results, setResults] = useState([]);
    const [currentCountry, setCurrentCountry] = useState(id);
    
    let data = CountryAPI(currentCountry);
    useEffect(() => {
        setResults(data)
    }, null);

    return (
        <Layout>
            <h1>Show country details</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, maxWidth: 1000 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="right">Deaths</TableCell>
                            <TableCell align="right">Confirmed</TableCell>
                            <TableCell align="right">Recovered</TableCell>
                            <TableCell align="right">Active</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map((row) => (
                            <TableRow
                                key={row.ID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.Country}
                                </TableCell>
                                <TableCell align="right">{row.Deaths}</TableCell>
                                <TableCell align="right">{row.Confirmed}</TableCell>
                                <TableCell align="right">{row.Recovered}</TableCell>
                                <TableCell align="right">{row.Active}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}