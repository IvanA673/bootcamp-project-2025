import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="pageTitle">About Myself</h1>
        <div className="about">
          <div className="aboutImage">
            <Image
              src="/professional.jpeg"
              alt="A professional photo of myself"
              width={300}
              height={400}
            />
          </div>
          <div className="aboutText">
            <p>
              I am Ivan Alvarez, a second year student at Cal Poly majoring in{" "}
              <strong> Computer Engineering</strong>.
            </p>
            <p>
              I am a very physically active person and I love to{" "}
              <strong>weightlift and hike.</strong>{" "}
            </p>
            <p>
              A fun fact about me is that I have built{" "}
              <strong>3 gaming computers!</strong>
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        © 2023 Ivan Alvarez's Website | All Rights Reserved
      </footer>
    </div>
  );
}
