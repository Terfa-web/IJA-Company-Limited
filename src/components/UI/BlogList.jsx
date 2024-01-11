import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((blog) => (
        <BlogItem item={blog} key={blog.id} />
      ))}
    </>
  );
};

const BlogItem = (props) => {
  const { imgUrl, title, author, date, description, time } = props.item;
  return (
    <Col lg="4" md="4" sm="6">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info">
          <Link to={`/blogs/${title}`}>{title}</Link>
          <p className="section__description">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`}>Read More</Link>

          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog__author">
              <i class="ri-user-line"></i>
              {author}
            </span>

            <div className="d-flex align-items-center gap-3">
              <span className="d-flex align-items-center gap-1 section__description">
                <i class="ri-calendar-line"></i>
                {date}
              </span>

              <span className="d-flex align-items-center gap-1 section__description">
                <i class="ri-time-line"></i>
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
