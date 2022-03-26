import React from "react";
console.log('React is', React)
class Greeter extends React.Component {
     render() {
          return(
               <>
                    <h2>Hello Again! {this.props.name}</h2>
                    <h4>I am {this.props.age} years old</h4>
                    <p>{this.props.name} is here to help you</p>
               </>

          );
     }
}

export default Greeter;