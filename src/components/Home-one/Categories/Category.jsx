import Category1 from "../../../assets/images/Home1/category1.svg";
import Category2 from "../../../assets/images/Home1/category2.svg";
import Category3 from "../../../assets/images/Home1/category3.svg";
import Category4 from "../../../assets/images/Home1/category4.svg";
import Category5 from "../../../assets/images/Home1/category5.svg";

function Category() {
  //   array of object
  const categories = [
    {
      id: 1,
      img: Category1,
      title: "Creative web design",
      courses: "8 Courses",
    },
    {
      id: 2,
      img: Category2,
      title: "Finance accounting",
      courses: "10 Courses",
    },
    {
      id: 3,
      img: Category1,
      title: "IT and software",
      courses: "5 Courses",
    },
    {
      id: 4,
      img: Category3,
      title: "Digital marketing",
      courses: "4 Courses",
    },
    {
      id: 5,
      img: Category4,
      title: "Web development",
      courses: "8 Courses",
    },
    {
      id: 6,
      img: Category5,
      title: "Content writing",
      courses: "3 Courses",
    },
  ];

  return (
    <>
      {/* Top Categories section start */}
      <section className="w-full px-5 py-20">
        {/* content start*/}
        <div className="w-full text-center" data-aos="fade-up">
          <h1 className="font-medium font-sans uppercase">Top Categories</h1>
          <p className="text-4xl font-sans font-medium my-3">
            Discover leading categories to <br /> elevate your journey
          </p>
        </div>
        {/* content end*/}

        {/* cards */}
        <div
          className="w-full flex items-center justify-center lg:justify-between mt-16 flex-wrap lg:flex-nowrap gap-5"
          data-aos="fade-up"
        >
          {categories.map((items) => (
            <div
              key={items.id}
              className="w-full sm:w-[250px] md:w-64 lg:w-[11.5rem] h-56 p-5 cursor-pointer hover:border-none hover:shadow-xl hover:shadow-sky-100 duration-500 rounded-md border-[1px] border-gray-200 flex flex-col items-center justify-center gap-3 "
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-main-colo-3 ">
                <img src={items.img} alt={items.title} />
              </div>
              <h2 className="text-[18px] font-medium font-sans text-center">
                {items.title}
              </h2>
              <p className="text-lg font-sans text-center text-gray-500">
                {items.courses}
              </p>
            </div>
          ))}
        </div>

       
        {/* video call div end */}
      </section>
      {/* Top Categories section end */}
    </>
  );
}

export default Category;
