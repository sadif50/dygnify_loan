import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

const Home = () => {
    const [key, setKey] = useState('home');
    return (
        <Container className='mt-5'>
            <div className='shadow p-4 rounded bg-white'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        Hello
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Hello
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        Hello
                    </Tab>
                </Tabs>
            </div>
        </Container>
    );
};

export default Home;