import OBJECTS from "../../../assets/OBJECTS.png"
import Group from "../../../assets/Group 327.png"
import online_course_21 from "../../../assets/online_course_21.png"
import online_course_20 from "../../../assets/online_course_20.png"
const Hero = () => {


    const styles = {
        container: {
            backgroundImage: `url(${Group})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fdf8ee",
            marginTop: "30px",
            height: "636px",

        },

        title: {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 800,
            fontSize: "69px",
            color: "#050c26",
            lineHeight: "135%"

        },
        image: {
            height: "636px",

        },
        disImage: {
            borderRadius: '23px',
            width: '102px',
            height: '101px',
            background: '#4d2c5e',
            padding: "20px"
        },

        disTitle: {
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: '30px',
            lineHeight: '171%',
            color: '#050c26',
        },
        dis: {
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: '23px',
            lineHeight: '171%',
            color: '#8a8a8a',
        }



    }
    return (
        <div style={styles.container}>
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="flex flex-col-reverse lg:flex-row-reverse  gap-10 py-10">

                    {/* Content */}
                    <div className="w-[711px]"  >
                        <h1 style={styles.title}>
                            Premium <span className="text-[#ff7426]">Learning</span>
                        </h1>
                        <h1 style={styles.title} className="mb-5">
                            Experience
                        </h1>
                        <div className="flex justify-between gap-5 py-10">

                            <div style={styles.disImage}>
                                <img
                                    src={online_course_21}
                                    alt="Bootstrap Themes"

                                    loading="lazy"
                                />
                            </div>

                            <div>
                                <h3 style={styles.disTitle}>Easily Accessible</h3>
                                <p style={styles.dis}>
                                    Learning Will fell Very Comfortable With Courslab.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div>
                                <img
                                    style={styles.disImage}
                                    src={online_course_20}
                                    alt="Bootstrap Themes"

                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h3 style={styles.disTitle}>Fun learning expe</h3>
                                <p style={styles.dis} className="text-gray-600 text-lg">
                                    Learning Will fell Very Comfortable With Courslab.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-10/12 sm:w-8/12 lg:w-6/12">
                        <img
                            src={OBJECTS}
                            alt="Bootstrap Themes"

                            loading="lazy"
                            style={styles.image}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
