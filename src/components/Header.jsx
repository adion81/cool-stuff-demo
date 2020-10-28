import React from 'react';


const Header = (props) => {
    const headerStyle = {
        color: "rebeccapurple",
        border: "5px solid black"
    }
    return (
        <div className="header"  style={headerStyle} >
            <button className="btn btn-primary">Click Me!!!</button>
            {props.title}
        </div>
    );
}

export default Header;