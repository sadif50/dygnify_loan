import React, { useState } from 'react';
import { Form, Button, Container, Tab, Tabs, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Home = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [key, setKey] = useState('personal');

    const handlePersonalDetails = data => {
        console.log(data);
    }
    return (
        <Container className='mt-5'>
            <div className='shadow p-4 rounded bg-white'>
                <Form onSubmit={handleSubmit(handlePersonalDetails)}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="personal" title="Personal Details">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" {...register("first_name", { required: "Enter First Name" })} />
                                        {errors.first_name && <Form.Text className="text-danger">{errors.first_name.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" {...register("last_name", { required: "Enter Last Name" })} />
                                        {errors.last_name && <Form.Text className="text-danger">{errors.last_name.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" {...register("age", { required: "Enter Your Age" })} />
                                        {errors.age && <Form.Text className="text-danger">{errors.first_name.age}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select {...register("gender", { required: "Please Select Gender" })} >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </Form.Select>
                                        {errors.gender && <Form.Text className="text-danger">{errors.gender.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control type="text" {...register("mobile", { required: "Enter Mobile Number" })} />
                                        {errors.mobile && <Form.Text className="text-danger">{errors.mobile.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Home Address</Form.Label>
                                        <Form.Control type="text" {...register("home_address", { required: "Enter Home Address" })} />
                                        {errors.home_address && <Form.Text className="text-danger">{errors.home_address.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <hr />
                                    <Button variant="warning" className='px-5 float-end' onClick={()=>setKey('business')}>
                                        Next
                                    </Button>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="business" title="Business Details">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Applicant's Business</Form.Label>
                                        <Form.Control type="text" {...register("business", { required: "Enter Applicants Business" })} />
                                        {errors.business && <Form.Text className="text-danger">{errors.business.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>GST No</Form.Label>
                                        <Form.Control type="text" {...register("gst_no", { required: "Enter GST No" })} />
                                        {errors.gst_no && <Form.Text className="text-danger">{errors.gst_no.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Business Address</Form.Label>
                                        <Form.Control type="text" {...register("business_address", { required: "Enter Applicants Business Address" })} />
                                        {errors.business_address && <Form.Text className="text-danger">{errors.business_address.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Business Size</Form.Label>
                                        <Form.Select {...register("business_size", { required: "Select Business Size" })}>
                                            <option value="small">Small</option>
                                            <option value="large">Large</option>
                                            <option value="extra-large">Extra Large</option>
                                        </Form.Select>
                                        {errors.business_size && <Form.Text className="text-danger">{errors.business_size.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <hr />
                                    <Button variant="warning" className='px-5 float-end ms-2' onClick={()=>setKey('loan')}>
                                        Next
                                    </Button>
                                    <Button variant="warning" className='px-5 float-end' onClick={()=>setKey('personal')}>
                                        Prev
                                    </Button>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="loan" title="Loan Details">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Loan Amount</Form.Label>
                                        <Form.Control type="text" {...register("loan_amount", { required: "Select Business Size" })} />
                                        {errors.loan_amount && <Form.Text className="text-danger">{errors.loan_amount.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Interest Rate</Form.Label>
                                        <Form.Control type="text" {...register("int_rate", { required: "Select Business Size" })} />
                                        {errors.int_rate && <Form.Text className="text-danger">{errors.int_rate.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Loan Tenure</Form.Label>
                                        <Form.Control type="text" {...register("loan_tenure", { required: "Select Business Size" })} />
                                        {errors.loan_tenure && <Form.Text className="text-danger">{errors.loan_tenure.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <hr />
                                    <Button variant="warning" className='px-5 float-end ms-2' type="submit">
                                        Submit
                                    </Button>
                                    <Button variant="warning" className='px-5 float-end ms-2' onClick={()=>setKey('business')}>
                                        Prev
                                    </Button>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Form>
            </div>
        </Container>
    );
};

export default Home;