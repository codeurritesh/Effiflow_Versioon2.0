import React from 'react';

const TopSection = ({recentCustomers,recentOrders,departmentCount,projectCount}) => {
  return (
    <div className="top-section">
    <div className="cardBox">
      <div className="card">
        <div>
            <div className="numbers">{recentCustomers.length}</div>
            <div className="cardName">Employees</div>
        </div>
        <div className="iconBx">
            <ion-icon name="eye-outline"></ion-icon>
        </div>
      </div>

      <div className="card">
          <div>
              <div className="numbers">{recentOrders.length}</div>
              <div className="cardName">Assets</div>
          </div>
          <div className="iconBx">
              <ion-icon name="cart-outline"></ion-icon>
          </div>
      </div>

      <div className="card">
          <div>
              <div className="numbers">{projectCount}</div>
              <div className="cardName">Projects</div>
          </div>
          <div className="iconBx">
              <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
      </div>

      <div className="card">
          <div>
              <div className="numbers">{departmentCount}</div>
              <div className="cardName">Departments</div>
          </div>
          <div className="iconBx">
              <ion-icon name="cash-outline"></ion-icon>
          </div>
      </div>
    </div>
    </div>
  )
}

export default TopSection;
