import "./App.css";

function App() {
  const incomeHeights = [150, 180, 135, 170, 145, 180, 160, 150, 178, 148, 168, 138];
  const outcomeHeights = [95, 75, 110, 88, 108, 112, 86, 104, 78, 102, 120, 114];

  return (
    <div className="page-bg">
      <div className="app-shell">
        <aside className="sidebar">
          <div>
            <div className="brand">
              <div className="brand-logo">MM</div>
              <div className="brand-text">
                <span className="brand-title">Margin Monitor</span>
              </div>
            </div>

            <nav className="sidebar-nav">
              <div className="nav-item active">Dashboard</div>
              <div className="nav-item">Transactions</div>
              <div className="nav-item">History</div>
              <div className="nav-item">Exchange</div>
              <div className="nav-item">Payments</div>
              <div className="nav-item">Notifications</div>
              <div className="nav-item">Settings</div>
            </nav>
          </div>

          <div className="sidebar-user">
            <div className="user-avatar">IA</div>
            <div className="user-meta">
              <div className="user-name">Idil Abdikadir</div>
              <div className="user-email">idilabdikadir@marginmonitor.com</div>
            </div>
          </div>
        </aside>

        <main className="dashboard">
          <header className="topbar">
            <div className="search-wrap">
              <span className="search-icon">⌕</span>
              <input className="search" placeholder="Search exposures" readOnly />
            </div>

            <div className="topbar-actions">
              <div className="icon-button">◐</div>
              <div className="icon-button">☼</div>
              <div className="icon-button">•</div>
            </div>
          </header>

          <section className="content-grid">
            <div className="panel panel-large">
              <div className="panel-header">
                <div>
                  <h2>Money Flow</h2>
                  <div className="legend">
                    <span>
                      <i className="dot income"></i>
                      Income
                    </span>
                    <span>
                      <i className="dot outcome"></i>
                      Outcome
                    </span>
                  </div>
                </div>
                <span className="panel-menu">⋮</span>
              </div>

              <div className="chart-area">
                <div className="chart-scale">
                  <span>50K</span>
                  <span>40K</span>
                  <span>30K</span>
                  <span>20K</span>
                  <span>10K</span>
                  <span>0</span>
                </div>

                <div className="bars-wrap">
                  {incomeHeights.map((height, index) => (
                    <div className="bar-group" key={index}>
                      <div className="bar income-bar" style={{ height: `${height}px` }}></div>
                      <div
                        className="bar outcome-bar"
                        style={{ height: `${outcomeHeights[index]}px` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="months">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                  (month) => (
                    <span key={month}>{month}</span>
                  )
                )}
              </div>
            </div>

            <div className="right-stack">
              <div className="panel card-panel">
                <div className="panel-header">
                  <h2>My Cards</h2>
                  <span className="show-link">Show All →</span>
                </div>

                <div className="bank-card">
                  <div className="card-chip-row">
                    <span className="card-brand">Margin Monitor</span>
                    <span className="card-number-small">•••• 3456</span>
                  </div>

                  <div className="card-balance-label">Total Balance</div>
                  <div className="card-balance">86 320.25 USD</div>
                </div>

                <div className="card-actions">
                  <button>Send</button>
                  <button>Request</button>
                </div>
              </div>

              <div className="panel breakdown-panel">
                <div className="panel-header">
                  <h2>Expense Breakdown</h2>
                  <span className="panel-menu">⋮</span>
                </div>

                <div className="expense-total">$64,900</div>
                <div className="expense-subtext">Compared to $8,900 last month</div>

                <div className="line-chart">
                  <div className="line-svg line-one"></div>
                  <div className="line-svg line-two"></div>
                  <div className="line-svg line-three"></div>
                </div>

                <div className="breakdown-list">
                  <div className="breakdown-row">
                    <span>
                      <i className="dot outcome"></i>Bills
                    </span>
                    <span>$34,600</span>
                  </div>
                  <div className="breakdown-row">
                    <span>
                      <i className="dot income"></i>Subscriptions
                    </span>
                    <span>$18,300</span>
                  </div>
                  <div className="breakdown-row">
                    <span>
                      <i className="dot purple"></i>Food &amp; Dining
                    </span>
                    <span>$12,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel table-panel">
              <div className="panel-header">
                <h2>Transaction History</h2>
                <div className="header-actions">
                  <button className="small-button">Select dates</button>
                  <button className="small-button">Apply filter</button>
                </div>
              </div>

              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Prime Brokerage Fee</td>
                    <td className="negative">-$18.99</td>
                    <td>Wed 1:00 PM</td>
                    <td>
                      <span className="tag">Fees</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Client Deposit</td>
                    <td className="positive">+$120.00</td>
                    <td>Wed 10:45 AM</td>
                    <td>
                      <span className="tag">Income</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Clearing Charge</td>
                    <td className="negative">-$4.50</td>
                    <td>Wed 3:20 AM</td>
                    <td>
                      <span className="tag">Operations</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Collateral Transfer</td>
                    <td className="positive">+$88.00</td>
                    <td>Tue 2:45 AM</td>
                    <td>
                      <span className="tag">Transfer</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Market Data Subscription</td>
                    <td className="negative">-$15.00</td>
                    <td>Tue 6:10 PM</td>
                    <td>
                      <span className="tag">Subscriptions</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;