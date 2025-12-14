'use client';

import { useState } from 'react';

const cities = ['Алматы', 'Астана', 'Шымкент'];

export default function Header() {
  const [selectedCity, setSelectedCity] = useState('Алматы');
  const [salary, setSalary] = useState('');

  const handleCalculate = () => {
    if (!salary) {
      alert('Пожалуйста, введите зарплату');
      return;
    }
    const salaryNum = parseInt(salary);
    const expenses = 310000;
    const balance = salaryNum - expenses;
    
    alert(`В городе ${selectedCity}:\nВаша зарплата: ${salaryNum.toLocaleString()} ₸\nМинимальные расходы: ${expenses.toLocaleString()} ₸\nОстаток: ${balance.toLocaleString()} ₸`);
  };

  return (
    <header className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-2">Где дешевле жить в Казахстане</h1>
        <p className="opacity-80 mb-8">Сравнение цен, топлива, кредитов и расчет — хватит ли зарплаты</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Калькулятор */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Калькулятор жизни</h2>
            
            <label className="block mb-2 text-sm font-medium">Ваш город</label>
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl mb-4"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <label className="block mb-2 text-sm font-medium">Зарплата (₸)</label>
            <input 
              type="number" 
              placeholder="Введите доход"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl mb-4"
            />

            <button 
              onClick={handleCalculate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-medium transition-colors"
            >
              Хватит ли моей зарплаты?
            </button>
          </div>

          {/* Статистика */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Средние показатели</h2>
            <p className="font-medium mb-3">Алматы</p>
            <ul className="space-y-2">
              <li>💰 Средняя зарплата: <b>420 000 ₸</b></li>
              <li>🛒 Минимальные расходы: <b>310 000 ₸</b></li>
              <li>📉 Остаток: <b className="text-green-600">110 000 ₸</b></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
