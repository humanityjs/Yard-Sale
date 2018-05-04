import Dashboard from './dashboard/Dashboard.jsx';

export default [
  {
    name: 'dashboard',
    path: '/dashboard',
    secured: true,
    component: Dashboard,
    exact: true
  }
]