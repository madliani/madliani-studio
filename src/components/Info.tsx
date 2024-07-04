import { ReactNode } from "react";
import styled from "styled-components";

type Properties = {
    children: ReactNode;
    subtitle: string;
    title: string;
};

const Text = styled.div`
    line-height: 2rem;
`;

export const Info = ({ children, subtitle, title }: Properties) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">{title}</span>
                        </h1>
                        <h2 className="mb-5">
                            <span>{subtitle}</span>
                        </h2>
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
