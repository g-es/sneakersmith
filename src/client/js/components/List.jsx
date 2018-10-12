import React from "react";
import SingleBox from "./SingleBox";
class List extends React.Component {
    constructor(){
        super();
    }
    render(){
        // map through the array? to display
        let arr = [1,2,3];
        let testList = [];
        arr.forEach(i=>{
          testList.push(<SingleBox key={i}/>)
        })
        console.log(testList)
        return(
            <div>{testList}</div>
        )
    }
}

export default List;