type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Welcome to Our Blog",
    date: "2025-01-01",
    description:
      "This is the first post on our blog. Stay tuned for more updates!",
    image: "/images/blog/welcome.jpg",
    imageAlt: "Welcome to our blog",
    slug: "welcome-to-our-blog",
  },
  {
    title: "Understanding Our Mission",
    date: "2025-01-15",
    description: "Learn about our mission and how we aim to make a difference.",
    image: "/images/blog/mission.jpg",
    imageAlt: "Understanding our mission",
    slug: "understanding-our-mission",
  },
];

export default blogs;