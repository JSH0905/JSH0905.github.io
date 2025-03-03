export const mansumugangDetail = {
  title: "환자와 보호자를 위한 원격 헬스케어 시비스 [만수무강]",
  architecture: {
    title: "시스템 설계",
    image: "assets/mansumugang_architecture.png",
    description: "시스템 아키텍처 설명...",
    items: [
      "Spring Boot 기반의 RESTful API 서버",
      "Redis를 활용한 실시간 채팅 시스템",
      "AWS 인프라 구성 및 CI/CD 파이프라인",
    ],
  },
  database: {
    title: "DB 설계",
    image: "/db-schema.png",
    description: "데이터베이스 설계 설명...",
    items: [
      "User, Chat, Server 등 주요 엔티티 관계",
      "Redis 캐싱 전략",
      "데이터 정규화 및 인덱싱 전략",
    ],
  },
  design: {
    title: "디자인",
    image: "/design-mockup.png",
    description: "UI/UX 디자인 설명...",
    items: [
      "반응형 웹 디자인",
      "사용자 친화적 인터페이스",
      "접근성 고려한 디자인",
    ],
  },
  backend: {
    title: "백엔드 기능",
    description: "주요 백엔드 기능 설명...",
    items: ["실시간 채팅 시스템", "사용자 인증/인가", "서버 상태 모니터링"],
  },
};
