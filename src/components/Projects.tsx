import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">Projects</span>
                        </h1>
                    </div>
                </div>
                <div className="row text-center">
                    <ProjectItem
                        imgAlt="Snowfall logo"
                        imgSrc="https://raw.githubusercontent.com/madliani/snowfall-website/main/assets/icons/logo.png"
                        projectDescription="A delightful game where you can experience the magic of snowflakes with a simple click."
                        title="Snowfall Game"
                        viewSite="https://snowfall-game.netlify.app"
                    />
                </div>
            </div>
        </div>
    );
};
