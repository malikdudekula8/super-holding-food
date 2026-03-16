import { useHook } from "../ResturentContext/Context";
import About from "./About";

function Home() {
  const { subTitle, titleDescription } = useHook();

  return (
    <>
      <div className="hero-section flex items-center justify-start">
        <div>
          <div>
            <h1
              className="text-6xl font-bold text-left"
              style={{
                maxWidth: "800px",
                lineHeight: "1.0",
                paddingTop: "100px",
              }}
            >
              {subTitle}
              <br />
              <span style={{ color: "#FF4033" }}>Breakfast</span>
            </h1>
          </div>

          <p
            className="text-lg text-gray-700 leading-relaxed mb-8 text-left"
            style={{
              maxWidth: "500px",
              lineHeight: "1.8",
              paddingRight: "121px",
            }}
          >
            {titleDescription}
          </p>

          <div className="home-buttons flex">
            <button className="home-order-button">Order Now</button>
            <button className="home-signin-button">Sign In</button>
          </div>

          <div>
            <img
              src="/Offer-img.png"
              alt="frame"
              style={{
                position: "relative",
                top: "121px",
                marginRight: "48px",
              }}
            />
          </div>
          <div>
            <img
              src="/red-chilli.png"
              alt="frame"
              style={{
                position: "absolute",
                marginTop: "-117px",
                marginLeft: "57rem",
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-706px", marginLeft: "658px" }}>
        <div style={{ position: "relative", width: "570px" }}>
          <img src="/Home_main.png" alt="Home" className="home-main-img" />
          <img src="/Delivery.png" alt="frame" className="home-delivery-img" />
          <img src="/Nearest.png" alt="frame" className="home-Nearest-img" />
          <img
            src="/Bookyourtable.png"
            alt="frame"
            className="home-Bookyourtable-img"
          />
          <img
            src="/Customerreview.png"
            alt="frame"
            className="home-Customerreview-img"
            style={{
              position: "absolute",
              top: "483px",
              left: "455px",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#065b5e",
            padding: "17px",
            position: "relative",
            marginRight: " -161px",
            marginLeft: "-820px",
            marginTop: "282px",
          }}
        >
          <img src="/Footer-img.png" alt="frame" width="82%" />
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
