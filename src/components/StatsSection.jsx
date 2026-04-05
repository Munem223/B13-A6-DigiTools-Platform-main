function StatsSection() {
  const stats = [
    { id: 1, value: "50K+", label: "Active Users" },
    { id: 2, value: "200+", label: "Premium Tools" },
    { id: 3, value: "4.9", label: "Average Rating" },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-700 to-fuchsia-600">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-3 text-center text-white">
        {stats.map((stat) => (
          <div key={stat.id} className="py-8 border-b sm:border-b-0 sm:border-r last:border-r-0 border-white/20">
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm mt-2 text-purple-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;