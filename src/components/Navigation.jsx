// src/components/Navigation.js
"use client";

import React from "react";

const menuItems = [
  { id: "about", label: "자기소개" },
  { id: "mainProjects", label: "주요 프로젝트" },
  { id: "sideProjects", label: "사이드 프로젝트" },
  { id: "skills", label: "기술 스택" },
  { id: "certificates", label: "자격증" },
  { id: "awards", label: "수상 경력" },
  { id: "education", label: "학력 / 교육" },
  { id: "language", label: "어학" },
];

export default function Navigation() {
  return (
    <nav className="w-64 fixed h-screen p-6 border-r bg-white">
      <div className="sticky top-6 space-y-4">
        <h3 className="text-lg font-semibold mb-6">목차</h3>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
