const AwardCard = ({ title, organizer, date, description }) => (
  <div className="rounded-lg bg-gray-50 p-4">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="font-semibold text-blue-800">{title}</h3>
        <p className="text-gray-600">주최: {organizer}</p>
      </div>
      <span className="text-gray-500">{date}</span>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AwardCard;
