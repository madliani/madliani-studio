import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";
import MadlianiLogo from "../../assets/icons/logo.png";
import { Socials } from "./Socials";

const sentences = ["A visionary mobile game and app development studio."];

const Container = styled.div`
    position: relative;
    height: 80vh;
`;

const Jumbotron = styled.div`
    position: absolute;
    top: 20vh;

    width: 100%;
    margin: 0;
    padding: 2rem 1rem;

    text-align: center;

    background: none;

    @media (max-width: 768px) {
        top: 12vh;
    }
`;

const Content = styled.div`
    font-size: 75px;
`;

export const Banner = () => {
    return (
        <Container>
            <Jumbotron className="jumbotron jumbotron-fluid">
                <Content>
                    <h1>
                        <img
                            alt="madliani logo"
                            src={MadlianiLogo}
                            width="192"
                        />
                        <span className="main-color text-uppercase">
                            MADLIANI
                        </span>{" "}
                        Studio
                    </h1>
                    <h6>
                        <Typewriter
                            cursor
                            cursorBlinking
                            loop={false}
                            words={sentences}
                        />
                    </h6>
                    <Socials />
                </Content>
            </Jumbotron>
        </Container>
    );
};
