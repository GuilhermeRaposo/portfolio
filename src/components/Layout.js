import React from "react";
import Navbar from "./Navbar";
 
export default class Layout extends React.Component {
    render() {
        return (
            <>
                <Navbar logos={this.props.logos} updateNavHeightOffset={this.props.updateNavHeightOffset} />
                <main>{this.props.children}</main>
            </>
        );
    }
}
 