import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Link, Button } from '@mui/material';

const Donate = () => {
    const [language, setLanguage] = useState('english');

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    const getContent = () => {
        switch (language) {
            case 'hindi':
                return {
                    title: 'तथागत महाविहार फाउंडेशन ट्रस्ट को दान करें',
                    dearMembers: 'प्रिय सदस्यों,',
                    importance: 'हम उन सामाजिक स्थलों में रहने का गर्व महसूस करते हैं जहां धार्मिक स्थलों का महत्व प्रमुख है, और ये स्थल आम जनता के आध्यात्मिक और सामाजिक विकास को सुनिश्चित करने में महत्वपूर्ण भूमिका निभाते हैं।',
                    initiative: 'इस संदर्भ में, हमारे संगठन तथागत महाविहार फाउंडेशन ट्रस्ट के तहत \'निरामंधिन बरम्पति बुद्ध विहार\' की स्थापना के लिए आपका वित्तीय सहयोग आवश्यक है, जो एक महत्वपूर्ण पहल के रूप में है। इस परियोजना के माध्यम से, हम उन लोगों की सहायता करने का उद्देश्य रखते हैं जो धार्मिक और आध्यात्मिक दृष्टिकोण से समृद्धि की ओर प्रयासरत हैं।',
                    request: 'हम इस महत्वपूर्ण कार्य के लिए आपका सहयोग अनुरोध करते हैं। आपके सहयोग के साथ, हम इस महत्वपूर्ण पहल को सफल बना सकते हैं और हमारे समाज को समृद्धि और सामाजिक सुधार की ओर और भी अग्रसर कर सकते हैं।',
                    bankDetails: 'वित्तीय सहायता के लिए कृपया निम्नलिखित विवरण का प्रयोग करें:',
                    bankName: 'बैंक का नाम: बैरोडा यूपी बैंक',
                    accountName: 'खाता धारक का नाम: तथागत महाविहार फाउंडेशन ट्रस्ट',
                    accountNo: 'खाता संख्या: 53640100023052',
                    ifscCode: 'IFSC कोड: BARB0BUPGBX',
                    address: 'पता: रतनमई दिलीपपुर प्रतापगढ़ यूपी 230127',
                    shareMessage: 'कृपया हमारे संगठन का संदेश अपने दोस्तों और परिवार के सदस्यों के साथ साझा करें और हमें इस महत्वपूर्ण काम को साकार करने में सबसे उच्च समर्थन प्रदान करें।',
                    support: 'हम आपके समर्थन की उम्मीद करते हैं और आपका धन्यवाद करते हैं कि आप हमारे समाज को सुधारने के इस महत्वपूर्ण काम में हमारे साथ जुड़ रहे हैं।',
                    thanks: 'धन्यवाद!',
                    president: 'बीआर गौतम (प्रेसिडेंट)',
                    contactNo: 'संपर्क नंबर:',
                    trust: '[तथागत महाविहार फाउंडेशन ट्रस्ट]'
                };
            case 'pali':
                default:
                    return {
                        title: 'Donate to Tathagat Mahavihar Foundation Trust',
                        dearMembers: 'Dear Members,',
                        importance: 'We take pride in living in a society where the importance of religious places is paramount, and these places play a vital role in ensuring the spiritual and social development of our society.',
                        initiative: 'In this context, we require your financial support for the establishment of the "Niramandhin Barampati Buddha Vihar" under the organization "Tathagat Mahavihar Foundation Trust" as part of a significant initiative. With this project, we aim to assist those who strive for prosperity from a religious and spiritual perspective.',
                        request: 'We request your support for this important cause. With your support, we can make this significant initiative successful and further advance our society towards prosperity and social improvement.',
                        bankDetails: 'Please use the following details for financial support:',
                        bankName: 'Bank Name: Baroda U.P. Bank',
                        accountName: 'Account Name: TATHAGAT MAHAVIHAR FOUNDATION TRUST',
                        accountNo: 'Account No: 53640100023052',
                        ifscCode: 'IFSC Code: BARB0BUPGBX',
                        address: 'Address: RATANMAI DILIPPUR PRATAPGARH UP 230127',
                        shareMessage: 'Please share our organization\'s message with your friends and family members and provide the highest support to us in realizing this important work.',
                        support: 'We look forward to your support and are grateful to you for joining us in this important work of improving our society.',
                        thanks: 'Thank you!',
                        president: 'B.R Gautam (President)',
                        contactNo: 'Contact No:',
                        trust: '[TATHAGAT MAHAVIHAR FOUNDATION TRUST]'
                    };
            }
        };
        
        return (
            <Container maxWidth="md">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" gutterBottom align="center" color="primary">
                        {getContent().title}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Button onClick={() => handleLanguageChange('english')} color="primary" variant={language === 'english' ? 'contained' : 'outlined'} sx={{ mr: 1 }}>English</Button>
                        <Button onClick={() => handleLanguageChange('hindi')} color="primary" variant={language === 'hindi' ? 'contained' : 'outlined'} sx={{ mr: 1 }}>हिंदी</Button>
                        {/* <Button onClick={() => handleLanguageChange('pali')} color="primary" variant={language === 'pali' ? 'contained' : 'outlined'}>पाली लिपि</Button> */}
                    </Box>
                    <Paper elevation={3} sx={{ p: 3, mt: 3, backgroundColor: '#f9f9f9' }}>
                        <Typography variant="body1" paragraph color="textSecondary">
                            {getContent().dearMembers}
                        </Typography>
                        <Typography variant="body1" paragraph color="textSecondary">
                            {getContent().importance}
                        </Typography>
                        <Typography variant="body1" paragraph color="textSecondary">
                            {getContent().initiative}
                        </Typography>
                        <Typography variant="body1" paragraph color="textSecondary">
                            {getContent().request}
                        </Typography>
                        <Typography variant="body1" paragraph color="textSecondary">
                            {getContent().bankDetails}
                        </Typography>
                        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, mb: 2, backgroundColor: '#e0f7fa' }}>
                            <Typography variant="body1" paragraph>
                                {getContent().bankName}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {getContent().accountName}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {getContent().accountNo}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {getContent().ifscCode}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {getContent().address}
                            </Typography>
                        </Box>
                        <Typography variant="body1" paragraph color="textSecondary">
                            {getContent().shareMessage}
                        </Typography>
                        <Typography variant="body1" paragraph color="textSecondary">
                            {getContent().support}
                        </Typography>
                        <Typography variant="body1" paragraph color="textSecondary">
                            {getContent().thanks}
                            <br />
                            <strong>{getContent().president}</strong>
                            <br />
                            {getContent().contactNo}: <Link href="tel:7570877174">7570877174</Link>
                            <br />
                            <strong>{getContent().trust}</strong>
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        );
        };
        
        export default Donate;