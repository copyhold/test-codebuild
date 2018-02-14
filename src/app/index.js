import "semantic-ui-css/semantic.css";
import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery'
import { Provider } from "react-redux";

$.ajaxSetup({
    dataType: 'application/json;charset=utf-8'
});

ReactDOM.render(<h1>Hello amazon</h1>, document.getElementById( 'app' ) );
