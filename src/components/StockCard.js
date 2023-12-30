
// Import the necessary libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDollarSign, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

// Define a functional component to display stock data in cards
const StockCard = ({ symbol, price, change }) => {
  return (
    <div className="stock-card">
      <div className="stock-icon">
        <FontAwesomeIcon icon={faChartLine} />
      </div>
      <div className="stock-info">
        <div className="stock-symbol">{symbol}</div>
        <div className="stock-price">{price}</div>
        <div className={`stock-change ${change > 0 ? 'positive' : 'negative'}`}>
          {change > 0 ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}
          {change}
        </div>
      </div>
      <div className="stock-currency">
        <FontAwesomeIcon icon={faDollarSign} />
      </div>
    </div>
  );
};

export default StockCard;
