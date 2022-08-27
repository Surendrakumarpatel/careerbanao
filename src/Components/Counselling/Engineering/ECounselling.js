import React from 'react'
import "./ECounselling.css";
import ResNavbar from '../../Navbar/ResNavbar';
import { experimentalStyled as styled } from '@mui/material/styles';
import Menu from './ExamData';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import Footer from '../../Body/Section_6/Footer';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function ECounselling() {
    return (
        <div>
            <ResNavbar />
            <div className="grid-boxes">
                <div className='c-and-social'>
                    <div className='admission-and-counselling'><h1>Admission And Counselling</h1></div>
                    <div className="socialLinks">
                        <FacebookIcon className='s-icons' />
                        <InstagramIcon className='s-icons' />
                        <YouTubeIcon className='s-icons' />
                    </div>
                </div>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(12)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <Item className="grid-items">
                                <div className="collegeLogo">
                                    <div><img className='clogo' src={Menu[2].ExamLogo}></img></div>
                                    <div><h1 className='college-name-text'>Indian Institute of technology Bombay.</h1>
                                    </div>
                                </div>
                                <div className="counselling-links">
                                    <SwipeRightIcon className="clickicon" />
                                    <Link to="/applyhome">IIT Bomabay Counselling through JOSSA</Link>
                                </div>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
    );
};

export default ECounselling;