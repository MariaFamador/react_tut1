import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);