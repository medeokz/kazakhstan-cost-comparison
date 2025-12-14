export default function QuickStats() {
  const stats = [
    { value: '17', label: 'городов в сравнении' },
    { value: '1200+', label: 'цен на продукты' },
    { value: 'Ежедневно', label: 'обновление топлива' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-4xl font-bold mb-2">{stat.value}</div>
          <div className="text-slate-600 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
