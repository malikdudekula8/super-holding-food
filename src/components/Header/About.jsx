import {
  AboutDescription,
  AboutHappyCustomer,
  AboutTitle,
  GustExperience,
  GustSatisfactions,
} from "../ResturentContext/Context";
import StarIcon from "@mui/icons-material/Star";

function About() {
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          overflow: "hidden",
          marginTop: "99px",
          marginLeft: "87px",
        }}
      >
        <video
          autoPlay
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="food-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="page-content p-8"
        style={{ position: "relative", top: "-545px", lineHeight: "4" }}
      >
        <img src="/Aboutus.png" alt="frame" />
        <h2
          className="text-6xl font-bold text-left"
          style={{ paddingLeft: "45%", paddingBottom: "26px" }}
        >
          {AboutTitle}
        </h2>
        <p
          className="text-left"
          style={{
            lineHeight: "2",
            paddingLeft: "45%",
          }}
        >
          {AboutDescription}
        </p>
        <div
          className="flex gap-8"
          style={{ marginLeft: "46%", columnGap: "20%" }}
        >
          <div className="flex flex-col stat-box">
            <span className="stat-number text-[#FF4033]">10k+</span>
            <span className="stat-sub-number">{AboutHappyCustomer}</span>
          </div>

          <div className="flex flex-col stat-box">
            <span className="stat-number text-[#065b5e]">98+</span>
            <span className="stat-sub-number">{GustSatisfactions}</span>
          </div>

          <div className="flex flex-col stat-box">
            <span className="stat-number text-[#FFE100] gap-1 items-center">
              5-
              <StarIcon
                sx={{ color: "#FFE100", fontSize: "40", fontSize: "smaller" }}
              />
            </span>
            <span className="stat-sub-number">{GustExperience}</span>
          </div>
        </div>
        <div style={{ lineHeight: "normal", fontSize: "15px" }}>
          <h3 style={{ marginBlockEnd: "0" }}>Malik Dudekula</h3>
          <span
            className="ash-underline"
            style={{ paddingRight: "7%", fontSize: "smaller" }}
          >
            Owner
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
