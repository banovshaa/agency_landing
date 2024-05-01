import styles from "./Courses.module.scss";
import CoursesSwiper from "./CoursesSwiper/CoursesSwiper";

const Courses = () => {
  return (
    <section className={`${styles.courses}`}>
      <div className="container">
        <h3>Popular courses</h3>
      </div>
      <div className="container">
        <CoursesSwiper />
      </div>
    </section>
  );
};

export default Courses;
