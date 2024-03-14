import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'
const Courses = ({ handleCourseSelection}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`courses.json`)
      .then((resp) => resp.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <main className="w-11/12 mx-auto lg:w-9/12 grid grid-cols-1 lg:grid-cols-3 gap-4">
      {courses.map((course,idx) => (
        <Course key={idx} crs = {course}  handleCourseSelection={handleCourseSelection}/>
      ))}
    </main>
  );
};

Courses.propTypes = {
  handleCourseSelection:PropTypes.func,
}

export default Courses;
