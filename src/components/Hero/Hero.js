import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { Heading, HeroColumn, HeroRow, HeroSection, Img, ImgWrapper, Subtitle, TextWrapper, TopLine } from './Hero.elements';

const Hero = ({ primary, lightBg, imgStart, lightTopLine, lightText, lightTextDesc, topLine, headLine, description, buttonLabel, img, alt }) => {
    return (
        <>
            <HeroSection lightBg={lightBg}>
                <Container>
                    <HeroRow imgStart={imgStart}>
                        <HeroColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </HeroColumn>
                        <HeroColumn>
                            <ImgWrapper>
                                <Img src={img.default} alt={alt} />
                            </ImgWrapper>
                        </HeroColumn>
                    </HeroRow>
                </Container>
            </HeroSection>
        </>
    )
}

export default Hero;
