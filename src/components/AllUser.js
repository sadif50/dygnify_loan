import React, { useEffect, useState } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';

const AllUser = () => {
    const [applications, setApplications] = useState([]);
    useEffect(()=>{
        fetch('https://dygnify-loan-server.vercel.app/applications')
        .then(res => res.json())
        .then(data =>{
            setApplications(data);
        })
    },[])
    return (
        <Container className='mt-5'>
            <Card className='shadow'>
                <CardHeader>
                    <h2>All Applications</h2>
                </CardHeader>
                <Card.Body>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Business</th>
                                <th>Loan Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applications.map((application, i) => <tr key={application._id}>
                                    <td>{i+1}</td>
                                    <td>{`${application.first_name} ${application.last_name}`}</td>
                                    <td>{application.mobile}</td>
                                    <td>{application.business}</td>
                                    <td>{application.loan_amount}</td>
                                    <td>
                                        <Link to={`/allApplications/${application._id}`}><button className='btn btn-warning'>View Details</button></Link>
                                    </td>
                                </tr>)
                            }
                            
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AllUser;