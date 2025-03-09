"use client";

import { useState } from "react";
import React from "react";
import {
  Code2,
  Terminal,
  Database,
  Cloud,
  LinkIcon,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import EducationCard from "@/components/EducationCard";
import CertificateCard from "@/components/CertificateCard";
import AwardCard from "@/components/AwardCard";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import Footer from "@/components/Footer";
import { mansumugangDetail } from "@/data/mansumugangDetails";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1">
        <Navigation />
        <main className="flex items-center justify-center flex-1 w-full p-4 md:p-8 md:ml-64">
          <div className="w-full max-w-4xl space-y-12">
            {/* Header Section */}
            <header className="space-y-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                {/* Profile Image */}
                <div className="relative flex-shrink-0 w-40 mx-auto overflow-hidden rounded-lg h-52 md:mx-0">
                  <Image
                    src="assets/profileImage.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex-grow mt-4 space-y-4 md:mt-0">
                  <div className="flex-col justify-between">
                    <div>
                      <h1 className="text-4xl font-bold text-center md:text-left">
                        정성훈
                      </h1>
                    </div>

                    <div className="mt-16 space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>2000tjdgns@naver.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>010-6209-6156</span>
                      </div>
                      <Link
                        href="https://github.com/JSH0905"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                      >
                        <Image
                          src="assets/github-mark.svg"
                          alt="GitHub"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* About Me Section */}
            <section id="about" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">
                저는 이런 사람입니다!
              </h2>
              <div className="space-y-6 prose text-gray-600 max-w-none">
                <div>
                  <p className="text-lg text-black">[오류를 즐기는 개발자]</p>
                  <p>
                    개발을 하면 종종 처음보는 기술들이나 예상치 못한 오류에 막힐
                    때가 있습니다. <br />
                    그럴때마다 다양한 정보를 수집하고, 다른 사람이 작성한 코드를
                    작성한 코드를 그대로 가져다 쓰는 것이 아닌 코드를 분석하고
                    동작 원리를 파악하려고 시도합니다. 때로는 그 과정이
                    고통스럽지만 차근차근 하나씩 공부하며 제 코드에 적용하고
                    결국 문제를 해결하면 그것만한 쾌감이 없다고 생각합니다.
                  </p>
                </div>

                <div>
                  <p className="text-lg text-black">
                    [소통을 중요시하는 개발자]
                  </p>
                  <p>
                    서비스의 효율적인 개발을 위해서는 요구사항이 정확히
                    정립되어야 하며 개발 진행 상황에 대해서 팀원들이 서로 정확히
                    인지하고 있어야 한다고 생각하고 그 열쇠가 소통이라고
                    생각합니다.
                    <br />
                    프로젝트를 몇 차례 진행하며 소통이 잘되었을 때와 그렇지
                    않았을 때 모두를 경험함으로써 개발에 있어서 팀원과의 소통이
                    얼마나 중요한지 깨달을 수 있었습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Projects Section */}
            <section id="mainProjects" className="space-y-8">
              <h2 className="pb-2 text-2xl font-bold border-b">
                주요 프로젝트
              </h2>

              <div className="space-y-12">
                <ProjectCard
                  title="마인크래프트 사설서버 및 공식 홈페이지 [거북이 놀이터]"
                  headCount="3"
                  memberRole="게임 개발 2명, 홈페이지 풀스택 개발 1명"
                  period="2025.01 - 2025.02"
                  role="풀스택 개발"
                  features={[
                    "OAuth 2.0을 이용한 간편 회원가입 및 간편 로그인 기능",
                    "Spring Security, JWT, Redis를 이용한 사용자 인증 시스템",
                    "사용자 정보 조회 기능",
                    "인게임에서의 활동을 공유하는 커뮤니티 기능",
                    "인게임 데이터 및 커뮤니티 활동 데이터를 이용한 랭킹 시스템",
                    "출석 체크 및 출석 보상 기능",
                    "운영진을 제외한 서비스 이용자 수 집계 기능",
                    "Github Actions, Nginx, Docker, AWS의 EC2, S3, CodeDeploy를 이용한 blue-green 전략의 무중단 배포 구현",
                    "AWS의 Elastic Load Balancer, Route 53을 이용한 HTTPS 연결 설정",
                  ]}
                  skills={[
                    "Next.js",
                    "Spring Boot",
                    "Spring Security",
                    "MySQL",
                    "Redis",
                    "Docker",
                    "AWS",
                    "Github Actions",
                    "OAuth 2.0",
                    "JWT",
                  ]}
                  repositories={[
                    {
                      url: "https://github.com/Team-Turtle-Minecraft",
                      name: "거북이 놀이터",
                    },
                    {
                      url: "https://github.com/Team-MansuMugang",
                      name: "거북이 놀이터 프론트엔드 ",
                    },
                    {
                      url: "https://github.com/Team-Turtle-Minecraft/Turtule-Playground-Backend",
                      name: "거북이 놀이터 백엔드",
                    },
                  ]}
                />
              </div>

              <div className="space-y-12">
                <ProjectCard
                  title="환자와 보호자를 위한 원격 헬스케어 서비스 [만수무강]"
                  headCount="5"
                  memberRole="프론트엔드 개발 2명, 백엔드 개발 2명, 안드로이드 개발 1명"
                  period="2024.07 - 2024.09"
                  role="백엔드 담당"
                  features={[
                    "회원가입, 로그인, 회원 정보 관리 등의 회원 기능",
                    "Spring Security, JWT, Redis를 이용한 사용자 인증 시스템",
                    "보호자 회원의 환자 관리 기능",
                    "환자의 위치 정보 관리 시스템",
                    "Open AI의 Whisper AI를 이용한 음성메모 기능",
                    "보호자 회원 간 정보 공유 및 공감을 위한 커뮤니티 기능",
                    "Firebase Cloud Messaging을 이용한 푸시 알림 기능",
                  ]}
                  skills={[
                    "Spring Boot",
                    "Spring Security",
                    "Redis",
                    "MySQL",
                    "Docker",
                    "Open AI",
                    "FCM",
                    "OpenFeign",
                  ]}
                  repositories={[
                    {
                      url: "https://github.com/Team-MansuMugang",
                      name: "만수무강",
                    },
                    {
                      url: "https://github.com/Team-MansuMugang/mansumugang-backend",
                      name: "만수무강 백엔드",
                    },
                  ]}
                  projectDetail={mansumugangDetail}
                  onShowDetail={() => setSelectedProject(mansumugangDetail)}
                />
              </div>

              <div className="space-y-12">
                <ProjectCard
                  title="경주 내 음식점 추천 및 검색 서비스[오늘 뭐 먹노?]"
                  headCount="3"
                  memberRole="프론트엔드 개발 1명, 백엔드 개발 2명"
                  period="2023.10 - 2023.12"
                  role="팀장, 백엔드 담당"
                  features={[
                    "회원가입, 로그인 등의 회원 기능",
                    "카테고리별 음식점 랜덤 추천 기능",
                    "음식점 이름 검색, 카테고리 필터링을 이용한 음식점 검색 기능",
                    "Kakao 지도 API를 이용한 음식점 상세 보기 기능",
                  ]}
                  skills={["Node.js", "MSSQL", "Python"]}
                  repositories={[
                    {
                      url: "https://github.com/JSH0905/Today-Restaurant",
                      name: "오늘 뭐 먹노?",
                    },
                  ]}
                />
              </div>
            </section>

            {/* Side Projects Section */}
            <section id="sideProjects" className="space-y-8">
              <h2 className="pb-2 text-2xl font-bold border-b">
                사이드 프로젝트
              </h2>

              <div className="space-y-8">
                <ProjectCard
                  title="나만의 커스터마이징 무드등 [E^2cho]"
                  headCount="2"
                  memberRole="H/W 및 프론트엔드 개발 1명, 백엔드 개발 1명"
                  period="2024.09 - 2024.11"
                  role="개인 프로젝트 (기획/개발)"
                  features={[
                    "기기에 유저 등록 기능",
                    "사용자 위치 정보 관리",
                    "공공 데이터 포탈 및 외부 사이트를 이용한 사용자의 현재 위치에 대한 미세먼지 정보, 날씨 등 각종 환경정보 조회 기능",
                  ]}
                  skills={["Spring Boot", "MySQL", "OpenFeign", "Docker"]}
                  repositories={[
                    {
                      url: "https://github.com/E-2cho/E-2cho-HW-Backend",
                      name: "E^2cho 백엔드",
                    },
                  ]}
                />
              </div>
            </section>

            {/* Technical Skills Section */}
            <section id="skills" className="space-y-6">
              <h2 className="pb-2 text-2xl font-bold border-b">기술 스택</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <SkillCard
                  title="Backend"
                  icon={<Terminal className="w-5 h-5 text-blue-600" />}
                  skills={["Java", "Spring Boot", "Node.js", "Python"]}
                />
                <SkillCard
                  title="Database"
                  icon={<Database className="w-5 h-5 text-green-600" />}
                  skills={["MySQL", "MSSQL", "Redis", "Firebase"]}
                />
                <SkillCard
                  title="DevOps / Cloud"
                  icon={<Cloud className="w-5 h-5 text-purple-600" />}
                  skills={[
                    "AWS EC2",
                    "S3",
                    "Route53",
                    "ELB",
                    "CodeDeploy",
                    "Docker",
                  ]}
                />
                <SkillCard
                  title="Tools"
                  icon={<Code2 className="w-5 h-5 text-orange-600" />}
                  skills={["Git", "Github", "Figma", "Notion"]}
                />
              </div>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">자격증</h2>
              <div className="space-y-2">
                <CertificateCard name="SQL 개발자(SQLD)" date="2024.12" />
                <CertificateCard name="정보처리기사" date="2024.09" />
              </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">수상 경력</h2>
              <div className="space-y-4">
                <AwardCard
                  title="2024 경주 지역문제 해결 해커톤(대상)"
                  organizer="경북ICT융합산업진흥협회"
                  date="2024.12"
                  description="경주시 정책 소통 플랫폼 - 함께, 경주"
                  sub_description="https://www.veritas-a.com/news/articleView.html?idxno=534327#google_vignette"
                />

                <AwardCard
                  title="교내 우수 논문상"
                  date="2023.08"
                  description="만수무강"
                />
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">학력 / 교육</h2>
              <div className="space-y-4">
                <EducationCard
                  school="동국대학교 WISE 캠퍼스"
                  major="컴퓨터공학과"
                  grade="3.84"
                  period="2019.03 - 2025.02"
                />
              </div>
            </section>

            {/* Language Skills Section */}
            <section id="language" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">어학</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">TOEIC</span>
                  <span className="text-gray-500">760</span>
                </div>
              </div>
            </section>
            {selectedProject && (
              <ProjectDetailModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </div>
        </main>
      </div>
      <div className="left-0 right-0 z-50 w-full">
        <Footer />
      </div>
    </div>
  );
}
