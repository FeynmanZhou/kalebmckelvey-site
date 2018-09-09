import React, { Component } from "react";
import ServicesData from "../../../data/ServicesData";
import ServiceList from "../ServiceList/ServiceList";

// styling
import "./Services.scss";

class Services extends Component {
  render() {
    return (
      <div className="services-wrapper wrapper-flex-column--center  mobile-fix">
        <ServiceList services={ServicesData} />
      </div>
    );
  }
}

export default Services;
