import Cart from "./components/Cart/Cart";
import Course from "./components/Course/Course";
import Courses from "./components/Courses/Courses";

const App = () => {
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8">
        Course Registration
      </h1>
      <div className="flex">
        <Courses />
        <Cart />
      </div>
     
    </main>
  );
};

export default App;
