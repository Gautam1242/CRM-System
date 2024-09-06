// components/StatCard.js
export default function StatCard({ title, value, icon }) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-black">{title}</h3>
          <p className="text-3xl font-semibold text-black">{value}</p>
        </div>
        <div className="text-blue-500 text-4xl">{icon}</div>
      </div>
    );
  }
  