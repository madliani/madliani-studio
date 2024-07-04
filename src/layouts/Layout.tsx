import { ReactNode, useCallback } from "react";
import { Particles } from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import { Header } from "../components/Header";

type Properties = {
    children: ReactNode;
};

const options: ISourceOptions = {
    detectRetina: true,
    fpsLimit: 120,
    preset: "links"
};

export const Layout = ({ children }: Properties) => {
    const init = useCallback(async (engine: Engine) => {
        await loadLinksPreset(engine);
    }, []);

    return (
        <>
            <Particles init={init} options={options} />
            <Header />
            <main className="position-relative">{children}</main>
        </>
    );
};
