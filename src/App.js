import { Fragment } from "react";
import Auth from "./UI/auth/auth";
import Backdrop from "./UI/backdrop/backdrop";

function App() {
  return (
    <Fragment>
      <Backdrop />
      <Auth />
    </Fragment>
  );
}

export default App;
