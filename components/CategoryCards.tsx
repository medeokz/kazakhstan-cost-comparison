export default function CategoryCards() {
  const categories = [
    { emoji: '🛒', title: 'Продукты', description: 'Где дешевле еда по городам' },
    { emoji: '⛽', title: 'Топливо', description: 'Бензин и газ по регионам' },
    { emoji: '🏦', title: 'Кредиты', description: 'Kaspi, Halyk, Forte' },
    { emoji: '📊', title: 'Сравнения', description: 'Города и расходы' },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      {categories.map((category, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform cursor-pointer"
        >
          <h3 className="text-xl font-bold mb-2">
            {category.emoji} {category.title}
          </h3>
          <p className="text-slate-600 text-sm">{category.description}</p>
        </div>
      ))}
    </div>
  );
}
