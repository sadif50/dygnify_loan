import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AllUser = () => {
    return (
        <Container className='mt-5'>
            <Card className='shadow'>
                <CardHeader>
                    <h2>All Users</h2>
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
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button>View Details</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AllUser;