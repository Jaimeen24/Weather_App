// import React from 'react';
// import { Input } from 'antd';

// const searchCity = (props) => {

//     const { Search } = Input;

//     // const handleChangeValue = e =>{
//     //     // let y=e.target.value;
//     //     //  this.props.onset_searchValue(y);
//     //     this.setState({value: e.target.value});
//     // }

//     const onSearch = value => console.log("");
//     return (
//         <div>
//             <Search 
//                 placeholder="Enter City Zip Code" 
//                 onSearch={onSearch}
//                 value={props.value}
//                 onChange={props.onChangeValue}
//                 // onChangeValue={handleChangeValue}
//                 />
//         </div>
//     )
// };

// export default searchCity;

import React, { Component } from 'react';
 
class SearchCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
  }
 
  // handle input change event
  onInputChange(e) {
    this.setState({ zipcode: e.target.value });
  }
 
  // handle button click event and pass data in parent
  hanldeSubmit() {
    this.props.handleInput(this.state.zipcode);
  }
 
  render() {
    return (
      <div>
        Enter City ZipCode:
        <input value={this.state.zipcode} onChange={this.onInputChange}/>
        <input type="button" value="Submit" onClick={this.hanldeSubmit} />
      </div>
    );
  }
}
 
export default SearchCity;