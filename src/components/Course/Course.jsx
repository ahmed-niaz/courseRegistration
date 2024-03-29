import PropTypes from "prop-types";
import bookmark from "../../assets/icons/bookmark.png";
import dollar from "../../assets/icons/dollarSign.svg";
const Course = ({ crs, handleCourseSelection }) => {
  console.log(crs);
  const { photo, name, description, price, credit } = crs;
  return (
    <main>
      <div className="card  bg-base-100 shadow-xl">
        <img className="p-4" src={photo} alt="course" />

        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="flex gap-4">
            <img src={dollar} alt="dollar" />
            <p>Price: {price}</p>
            <button><img src={bookmark} alt="" /></button>
            <p>Credit : {credit}</p>
          </div>
          <button className="btn w-full mt-4 bg-[#2F80ED] text-2xl font-bold hover:bg-black hover:text-white" onClick={()=>handleCourseSelection(crs)}>Select</button>
        </div>
       
      </div>
    </main>
  );
};
Course.propTypes = {
  crs: PropTypes.array,
  handleCourseSelection:PropTypes.func,
};
export default Course;
