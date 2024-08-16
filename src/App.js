import React, { useState, useEffect } from 'react';
import EmployeeTable from './Employee';
import Pagination from './Pagination';
import axios from 'axios';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching the employee data:', error);
        alert('Failed to fetch data'); 
      }
    };

    fetchEmployees();
  }, []);

  // Get current employees
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-center">Employee Data Table</h1>
      <EmployeeTable employees={currentEmployees} />
      <Pagination
        employeesPerPage={employeesPerPage}
        totalEmployees={employees.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
