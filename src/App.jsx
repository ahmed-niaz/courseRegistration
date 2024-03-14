import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
export const totalCredits = 21;

const App = () => {
  const [carts, setCarts] = useState([]);
  const handleCourseSelection = (courseParam) => {
    //  console.log(courseParam);
    const credits = carts.reduce(
      (previousCredit, currentCredit) => previousCredit + currentCredit.credit,
      0
      );
      if((credits + courseParam.credit) > totalCredits){
        return toast.error(`only ${totalCredits} allowed`)
      }
      const alreadyExists = carts.find((course) => course.id === courseParam.id);
      if (!alreadyExists) {
        setCarts((course) => [...course, courseParam]);
        toast.success("Course Added")
    }else{
      toast.warn(`Course already selected`)
    }
  };
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8 text-[#2F80ED] ">
        Course Registration
      </h1>
      <div className="flex mt-10 gap-4 flex-col lg:flex-row">
        <Courses handleCourseSelection={handleCourseSelection} />
        <Cart crts={carts} />
      </div>
      <ToastContainer />
    </main>
  );
};

export default App;
