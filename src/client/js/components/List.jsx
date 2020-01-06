import React from 'react';
import SingleBox from './SingleBox';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr = this.props.listing;
    const testList = [];
    arr.forEach((i) => {
      testList.push(<SingleBox key={i.lid} content={i} />);
    });
    return (
      <div>
        {testList}
      </div>
    );
  }
}

export default List;
