import React, { useState } from "react";

// COMPONENTS
import NavForViewer from "./NavForViewer";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

function Navbar(props) {
  const [state, setstate] = useState(false);

  const drawerToggleClickHnadler = () => {
    setstate(!state);
  };
  const backDropHandler = () => {
    setstate(false);
  };

  return (
    <div>
      <NavForViewer
        drawerToggleClickHnadler={drawerToggleClickHnadler}
        currentUser={props.currentUser}
        isLogedIn={props.isLogedIn}
      />
      <SideDrawer
        show={state}
        clear={drawerToggleClickHnadler}
        currentUser={props.currentUser}
        isLogedIn={props.isLogedIn}
      />
      <BackDrop click={backDropHandler} drawer={state} />
    </div>
  );
}

export default Navbar;
