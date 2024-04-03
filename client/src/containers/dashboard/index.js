import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MetaTags from '../../components/meta-tags';
import { mapDashboardData } from '../../data/dashboardData.js';
import MainSection from './main-section.js';
import TopSection from './top-section.js';
import './styles.scss';
import Loader from '../../components/loader';
import { getAllEmployees } from '../../services/employees/allEmployees';
import { getAllDepartments } from '../../services/departments/departments';
import { getListProjects } from '../../services/projects/projects';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(mapDashboardData());
  const [departmentCount,setDepartmentCount]=useState(0);
  const [projectCount,setProjectCount]=useState(0);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const syncDashboard = async () => {
    setLoading(true);
    const response = await getAllEmployees();
    let departments=await getAllDepartments();
    let projects =await getListProjects();
    projects=projects.response
    departments=departments.response;
    setDepartmentCount(departments.length);
    setProjectCount(projects.length)
console.log(departmentCount)
    setDashboardData(mapDashboardData({}, response.body.data));
    setLoading(false);
  };
  
  useEffect(()=> {
    syncDashboard();
  }, []);

  return ( isLoading ? <Loader/> :
    <div className='dashboard-page'>
      <div className="dashboard-container">
        <MetaTags
          {...dashboardData.metaData}
        />
        <TopSection
          {...dashboardData.mainSection} departmentCount={departmentCount} projectCount={projectCount} navigate={navigate}
        />
        <MainSection 
          {...dashboardData.mainSection}
        />
      </div>
    </div>
  )
}

export default Dashboard
