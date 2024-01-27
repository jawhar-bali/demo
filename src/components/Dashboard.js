import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import data from './data.json';
import productsData from './products.json';

const Dashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Vous pouvez effectuer toute configuration nécessaire ici, mais pas besoin d'une nouvelle instance de Chart.
  }, [data]);

  const chartData = {
    labels: data.map((entry) => entry.date_created),
    datasets: [
      {
        label: 'Total',
        data: data.map((entry) => entry.total),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date Created',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total',
        },
      },
    },
  };

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = productsData.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentProducts = productsData.slice(startIndex, endIndex);

  const [sortOrder, setSortOrder] = useState('asc'); // par défaut, tri croissant

  const handleSortChange = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedProducts = currentProducts.slice().sort((a, b) => {
    const aValue = a.total_sales;
    const bValue = b.total_sales;

    if (sortOrder === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  const handlePageChange = (action) => {
    if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (action === 'next' && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <main className="main-content position-relative border-radius-lg">
      {/* Navbar */}
      {/* ... Navbar Code ... */}
      {/* End Navbar */}
      <div className="container-fluid py-4">
        <div className="row">
          {/* Cards Section */}
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            {/* Card 1 */}
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Sales</p>
                      <h5 className="font-weight-bolder">11739.99</h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">+55%</span>
                        since yesterday
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                      <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">average_order_value</p>
                      <h5 className="font-weight-bolder">124.893510638297</h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                      <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">order_count</p>
                      <h5 className="font-weight-bolder">94</h5>
                      <p className="mb-0">
                        <span className="text-danger text-sm font-weight-bolder"></span>
                        since last quarter
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                      <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">orders_by_payment_method</p>
                      <h5 className="font-weight-bolder">Carte de crédit: 94</h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder"></span>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                      <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 - Graphique en ligne */}
        <br></br>
        <div className="col-xl-10 ">
          <div className="card">
            <div className="card-body p-3">
              {/* Use the Line component from react-chartjs-2 */}
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
        <br></br>

        <div className="col-xl-10 ">
          <div className="card">
            <div className="card-body p-3">
              <button className="btn btn-primary" onClick={handleSortChange}>
                Sort by Total Sales {sortOrder === 'asc' ? '▲' : '▼'}
              </button>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Total Quantity</th>
                    <th scope="col">Total Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedProducts.map((product) => (
                    <tr key={product.name}>
                      <td>{product.name}</td>
                      <td>{product.total_quantity}</td>
                      <td>{product.total_sales}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange('prev')}>
                      Prev
                    </button>
                  </li>
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                  <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange('next')}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
