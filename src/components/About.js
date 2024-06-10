import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper } from '@mui/material';

const About = () => {
    return (
        <> 
        <div className="home-container" style={{ backgroundImage: 'url(/buddha-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box className="home-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                <Container>
                    <Typography variant="h3" component="h1" gutterBottom className="home-title" style={{ color: '#fff', fontWeight: 'bold' }}>
                       About Us
                    </Typography>
                </Container>
            </Box>
        </div>
        <Container>
            <Box sx={{ my: 4 }}>
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: 3,
                            }}
                            alt="Our Mission"
                            src="mission.jpg" // Update the path accordingly
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            हमारी संस्था का मिशन बौद्ध धर्म के प्रचार-प्रसार, प्रशिक्षण एवं शोध संस्थानों, ध्यान केंद्रों, और सांस्कृतिक कार्यक्रमों की स्थापना करना है। हम पर्यावरण संरक्षण, अनाथालय, वृद्ध आश्रम, निशुल्क अस्पताल, और शैक्षिक संस्थानों की स्थापना, भारतीय संविधान की रक्षा, नारी सशक्तिकरण, पाली भाषा के संरक्षण, और समाज की जागरूकता हेतु कार्यरत हैं। हमारा उद्देश्य बाबा साहब डॉ. भीमराव अंबेडकर जी के सिद्धांतों के माध्यम से समाज में मैत्री, करुणा, मुदिता और अपेक्षा स्थापित करना है।
                        </Typography>
                        <Button variant="contained" color="success" sx={{ mt: 2 }}>
                            Donate Now
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 8, textAlign: 'center' }}>
                    Our Team
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {/* Main Working Committee */}
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: 'center' }}>
                            <Paper elevation={3} sx={{ p: 2, borderRadius: '8px' }}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        mb: 2,
                                    }}
                                    alt={member.name}
                                    src={member.image} // Update the path accordingly
                                />
                                <Typography variant="h6" gutterBottom>{member.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {member.position}<br />
                                    {member.location}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                
                <Box sx={{ mt: 8, textAlign: 'center', bgcolor: '#f9f9f9', py: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Helping the Homeless, Hungry, and Hurting Children
                    </Typography>
                    <Button variant="contained" color="success" sx={{ mt: 2 }}>
                        Donate Now
                    </Button>
                </Box>
            </Box>
        </Container>
        </>
    );
};

const teamMembers = [
    {
        name: 'B R Gautam',
        position: 'मुख्य ट्रस्टी',
        location: 'रतनमई, राजनिजाम, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'बलवीर कोरी',
        position: 'उप ट्रस्टी',
        location: 'रतनमई, राजनिजाम, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'Reena गौतम',
        position: 'कोषाध्यक्ष',
        location: 'रतनमई, राजनिजाम, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'उपाधीस सिंह',
        position: 'संरक्षक',
        location: 'सहजदपुर, सत्तर, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'रामसूतार',
        position: 'महामंत्री',
        location: 'कंधई, दुल्ही, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'अशोक कुमार',
        position: 'सहसचिव',
        location: 'रतनमई, राजनिजाम, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'कुन्दन कुमार',
        position: 'संयुक्तमंत्री',
        location: 'विदियस, सत्तर, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'मंगूराम',
        position: 'सह संयुक्तमंत्री',
        location: 'रतनमई, राजनिजाम, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'हरिलाल बोत्ताचार्य',
        position: 'प्रचार मंत्री',
        location: 'हरीलमपुर, सत्तर, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'नन्दराम',
        position: 'पुस्तकालय मंत्री',
        location: 'रतनमई, राजनिजाम, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'मुनीन्द्र प्रताप भारती',
        position: 'विधिक सलाहकार',
        location: 'मुरारगंज, अमरगढ़, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    },
    {
        name: 'विशय कुमार',
        position: 'उपविधिक सलाहकार',
        location: 'रतनमई, राजनिजाम, प्रतापगढ़',
        image: 'worker.png', // Update the path accordingly
    }
];

export default About;
