export const tool = {
  "id": "E050",
  "title": "질량 스프링 감쇠비 계산기",
  "inputs_text": "점성 감쇠계수 c [N·s/m], 질량 m [kg], 스프링 상수 k [N/m]",
  "formula": "ζ = c / (2 √(m k))",
  "output_text": "감쇠비 ζ [무차원]",
  "assumptions": "c≥0, m,k>0. 선형 1자유도 점성 감쇠 모델이며 건마찰·비선형 댐퍼에는 적용하지 않는다. 출처의 감쇠계수 b 표기를 이 도구에서는 c로 바꿔 임계감쇠 관계를 정리한다.",
  "purpose": "감쇠비 계산 / 진동·제어 실험의 임계감쇠 확인",
  "sources": [
    {
      "label": "OpenStax · Damped Oscillations",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/15-5-damped-oscillations"
    }
  ],
  "slug": "eng-spring-damping-ratio",
  "category": "진동",
  "result_label": "질량 스프링 감쇠비 ζ",
  "result_dimension": "ratio",
  "fields": [
    {
      "key": "c",
      "label": "점성 감쇠계수 c",
      "dimension": "damping",
      "example": 2,
      "constraint": "nonnegative",
      "display_unit": "Nsm",
      "display_value": "2"
    },
    {
      "key": "m",
      "label": "질량 m",
      "dimension": "mass",
      "example": 1,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "1"
    },
    {
      "key": "k",
      "label": "스프링 상수 k",
      "dimension": "stiffness",
      "example": 100,
      "constraint": "positive",
      "display_unit": "Nm",
      "display_value": "100"
    }
  ],
  "site": "https://nanalab.kr/eng-spring-damping-ratio/",
  "repository": "https://github.com/NaNaCompany/eng-spring-damping-ratio",
  "condition": "",
  "output_unit": "1"
};
