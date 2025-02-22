const ProjectCard = ({
  title,
  period,
  role,
  features,
  achievements,
  skills,
}) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold text-blue-800">{title}</h3>
      <span className="text-sm text-gray-500">{period}</span>
    </div>

    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-700">💡 담당 역할</h4>
        <p className="text-gray-600">{role}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700">🔍 구현 기능</h4>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {achievements && (
        <div>
          <h4 className="font-semibold text-gray-700">📈 성과</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
