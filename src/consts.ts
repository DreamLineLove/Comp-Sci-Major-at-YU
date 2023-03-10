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
          {
            prompt: "Define evaluation by representation.",
            prompt_number: 5,
            answer_type: "Paragraph",
            answer:
              "Criterion for evaluating elimination of redundancy and improving processing speed",
          },
        ],
      },
      {
        type: "Small Heading",
        text: "Evaluation by computational complexity",
      },
      {
        type: "Data Collection",
        data_collection: [
          {
            prompt: "What is computational complexity?",
            prompt_number: 1,
            answer_type: "Paragraph",
            answer:
              "A measure for clarifying how much time and memory area a particular algorithm uses.",
          },
          {
            prompt: "How is computational complexity expressed?",
            prompt_number: 2,
            answer_type: "Paragraph",
            answer: "In Big O Notation",
          },
        ],
      },
      {
        type: "Big Heading",
        text: "Types of computational complexity",
      },
      {
        type: "Data Collection",
        data_collection: [
          {
            prompt: "What are the two types of computational complexity?",
            prompt_number: 1,
            answer_type: "Unordered List",
            answer: ["Space complexity", "Time complexity"],
          },
          {
            prompt: "Define time complexity.",
            prompt_number: 2,
            answer_type: "Paragraph",
            answer: "How much time an algorithm needs",
          },
          {
            prompt: "Define space complexity.",
            prompt_number: 3,
            answer_type: "Paragraph",
            answer: "How much (memory space) area an algorithm needs",
          },
        ],
      },
    ],
  },
];
