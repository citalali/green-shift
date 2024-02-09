import landing1 from "../content/landing1.jpg";
import landing2 from "../content/landing2.png";
import landing3 from "../content/landing3.jpg";
import landing4 from "../content/landing4.jpg";
import teamImg from "../content/teamImg.png";
import pfeil from "../content/Pfeil.svg";
import circles from "../content/circles.svg";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="homeImgDiv">
        <img className="homeImg" src={landing1} alt="landing1" />
        <img className="homeImg" src={landing2} alt="landing2" />
        <img className="homeImg" src={landing3} alt="landing3" />
        <img className="homeImg" src={landing4} alt="landing4" />
      </div>
      <div className="homeAbout">
        <div className="leftAbout">
          <h2>
            About <br /> Green<strong>Shift</strong>
          </h2>
          <img className="circles" src={circles} alt="circles" />
        </div>
        <div className="rightAbout">
          <p>
            We believe in the potential of small businesses to drive positive
            change. Through our platform and app we aim to amplify their impact.
            One conscious consumer at a time. Join us in creating a greener,
            more sustainable future for all. <br /> <br /> GreenShift offers the
            map bridging the gap between small and local businesses and
            conscious consumers. Take your craft to the next level and make an
            impression.
          </p>
        </div>
      </div>
      <div className="aboutUsDiv">
        <div className="AboutUsLeft">
          {" "}
          <h2>
            About <strong>Us</strong>
          </h2>
          <img className="teamImg" src={teamImg} alt="teamImg" />
        </div>
        <div className="aboutUsRight">
          <img className="pfeil" src={pfeil} alt="pfeil" />
        </div>
        <p>
          We are a young, international and passionate design thinking team
          studying at HPI Potsdam. With backgrounds from psychology, art, film
          making, law, social work and IT. To bring customers and small business
          owners together, we created Greenshift, a mapping service where small
          businesses can create a profile and have their shops displayed on a
          map for customers to discover. With this, Greenshift helps customers
          wanting to shop more unique, local and sustainable to navigate through
          the jungle of big brands and greenwashing to find great products right
          on their doorstep. Whether app or website, Greenshift shows you where
          small businesses are in your city, what products they sell, how long
          they are open and, of course, the fastest way to get there.
        </p>
      </div>
    </>
  );
};

export default Home;
