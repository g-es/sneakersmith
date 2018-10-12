import React from "react";
import SingleBox from "./SingleBox";
class List extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        // map through the array? to display
        let arr = this.props.listing;
        let testList = [];
        arr.forEach(i=>{
          testList.push(<SingleBox key={i} content={i}/>)
        })
        return(
          <div>{testList}</div>
        )
    }
}

export default List;