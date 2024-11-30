import React from "react";

const CourseCard = ({ img, title }) => {
  return (
    <div className="col-lg-3 mt-3 col-md-2 col-12">
      <div>
        <div className="course-box">
          <img src={img} className="course-card-img" alt="" />
          <h4>{title}</h4>
          <p>Know More </p>
          <div className="go-corner">
            <div className="go-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
