
export const mapDashboardData = (allCounts = {}, employees = []) => {

  return {
    metaData: {
      title: "Dashboard | TOTE"
    },
    topSection: {
      allEntities: [
        {
          title: 'Total departments', count: allCounts?.departments || 0, link: '/departments'
        },
        {
          title: 'Total employees', count: allCounts?.employees || 0, link: '/employees'
        },
        {
          title: 'Total projects', count: allCounts?.projects || 0, link: '/projects'
        },
      ],
    },
    mainSection:{
      recentOrders : [
        {
          name:"ASUS i7", price: "543", payment: "344", status: "Available", statusStyle: "delivered",
        },
        {
          name: "Dell i9", price: "343", payment: "322", status: "Available", statusStyle: "delivered",
        },
        {
          name: "Macbook M2", price: "98", payment: "98", status: "Unavailable", statusStyle: "pending",
        },
        {
          name: "Lenovo Mouse", price: "654", payment: "467", status: "Available", statusStyle: "delivered",
        },
        {
          name: "HDMI Connector", price: "654", payment: "654", status: "Unavailable", statusStyle: "pending",
        },
        {
          name: "Dell Keyboard", price: "343", payment: "323", status: "Available", statusStyle: "delivered",
        },
        {
          name: "HardDisks", price: "119", payment: "119", status: "Unavailable", statusStyle: "pending",
        },
        {
          name: "Dell Mouse", price: "717", payment: "654", status: "Available", statusStyle: "delivered",
        },
        {
          name: "Acer i5", price: "321", payment: "321", status: "Unavailable", statusStyle: "pending",
        },
        {
          name: "Sony Monitor", price: "654", payment: "453", status: "Available", statusStyle: "delivered",
        },
        {
          name: "JBL Headphone", price: "654", payment: "654", status: "Unavailable", statusStyle: "pending",
        },

      ],
      recentCustomers: employees?.map((employee)=> ({
        id: employee?._id,
        name: employee?.name,
        email: employee?.email
      })) || [],
    }
  }
}