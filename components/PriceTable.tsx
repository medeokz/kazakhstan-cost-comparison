'use client';

import { useState } from 'react';

const cities = ['Алматы', 'Астана', 'Шымкент'];

const products = [
  { name: 'Хлеб', price: 200, category: 'Базовые' },
  { name: 'Молоко 1л', price: 420, category: 'Молочные' },
  { name: 'Яйца 10 шт', price: 520, category: 'Базовые' },
  { name: 'Курица 1кг', price: 1200, category: 'Мясо' },
  { name: 'Рис 1кг', price: 450, category: 'Крупы' },
  { name: 'Картофель 1кг', price: 180, category: 'Овощи' },
  { name: 'Помидоры 1кг', price: 850, category: 'Овощи' },
  { name: 'Сыр 1кг', price: 2500, category: 'Молочные' },
];

export default function PriceTable() {
  const [selectedCity, setSelectedCity] = useState('Алматы');

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Цены на продукты</h2>
      
      <select 
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="w-full md:w-64 p-3 border border-slate-300 rounded-xl mb-4"
      >
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-4 text-left">Продукт</th>
              <th className="p-4 text-left">Цена (₸)</th>
              <th className="p-4 text-left">Категория</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr 
                key={index}
                className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <td className="p-4">{product.name}</td>
                <td className="p-4 font-medium">{product.price}</td>
                <td className="p-4 text-slate-600">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
