import React from 'react'
import styled from 'styled-components'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Fade from 'react-reveal/Fade';


function Section({ banner,bgImage,title,description,darkBtnText,lightBtnText,lightButton }) {
    return (
        <>
            <SectionContainer backgroundImage = {bgImage} >
                <Fade bottom>
                    <ContentWrapper>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </ContentWrapper>
                </Fade>
                <Fade bottom>
                    <ButtonsWrapper>
                        <Buttons>
                            <DarkBtn>{darkBtnText}</DarkBtn>
                            { lightButton && 
                            <LightBtn>{lightBtnText}</LightBtn> }
                        </Buttons>
                        { banner && 
                        <CustomDownArrow>
                            <ArrowDownIcon style={{ fill:'#fff' }} />
                        </CustomDownArrow>}
                    </ButtonsWrapper>
                </Fade>
                
            </SectionContainer>
        </>
    )
}

export default Section

const SectionContainer = styled.section`
    width:100%;
    height:100vh;
    background-image:${props =>`url("./images/${props.backgroundImage}")`};
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const ContentWrapper = styled.div`
    margin-top:20vh;
    h2{
        font-size:40px;
        color:#393c41;
    }
`
const ButtonsWrapper = styled.div`
    margin-bottom:30px;
`
const Buttons = styled.div`
    display:flex;
    justify-content:center;
    @media (max-width:768px){
        flex-direction:column;
    }
`
const DarkBtn = styled.div`
    background:rgba(0,0,0,0.6);
    color:#fff;
    width:240px;
    border-radius:30px;
    margin:12px;
    padding:12px;
    cursor:pointer;
    text-transform:uppercase;
    font-size:13px;
    display:flex;
    align-items:center;
    justify-content:center;
`
const LightBtn = styled(DarkBtn)`
    background:rgba(255,255,255,0.5);
    color:#000;
`
const CustomDownArrow = styled.div`
    display:flex;
    justify-content:center;
`
const ArrowDownIcon = styled(KeyboardArrowDownOutlinedIcon)`
    font-size:40px !important;
    cursor:pointer;
    animation: animationarrow infinite 1.5s;
`
