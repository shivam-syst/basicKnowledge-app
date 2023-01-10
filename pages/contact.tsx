import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CONTACT_EMAIL } from "../lib/constants";

export default function PrivacyPolicy() {
  return (
    <>
      <Layout>
        <Head>
          <title> Contact Us | Basic Knowledge</title>
        </Head>
        <Container>
          <Intro text={"Contact Us"} />
          <div className="staticPage">
            <h1>Title 1</h1>
            <p>
              Lorem asdfas ipsum dolor sit amet consectetur, adipisicing elit.
              Impedit dolorum maxime voluptates corrupti? Voluptate numquam
              incidunt, ipsa hic est, consectetur necessitatibus reiciendis quas
              libero vel eaque, ipsum aliquid architecto. Optio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              dolorum maxime voluptates corrupti? Voluptate numquam incidunt,
              ipsa hic est, consectetur necessitatibus reiciendis quas libero
              vel eaque, ipsum aliquid architecto. Optio?
            </p>
            <h2>Title 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              dolorum maxime voluptates corrupti? Voluptate numquam incidunt,
              ipsa hic est, consectetur necessitatibus reiciendis quas libero
              vel eaque, ipsum aliquid architecto. Optio?
            </p>
            <h3>Title 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              dolorum maxime voluptates corrupti? Voluptate numquam incidunt,
              ipsa hic est, consectetur necessitatibus reiciendis quas libero
              vel eaque, ipsum aliquid architecto. Optio?
            </p>
            <h3>Title 3</h3>
            <p>
              Drop us a mail <a href={`mailto:${CONTACT_EMAIL}`}>here</a>
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
