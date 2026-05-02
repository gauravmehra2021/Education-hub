import online_course_10 from "../../../assets/online_course_10.jpg"
import online_course_7 from "../../../assets/online_course_7.png"
import online_course_8 from "../../../assets/online_course_8.jpg"

const Tracks = () => {


  const courses = [
    {
      id: 1,
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      duration: "22hr 30min",
      lessons: "34 Courses",
      sales: "250 Sales",
      image: online_course_10,
    },
    {
      id: 2,
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      duration: "22hr 30min",
      lessons: "34 Courses",
      sales: "250 Sales",
      image: online_course_7,
    },
    {
      id: 3,
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      duration: "22hr 30min",
      lessons: "34 Courses",
      sales: "250 Sales",
      image: online_course_8,
    },
  ]

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    position: "relative",
     overflow: "visible",
  },

  button: {
    position: "absolute",
    left: "50%",
    bottom: "-25px",
    transform: "translateX(-50%)", // ✅ FIXED

    borderRadius: "96px",
    width: "190px",
    height: "50px",
    background: "#ff7426",

    fontFamily: "Roboto",
    fontWeight: "500", // ✅ safer
    fontSize: "22px",
    color: "#fff",
  },
};

  return (
    <div className="px-4">

      {/* Heading */}
      <div className="pt-12 my-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Tracks
        </h1>

        <div className="max-w-2xl mx-auto">
          <p className="mt-4 text-lg text-gray-600">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 max-w-7xl mx-auto">

        {courses.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white shadow-md rounded-[10px] overflow-hidden"
            style={styles.card}
          >
            <div className="p-5 mb-5">

              {/* Image */}
              <img
                src={item.image}
                alt="course"
                className="w-full h-[220px] object-cover rounded-[10px]"
              />

              {/* Title + Stars */}
              <div className="flex justify-between mt-2">
                <p className="font-[Poppins] font-medium text-[16px] text-[#acacac]">
                  UI/UX Design
                </p>

                <span className="flex w-[88px] h-[16px]">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M8.77 0.83L10.57 4.48c.12.26.36.43.64.47l4.03.59c.7.1.98.97.47 1.47l-2.92 2.85c-.2.2-.29.48-.24.76l.69 4.02c.12.7-.62 1.24-1.25.91l-3.6-1.9a.75.75 0 00-.7 0l-3.6 1.9c-.63.33-1.37-.21-1.25-.91l.69-4.02a.9.9 0 00-.24-.76L.26 7.01c-.51-.5-.23-1.37.47-1.47l4.03-.59c.28-.04.52-.21.64-.47L7.23.83c.31-.64 1.22-.64 1.54 0z"
                        fill="#FFA135"
                      />
                    </svg>
                  ))}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.77243 0.48035L10.577 4.13692C10.7025 4.39124 10.9451 4.56746 11.2258 4.60818L15.2612 5.19458C15.9681 5.29737 16.2501 6.16579 15.7388 6.66408L12.8188 9.51031C12.6159 9.70822 12.5231 9.99358 12.5712 10.2729L13.2604 14.2919C13.3812 14.9958 12.6423 15.5325 12.0101 15.2004L8.40097 13.303C8.14999 13.1712 7.84994 13.1712 7.59896 13.303L3.98978 15.2004C3.35766 15.5328 2.61874 14.9958 2.73955 14.2919L3.42875 10.2729C3.47681 9.99358 3.38403 9.70822 3.18111 9.51031L0.261123 6.66408C-0.250182 6.16546 0.0318366 5.29704 0.73872 5.19458L4.7741 4.60818C5.05478 4.56746 5.29742 4.39124 5.42291 4.13692L7.2275 0.48035C7.54323 -0.160117 8.45637 -0.160117 8.77243 0.48035Z" fill="#F9D4AB" />
                  </svg>
                </span>
              </div>

              {/* Course Title */}
              <p className="font-[Poppins] font-medium text-[20px] text-black mt-1">
                UI/UX Design for Beginners
              </p>

              {/* Price */}
              <p className="font-[Poppins] font-semibold text-[20px] text-[#ff7426] mt-1">
                $98
              </p>

              {/* Divider */}
              <div className="border-b mt-3"></div>

              {/* Details */}
              <div className="flex flex-wrap gap-4 mt-3 font-[Poppins] font-medium text-[12px] text-[#acacac]">

                <span className="flex items-center gap-2">
                  <svg width="17" height="17" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4_3437)">
                      <path d="M9.50014 0C4.26193 0 0.000488281 4.26167 0.000488281 9.49989C0.000488281 14.7383 4.26193 19 9.50014 19C14.7384 19 19 14.7383 19 9.49989C19 4.26167 14.7381 0 9.50014 0ZM9.50014 17.6265C5.0194 17.6265 1.37374 13.9809 1.37374 9.49989C1.37374 5.01892 5.01917 1.37348 9.50014 1.37348C13.9811 1.37348 17.6266 5.01892 17.6266 9.49989C17.6266 13.9809 13.9811 17.6265 9.50014 17.6265Z" fill="black" />
                      <path d="M12.2485 10.3744C12.2449 10.3744 12.2416 10.3744 12.238 10.3744L10.1865 10.405V5.0361C10.1865 4.6568 9.87904 4.34937 9.49973 4.34937C9.12042 4.34937 8.81299 4.6568 8.81299 5.0361V11.1023L8.81345 11.1064C8.81345 11.1087 8.81299 11.1126 8.81299 11.1126C8.81345 11.1405 8.81871 11.1668 8.82237 11.1936C8.82466 11.2103 8.82489 11.2275 8.8281 11.244C8.83428 11.2735 8.84458 11.301 8.85442 11.3287C8.85946 11.3431 8.86266 11.3582 8.86861 11.372C8.88052 11.4001 8.89654 11.4258 8.91188 11.4521C8.91897 11.4637 8.92424 11.4766 8.93179 11.488C8.94919 11.5134 8.97002 11.5361 8.99062 11.5592C8.99932 11.5688 9.00642 11.5798 9.01558 11.5892C9.03778 11.6112 9.06273 11.6297 9.08768 11.6487C9.09776 11.6563 9.10668 11.6654 9.11698 11.6725C9.144 11.6908 9.17353 11.7053 9.20306 11.7194C9.21336 11.7243 9.22251 11.7311 9.23304 11.7355C9.26738 11.7499 9.30401 11.76 9.34109 11.7689C9.34796 11.7705 9.35437 11.7737 9.36146 11.7751C9.40587 11.784 9.45188 11.789 9.49904 11.789C9.50247 11.789 9.50614 11.789 9.50957 11.789L12.2584 11.7478C12.6374 11.7421 12.9403 11.4299 12.9348 11.0508C12.9295 10.6751 12.623 10.3744 12.2485 10.3744Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_3437">
                        <rect width="19" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> 22hr 30min
                </span>

                <span className="flex items-center gap-2">
                  <svg width="25" height="25" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z" fill="#212121" />
                  </svg> 34 Courses
                </span>

                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4_3321)">
                      <path d="M16.8961 12.0023C16.4988 12.0023 16.1789 12.3222 16.1789 12.7195V16.1789H1.82109V12.7195C1.82109 12.3222 1.50117 12.0023 1.10391 12.0023C0.706641 12.0023 0.386719 12.3222 0.386719 12.7195V16.8961C0.386719 17.2933 0.706641 17.6133 1.10391 17.6133H16.8961C17.2934 17.6133 17.6133 17.2933 17.6133 16.8961V12.7195C17.6133 12.3222 17.2934 12.0023 16.8961 12.0023Z" fill="black" />
                      <path d="M8.47278 12.8531C8.87708 13.261 9.37278 13.036 9.52395 12.8531L13.6478 8.41643C13.9185 8.12463 13.9009 7.67112 13.6091 7.40041C13.3173 7.12971 12.8638 7.14729 12.5966 7.43909L9.71731 10.5364V1.21292C9.71731 0.815649 9.39739 0.495728 9.00012 0.495728C8.60286 0.495728 8.28294 0.815649 8.28294 1.21292V10.5399L5.40364 7.4426C5.13294 7.15081 4.67942 7.13674 4.38762 7.40393C4.09583 7.67463 4.08177 8.12815 4.34895 8.41995L8.47278 12.8531Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_3321">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> 250 Sales
                </span>

              </div>

            </div>

            <button type="button" style={styles.button}>Join Course</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Tracks