import React, { Component } from 'react';
import FormGroup from '@/partials/FormGroup'
import '@/scss/sidebar.scss';

export default class Sidebar extends Component {
  onChange = (e) => {
    console.log(e.target.value)
  }
  render() {
    const options = [
      { label: 'Good', value: 'good' },
      { label: 'Fair', value: 'fair' },
      { label: 'Bad', value: 'bad' }
    ]
    return (
      <div className="sidebar">
        <div className="logo">
          <img src={"/assets/imgs/andela-logo.png"} />
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">Left Overs</a></li>
          </ul>
        </div>
        <div className="filters">
          <h2>Filters</h2>
          <FormGroup
            type="dropdown"
            name="condition"
            label="condition"
            placeholder="Select Condition"
            callback={this.onChange}
            options={options}
          />
          <FormGroup
            type="dropdown"
            name="condition"
            label="Category"
            placeholder="Select Condition"
            callback={this.onChange}
            options={options}
          />
        </div>
      </div>
    )
  }
}
