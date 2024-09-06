// components/TimeSelector.js
export default function TimeSelector({ onSelectTime }) {
    return (
      <div className="flex space-x-4 mb-6">
        {['1 day', '1 week', '1 month'].map((time) => (
          <button
            key={time}
            onClick={() => onSelectTime(time)}   // Pass the selected time to the parent
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {time}
          </button>
        ))}
      </div>
    );
  }
  