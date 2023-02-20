// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "University of Yangon";
export const SITE_SUBTITLE = "Computer Science";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const content_collection_cs_1102 = [
  {
    title: "Evaluation of Algorithms",
    subtitle: "Chapter ",
    subtitle_number: 2.3,
    order: 3.1,
    heroImage: "/cs-image-1.jpg",
    isObjectiveQuestions: true,
    isLongQuestions: true,
    slug: "evaluation_of_algorithms",
    content_collection: [
      {
        type: "Unordered List",
        list: [
          "Try answering each question by yourself.",
          "If you don't know how to answer a question, click Check Answers.",
        ],
      },
      {
        type: "Data Collection",
        data_collection: [
          {
            prompt: "How many algorithm evaluation criteria are there?",
            prompt_number: 1,
            answer_type: "Paragraph",
            answer: "Three",
          },
          {
            prompt: "What are the three algorithm evaluation criteria?",
            prompt_number: 2,
            answer_type: "Unordered List",
            answer: [
              "Evaluation by computational complexity",
              "Evaluation by validity",
              "Evaluation by representation",
            ],
          },
          {
            prompt: "Define evaluation in terms of computational complexity.",
            prompt_number: 3,
            answer_type: "Paragraph",
            answer: "Criterion for evaluating efficiency",
          },
          {
            prompt: "Define evaluation by validity.",
            prompt_number: 4,
            answer_type: "Paragraph",
            answer: "Criterion for evaluating reliability",
          },
        ],
      },
    ],
  },
];
