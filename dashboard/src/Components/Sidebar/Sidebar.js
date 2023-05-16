import logo from './logo.svg';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="content">
        <img src={logo} className="applogo" alt="logo" />
        <div>
          <a href="#">Jobs</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
