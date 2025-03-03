import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  title,
  headCount,
  memberRole,
  period,
  role,
  features,
  achievements,
  skills,
  repositories,
  onShowDetail,
}) => {
  // Skills를 7개씩 그룹으로 나누기
  const skillGroups = [];
  for (let i = 0; i < skills.length; i += 7) {
    skillGroups.push(skills.slice(i, i + 7));
  }

  return (
    <div className="p-6 space-y-4 rounded-lg shadow-sm bg-gray-50">
      <div className="flex items-start justify-between">
        <div className="flex-col items-center space-y-1">
          <h3 className="text-xl font-bold text-blue-800">{title}</h3>
          <p className="text-sm text-gray-600">
            팀원 수 : {headCount}명({memberRole})
          </p>
        </div>
        <span className="text-sm text-gray-500">{period}</span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700">🧑🏻‍💻 담당 역할 : {role}</h4>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">🔍 구현 기능</h4>
          <ul className="pl-5 space-y-2 text-gray-600 list-disc">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {achievements && (
          <div>
            <h4 className="font-semibold text-gray-700">📈 성과</h4>
            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills 그룹별로 렌더링 (7개씩) */}
        <div className="space-y-2">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-wrap gap-2">
              {group.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full shrink-0"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Repositories + 자세히 보기 버튼을 같은 줄에 배치 (아래쪽) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            {(repositories || []).map((repository, index) => (
              <Link
                key={index}
                href={repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Image
                  src="assets/github-mark.svg" // public 폴더에 있는 SVG 경로
                  alt="GitHub"
                  width={16} // 원하는 width 크기
                  height={16} // 원하는 height 크기
                  className="w-4 h-4"
                />{" "}
                {repository.name}
              </Link>
            ))}
          </div>

          {/* 버튼을 오른쪽으로 정렬 */}
          <button
            onClick={onShowDetail}
            className="px-4 py-2 ml-auto text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            자세히 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
