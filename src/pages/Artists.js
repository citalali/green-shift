import cleo from "./cleo.png";

const Artists = () => {
  return (
    <div>
      <h1>Artists</h1>
      <p>
        Here you can find all the artists that are currently registered on our
        platform.
      </p>
      <div className="artist">
        <img src={cleo} alt="Cleo" width="1200" />
      </div>
    </div>
  );
};

export default Artists;
