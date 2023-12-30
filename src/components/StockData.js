
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


const StockData = () => {
    const [stockData, setStockData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/data')
            .then((response) => response.json())
            .then((json) => setStockData(json));
    }, []);
    return (
        <>
            <div>
                <h2>Stock Data</h2>
                <div className="row">
                    {stockData.map((stock) => (
                        <div className="col-md-4 py-2" key={stock.symbol}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{stock.symbol}</h5>
                                    <p className="card-text">Price: <FontAwesomeIcon icon={faDollarSign} /> {stock.lastPrice}</p>
                                    {/* if change greater than 0 green else red in badge */}
                                    <p className="card-text">Change: {stock.change > 0 ? <span className="badge bg-success">{stock.change} <FontAwesomeIcon icon={faArrowUp} /></span> : <span className="badge bg-danger">{stock.change} <FontAwesomeIcon icon={faArrowDown} /></span>}</p>
                                    {/* if pChange greater than 0 green else red in badge */}
                                    <p className="card-text">% Change: {stock.pChange > 0 ? <span className="badge bg-success">{stock.pChange}</span> : <span className="badge bg-danger">{stock.pChange}</span>}</p>
                                    <p className="card-text">Volume: {stock.totalTradedVolume}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default StockData;


