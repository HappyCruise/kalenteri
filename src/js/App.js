import React from "react";
import Events from "./components/Events/index";
import Divider from "./components/Divider/index";
import Search from "./components/Search/index";
import Sort from "./components/Sort/index";
//import Test from "./components/testComp/index";

//Rendered in the index page.
const App = () => (
    <div>
        <div>
            <Search />
            <Sort />
            <Divider />
            <h2 className="white">Events</h2>
            <Events />
        </div>
    </div>
);

export default App;