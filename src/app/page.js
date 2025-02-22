"use client";

import React from "react";
import {
  Code2,
  Terminal,
  Database,
  Globe,
  BookOpen,
  Cloud,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import EducationCard from "./components/EducationCard";
import CertificateCard from "./components/CertificateCard";
import AwardCard from "./components/AwardCard";

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12 bg-white">
      {/* Header Section */}
      <header className="space-y-8">
        <div className="flex items-start gap-8">
          {/* Profile Image */}
          <div className="w-40 h-40 relative rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4 flex-grow">
            <div>
              <h1 className="text-4xl font-bold">홍길동</h1>
              <p className="text-2xl font-medium text-blue-600 mt-2">
                "성장하는 개발자, 기록하는 엔지니어"
              </p>
            </div>

            <p className="text-gray-600">
              새로운 기술을 배우고 적용하는 것을 좋아하며, 문제 해결 과정을
              체계적으로 문서화하는 것에 관심이 많습니다.
            </p>

            <div className="flex gap-4 text-sm">
              <Link
                href="https://github.com/yourid"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Globe className="w-4 h-4" />
                GitHub
              </Link>
              <Link
                href="https://blog.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <BookOpen className="w-4 h-4" />
                기술 블로그
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Projects Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-b pb-2">주요 프로젝트</h2>

        <div className="space-y-12">
          <ProjectCard
            title="실시간 채팅 애플리케이션"
            period="2023.09 - 2023.12"
            role="백엔드 개발 리드"
            features={[
              "WebSocket을 활용한 실시간 채팅 서버 구현",
              "Redis pub/sub을 활용한 채팅방 기능",
              "JWT 기반 사용자 인증 시스템",
              "실시간 알림 시스템 구현",
            ]}
            achievements={[
              "동시 접속자 1,000명 처리 가능한 시스템 구축",
              "메시지 처리 지연 시간 평균 100ms 이하 달성",
            ]}
            skills={["Spring Boot", "Redis", "WebSocket", "AWS"]}
          />
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-b pb-2">사이드 프로젝트</h2>

        <div className="space-y-8">
          <ProjectCard
            title="개인 블로그 플랫폼"
            period="2023.12 - 진행중"
            role="개인 프로젝트 (기획/개발)"
            features={[
              "마크다운 기반 블로그 포스팅 시스템",
              "이미지 업로드 및 최적화",
              "검색 엔진 최적화(SEO)",
            ]}
            skills={["Node.js", "AWS S3", "Firebase"]}
          />
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">기술 스택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            skills={["AWS EC2", "S3", "Route53", "ELB", "CodeDeploy", "Docker"]}
          />
          <SkillCard
            title="Tools"
            icon={<Code2 className="w-5 h-5 text-orange-600" />}
            skills={["Git", "Github", "Figma", "Notion"]}
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b pb-2">학력 / 교육</h2>
        <div className="space-y-4">
          <EducationCard
            school="OO 대학교"
            major="컴퓨터공학과"
            period="2020.03 - 2024.02"
          />
          <EducationCard
            school="코드스테이츠"
            major="백엔드 부트캠프 수료"
            period="2023.01 - 2023.06"
          />
        </div>
      </section>

      {/* Certificates Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b pb-2">자격증</h2>
        <div className="space-y-2">
          <CertificateCard name="정보처리기사" date="2023.08" />
          <CertificateCard
            name="AWS Solutions Architect Associate"
            date="2023.11"
          />
        </div>
      </section>

      {/* Awards Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b pb-2">수상 경력</h2>
        <div className="space-y-4">
          <AwardCard
            title="2023 전국 대학생 해커톤 대상"
            organizer="XX기관"
            date="2023.11"
            description="실시간 재난 알림 서비스 개발 프로젝트"
          />
          <AwardCard
            title="제 1회 SW 개발 공모전 우수상"
            organizer="XX협회"
            date="2023.08"
            description="IoT 기반 스마트홈 서비스 개발"
          />
        </div>
      </section>

      {/* Language Skills Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b pb-2">어학</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">TOEIC</span>
            <span className="text-gray-500">850</span>
          </div>
        </div>
      </section>
    </div>
  );
}
