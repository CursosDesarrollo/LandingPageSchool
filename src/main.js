import "./scss/configBootstrap.scss";
import {Offcanvas} from "bootstrap";
import {app} from "./app";
import {helpElement} from "./helpers/helpElement";
import {helpResize} from "./helpers/helpResize";
import {helpExecFunctions} from "./helpers/helpExecFunctions";

const root = document.getElementById("root");
root.innerHTML = app();
helpResize(helpElement());
helpExecFunctions.execFunctions();
