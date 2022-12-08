import React from "react";
import Navbar from "./Navbar"
 
export default class Layout extends React.Component {
    render() {
        return (
        <>
            <Navbar updateNavHeightOffset={this.props.updateNavHeightOffset} />
            <main>{this.props.children}</main>
        </>
       )
    }
}
 