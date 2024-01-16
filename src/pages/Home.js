import google from "./googlePlay.avif";
import appstore from "./appStore.png";

const Home = () => {
  return (
    <>
      <p>This is a page about Shopping locally</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <h3>download the app here</h3>
        <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.maps&hl=de&gl=US">
          <img src={google} alt="googlePlay" height="100" />
        </a>
        <a href="https://www.apple.com/de/app-store/">
          <img src={appstore} alt="appStore" height="100" />
        </a>
      </div>
    </>
  );
};

export default Home;
