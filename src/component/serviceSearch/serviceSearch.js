import React, { PureComponent } from "react";
import "./serviceSearch.css";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux'

class ServiceSearch extends PureComponent {
  render() {
    const service_serach_arr = [
      "News paper Vendor machine",
      "Office sercetary",
      "Social studies class teacher",
      "Computer Scientist",
    ];
    const service_serach_arr_list = service_serach_arr.map((elem, n) => {
      return (
        <div className="serviceSearch_body_inner" key={`${n}-service-search`}>
          <Link className="Link" to={{ pathname: `/services/${n}` }}>
            <div className="serviceSearch_body_inner_icon">
              <i className="material-icons history"></i>
            </div>
            <div className="serviceSearch_body_inner_div">
              <span>{elem}</span>
            </div>
          </Link>
        </div>
      );
    });
    let min_height;
    if (this.props.height) {
      min_height = this.props.height;
    } else {
      min_height = "calc(var(--vvh, 1vh) * 100)";
    }
    return (
      <div className="serviceSearch_wrapper" style={{ minHeight: min_height }}>
        {2 * 22 === 4 ? (
          <div className="serviceSearch_noSerach">
            Your recent searches will show here
          </div>
        ) : (
          <div className="serviceSearch_body">{service_serach_arr_list}</div>
        )}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default ServiceSearch;
