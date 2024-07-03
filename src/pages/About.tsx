import { Info } from "../components/Info";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";

export const About = () => {
    return (
        <>
            <SEO title="About" />
            <Layout>
                <div>
                    <Info>
                        <p>
                            madliani is a visionary mobile game and app
                            development studio dedicated to crafting immersive
                            digital experiences that captivate and inspire users
                            globally.
                        </p>

                        <h2>Our Commitment</h2>
                        <p>
                            At madliani, we blend creativity with cutting-edge
                            technology to deliver innovative solutions tailored
                            to meet the unique needs of our clients. Whether
                            it&apos;s developing engaging mobile games or
                            functional applications, we strive for excellence in
                            every project.
                        </p>

                        <h2>What Sets Us Apart</h2>
                        <p>
                            With a passionate team of developers, designers, and
                            strategists, madliani stands at the forefront of
                            mobile development. We leverage the latest trends
                            and tools to create compelling user interfaces,
                            seamless user experiences, and scalable solutions.
                        </p>

                        <h2>Our Approach</h2>
                        <p>
                            We believe in collaborative partnerships and
                            client-centric solutions. From concept to
                            deployment, we work closely with our clients to
                            ensure that our products not only meet but exceed
                            expectations. Our agile methodology allows us to
                            adapt swiftly to changes and deliver results
                            efficiently.
                        </p>

                        <h2>Get in Touch</h2>
                        <p>
                            Ready to transform your ideas into reality? Contact
                            madliani today to explore how we can help you
                            achieve your goals in the dynamic world of mobile
                            game and app development.
                        </p>

                        <p>
                            Email us at{" "}
                            <a href="mailto:madliani.gamdev@hotmail.com">
                                madliani.gamdev@hotmail.com
                            </a>
                        </p>
                    </Info>
                </div>
            </Layout>
        </>
    );
};
