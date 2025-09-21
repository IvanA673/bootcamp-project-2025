var Blogs = [
    {
        title: "Welcome to Our Blog",
        date: "2025-01-01",
        description: "This is the first post on our blog. Stay tuned for more updates!",
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
// 1. Access the Container for Blogs
var blogContainer = document.getElementById("hike-gallery");
// 2. Create a Function to Iterate Over the List of Blogs and
// 3. Dynamically Create and Append Blog Elements
function renderBlogs() {
    if (!blogContainer) {
        console.error("Blog container not found!");
        return;
    }
    Blogs.forEach(function (blog) {
        // Create the main blog post container
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        // Create and set up the title element
        var title = document.createElement("h1");
        title.textContent = blog.title;
        // Create and set up the image element
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        // Create and set up the date element
        var date = document.createElement("p");
        date.className = "blog-date";
        date.textContent = blog.date;
        // Create and set up the description element
        var description = document.createElement("p");
        description.className = "blog-description";
        description.textContent = blog.description;
        // Create a "Read More" link that navigates to the individual blog page
        var readMoreLink = document.createElement("a");
        readMoreLink.href = "blogs/".concat(blog.slug, ".html");
        readMoreLink.textContent = "Read More";
        readMoreLink.className = "read-more-link";
        // Append all child elements to the blog post container
        blogPost.appendChild(title);
        blogPost.appendChild(image);
        blogPost.appendChild(date);
        blogPost.appendChild(description);
        blogPost.appendChild(readMoreLink);
        // Append the blog post to the main blog container
        blogContainer.appendChild(blogPost);
    });
}
// Call the function to render blogs when the page loads
renderBlogs();
