import React, { Component } from 'react';
import Header from '@/partials/Header';
import SideBar from '@/partials/SideBar';
import '@/scss/dashboard.scss';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="sidebar-div">
          <SideBar />
        </div>
        <div className="main-div">
          <Header />
          <div className="main-container">
            Dashboard
          </div>
        </div>
      </div>
    )
  }
}
