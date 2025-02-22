const EducationCard = ({ school, major, period }) => (
  <div className="flex justify-between">
    <div>
      <h3 className="font-semibold">{school}</h3>
      <p className="text-gray-600">{major}</p>
    </div>
    <span className="text-gray-500">{period}</span>
  </div>
);

export default EducationCard;
