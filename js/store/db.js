export var articleRepo = [
  {
    id: 1,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 2,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 3,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 4,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 5,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 6,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 7,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 8,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 9,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 10,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
  {
    id: 11,
    title: "Sample Title",
    author: "Sample author",
    abstract: "Sample abstract, Sample abstract, Sample abstract, Sample abstract.",
    content: "Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text Sample text sample text ",
  },
];

export function get(id) {
  for (let i = 0; i < articleRepo.length; i++) {
    if (articleRepo[i].id == id) return articleRepo[i];
  }
  return undefined;
}
