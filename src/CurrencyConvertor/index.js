import React, { useState } from 'react';
import { Card, Select, Button, Input } from 'antd';
import './Convertor.css'; // Подключите файл стилей Convertor.css

const { Option } = Select;

const Convertor = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [amountInSom, setAmountInSom] = useState('');
  const [convertedResult, setConvertedResult] = useState('');

  const exchangeRates = {
    USD: 89.18,
    EUR: 95.69,
    RUB: 0.983,
    KZT: 0.1323,
    Shaurma: 200,
    Kurut: 10,
    Nan: 25,
    Shoro: 15,
    ToyBossSandwich: 85,
  };

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleAmountChange = (e) => {
    setAmountInSom(e.target.value);
  };

  const convertCurrencyToSom = () => {
    const selectedPrice = exchangeRates[selectedValue];

    if (selectedPrice && amountInSom) {
      const convertedResult = (amountInSom / selectedPrice).toFixed(2);
      setConvertedResult(`Your amount is equal to ${convertedResult} ${selectedValue}`);
    }
  };

  const convertSomToCurrency = () => {
    const selectedPrice = exchangeRates[selectedValue];

    if (selectedPrice && amountInSom) {
      const convertedResult = (amountInSom * selectedPrice).toFixed(2);
      setConvertedResult(`Your amount is equal to ${convertedResult} KGS of ${selectedValue}`);
    }
  };

  return (
    <div className="convertor-container">
      <Card title="Currency and Food Converter" className="converter-card">
        <div className="input-section">
          <Input
            type="number"
            placeholder="Amount in KGS"
            value={amountInSom}
            onChange={handleAmountChange}
            className="amount-input"
          />
          <Select
            onChange={handleValueChange}
            value={selectedValue}
            placeholder="Select Currency or Food"
            className="value-select"
            dropdownMatchSelectWidth={false}
            style={{ minWidth: '400px' }}
          >
            {Object.keys(exchangeRates).map((value) => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
          <div className="button-section">
            <Button
              type="primary"
              size="large"
              onClick={convertCurrencyToSom}
              className="convert-button"
            >
              Convert from KGS
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={convertSomToCurrency}
              className="convert-button"
            >
              Convert to KGS
            </Button>
          </div>
        </div>
        {convertedResult && (
          <div className="result-section">
            <p>{convertedResult}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Convertor;
