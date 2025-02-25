import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
 
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
 
Layout.propTypes = {
    logos: PropTypes.object,
    children: PropTypes.element,
    updateNavHeightOffset: PropTypes.func
};