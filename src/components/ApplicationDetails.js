import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useLoaderData } from 'react-router-dom';

const ApplicationDetails = () => {
    const application = useLoaderData();
    console.log(application);
    return (
        <Container className='mt-5'>
            <Card className='shadow'>
                <CardHeader>
                    <h2>Application Details</h2>
                </CardHeader>
                <Card.Body>
                    <Table bordered>
                        <tbody>

                                
                                
                            <tr>
                                <th>Name</th>
                                <td>{`${application.first_name} ${application.last_name}`}</td>
                                <th>Mobile</th>
                                <td>{application.mobile}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{application.age}</td>
                                <th>Gender</th>
                                <td>{application.gender}</td>
                            </tr>
                            <tr>
                                <th>Home Address</th>
                                <td>{application.home_address}</td>
                                <th>Applicants Business</th>
                                <td>{application.business}</td>
                            </tr>
                            <tr>
                                <th>GST No</th>
                                <td>{application.gst_no}</td>
                                <th>Business Size</th>
                                <td>{application.business_size}</td>
                            </tr>
                            <tr>
                                <th>Business Address</th>
                                <td>{application.business_address}</td>
                                <th>Loan Amount</th>
                                <td>{application.loan_amount}</td>
                            </tr>
                            <tr>
                                <th>Interest Rate</th>
                                <td>{application.int_rate}</td>
                                <th>Loan Tenure</th>
                                <td>{application.loan_tenure}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ApplicationDetails;