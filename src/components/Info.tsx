import { ReactNode } from "react";
import styled from "styled-components";

type Properties = {
    children: ReactNode;
};

const Text = styled.div`
    line-height: 2rem;
`;

export const Info = ({ children }: Properties) => {
    return (
        <div className="Info">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">Welcome to</span>{" "}
                            MADLIANI Studio
                        </h1>
                    </div>
                </div>
                <div className="row text-start">
                    <div className="col-md-6 about-section">
                        <Text>{children}</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};
