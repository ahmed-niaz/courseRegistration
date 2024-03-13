import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`courses.json`)
      .then((resp) => resp.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <main className="w-9/12 grid grid-cols-3 gap-4 my-10">
      {courses.map((course,idx) => (
        <Course key={idx} crs = {course}/>
      ))}
    </main>
  );
};

export default Courses;
