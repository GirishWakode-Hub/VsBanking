import React from 'react';
const FinanceTypes = () => {
  const financeTypes = [
    {
      id: 1,
      title: "Personal Finance",
      icon: "fas fa-user",
      contentIcon: "fas fa-wallet",
      description: "Deals with managing an individual's money, including income, savings, expenses, investments, insurance, and retirement planning.",
      features: [
        "Budgeting and expense tracking",
        "Loan repayment strategies",
        "Tax planning and optimization",
        "Retirement planning",
        "Insurance coverage assessment"
      ]
    },
    {
      id: 2,
      title: "Corporate Finance",
      icon: "fas fa-building",
      contentIcon: "fas fa-chart-line",
      description: "Focuses on how businesses raise capital and allocate it to various operations to maximize company value.",
      features: [
        "Capital budgeting and allocation",
        "Capital structure optimization",
        "Working capital management",
        "Mergers and acquisitions",
        "Financial risk management"
      ]
    },
    {
      id: 3,
      title: "Public Finance",
      icon: "fas fa-landmark",
      contentIcon: "fas fa-globe-americas",
      description: "Involves the management of a country's income, expenditure, and debt to meet public needs and ensure economic stability.",
      features: [
        "Taxation policies and implementation",
        "Government budgeting",
        "Public debt management",
        "Infrastructure funding",
        "Social welfare programs"
      ]
    },
    {
      id: 4,
      title: "Equity Finance",
      icon: "fas fa-chart-bar",
      contentIcon: "fas fa-handshake",
      description: "Raises capital by selling ownership stakes in businesses, allowing investors to share profits but also take on risk.",
      features: [
        "Initial Public Offerings (IPOs)",
        "Private equity investments",
        "Venture capital funding",
        "Dividend distribution",
        "Shareholder rights management"
      ]
    },
    {
      id: 5,
      title: "Debt Finance",
      icon: "fas fa-file-invoice-dollar",
      contentIcon: "fas fa-money-check-alt",
      description: "Involves borrowing funds that must be repaid with interest, allowing businesses and individuals to leverage capital for growth.",
      features: [
        "Bank loans and credit facilities",
        "Corporate and government bonds",
        "Commercial papers",
        "Credit risk assessment",
        "Debt restructuring"
      ]
    },
    {
      id: 6,
      title: "Social Finance",
      icon: "fas fa-hands-helping",
      contentIcon: "fas fa-leaf",
      description: "Focuses on investments that yield social or environmental benefits alongside financial returns.",
      features: [
        "Social impact bonds",
        "Community investment projects",
        "ESG (Environmental, Social, Governance) investing",
        "Microfinance initiatives",
        "Philanthropic investments"
      ]
    },
    {
      id: 7,
      title: "Behavioral Finance",
      icon: "fas fa-brain",
      contentIcon: "fas fa-user-friends",
      description: "Studies how psychological factors influence financial decisions and market outcomes.",
      features: [
        "Investor psychology analysis",
        "Herd behavior studies",
        "Overconfidence and bias research",
        "Emotional investing patterns",
        "Decision-making frameworks"
      ]
    },
    {
      id: 8,
      title: "International Finance",
      icon: "fas fa-globe",
      contentIcon: "fas fa-exchange-alt",
      description: "Addresses monetary interactions between nations, including trade, investment flows, and currency management.",
      features: [
        "Foreign exchange management",
        "International trade finance",
        "Cross-border investments",
        "Global economic stability",
        "Currency risk hedging"
      ]
    }
  ];

  return (
    <div className="finance-types-page">
      {/* Hero Section for Finance Types */}
      <section className="page-hero">
        <div className="container">
          <h1>Explore Finance Types</h1>
          <p>Understand different financial domains and how they can help you achieve your financial goals</p>
        </div>
      </section>

      {/* Finance Types Grid */}
      <section className="finance-types-detailed">
        <div className="container">
          <div className="section-title">
            <h2>Comprehensive Finance Categories</h2>
            <p>Discover the various domains of finance and their applications in personal, corporate, and global contexts</p>
          </div>
          
          <div className="finance-grid-detailed">
            {financeTypes.map(type => (
              <div key={type.id} className="finance-card-detailed">
                <div className="finance-icon-detailed">
                  <i className={type.icon}></i>
                </div>
                <div className="finance-content-detailed">
                  <h3><i className={type.contentIcon}></i> {type.title}</h3>
                  <p>{type.description}</p>
                  <ul className="finance-features-detailed">
                    {type.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="finance-comparison">
        <div className="container">
          <div className="section-title">
            <h2>Finance Types Comparison</h2>
            <p>Quick reference guide to understand different finance domains and their applications</p>
          </div>
          <div className="comparison-table-container">
            <table className="comparison-table-detailed">
              <thead>
                <tr>
                  <th>Type of Finance</th>
                  <th>Key Focus</th>
                  <th>Typical Use Cases</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Personal Finance</strong></td>
                  <td>Managing personal income, spending, and savings</td>
                  <td>Budgeting, investing, loans, retirement planning</td>
                </tr>
                <tr>
                  <td><strong>Corporate Finance</strong></td>
                  <td>Managing company capital and value</td>
                  <td>Raising funds, mergers, asset management</td>
                </tr>
                <tr>
                  <td><strong>Public Finance</strong></td>
                  <td>Managing government revenue and spending</td>
                  <td>Taxes, infrastructure, social programs</td>
                </tr>
                <tr>
                  <td><strong>Equity Finance</strong></td>
                  <td>Selling shares for funding</td>
                  <td>Business expansion, startup funding</td>
                </tr>
                <tr>
                  <td><strong>Debt Finance</strong></td>
                  <td>Borrowing with repayment obligation</td>
                  <td>Loans, bonds, credit facilities</td>
                </tr>
                <tr>
                  <td><strong>Social Finance</strong></td>
                  <td>Impact-driven investment</td>
                  <td>Nonprofit and community projects</td>
                </tr>
                <tr>
                  <td><strong>Behavioral Finance</strong></td>
                  <td>Psychology in financial decisions</td>
                  <td>Investor behavior studies, market analysis</td>
                </tr>
                <tr>
                  <td><strong>International Finance</strong></td>
                  <td>Global financial interactions</td>
                  <td>Trade finance, foreign investment, currency exchange</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="finance-cta">
        <div className="container">
          <h2>Ready to Apply These Finance Principles?</h2>
          <p>Our financial experts can help you navigate these finance domains and create a strategy tailored to your needs.</p>
          <a href="/contact" className="cta-button-light">Consult Our Experts</a>
        </div>
      </section>
    </div>
  );
};

export default FinanceTypes;