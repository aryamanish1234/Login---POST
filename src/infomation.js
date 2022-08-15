import React, { Component } from 'react';

const Info = [{
    Company: "Geeksynergy Technologies Pvt Ltd",
    Address: "Sanjayanagar, Bengaluru-56",
    Phone: "XXXXXXXXX09",
    Email: "XXXXXX@gmail.com"
}]


class Detailed extends Component {
    render() {
        return ( <
            div className = "Info-class" >
            <
            Info / >


            <
            /div>
        );
    }
}
export default Detailed;