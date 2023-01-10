import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title> About Us | Basic Knowledge</title>
        </Head>
        <Container>
          <Intro text={"About Us"} />
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
              <ul>
                <li>HI</li>
                <li>HI</li>
                <li>HI</li>
              </ul>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              dolorum maxime voluptates corrupti? Voluptate numquam incidunt,
              ipsa hic est, consectetur necessitatibus reiciendis quas libero
              vel eaque, ipsum aliquid architecto. Optio?
            </p>
            <ol>
              <li>asdfas</li>
              <li>asdfas</li>
              <li>asdfas</li>
              <li>asdfas</li>
            </ol>
          </div>
        </Container>
      </Layout>
    </>
  );
}
