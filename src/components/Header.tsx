
import group from "../assets/Group.svg"


const Header = () => {

  const styles = {
    container: {
      padding: '5px',
      backgroundColor: '#fdf8ee',
    },

    logoname: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '135%',
      color: '#1d1d1d',
      paddingLeft: "10px"
    },
    listAnchor: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 600,
      fontSize: '18px',
      color: '#1d1d1d',
      padding: "10px 20px"
    },
    signupButton: {
      borderRadius: "218px",
      width: "191px",
      // height: "65px",
      background: "#4d2c5e",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "25px",
      color: "#fff",
      padding: "7px",
      marginLeft: "66px",
    }

  };
  return (
    <div style={styles.container}>

      <div className="max-w-7xl mx-auto px-6" >
        <header className="flex flex-wrap items-center justify-center py-3 ">

          {/* <!-- Logo + Title --> */}
          <a href="/" className="flex items-center mb-3 md:mb-0 md:mr-auto text-gray-900 no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="52" viewBox="0 0 59 52" fill="none">
              <path d="M29.3433 10.65L46.1416 0.780273V9.36441L29.3433 10.65Z" fill="#B8E8F2" />
              <path d="M29.3433 10.6501L49.7233 3.09448V9.2157L29.3433 10.6501Z" fill="#88CFE5" />
              <path d="M29.3432 10.6501L7.51074 0V8.34957L29.3432 10.6501Z" fill="#B8E8F2" />
              <path d="M29.3432 10.65L2.90967 1.92603V7.81268L29.3432 10.65Z" fill="#88CFE5" />
              <path d="M29.3791 51.8476L0.0315758 46.1685L0 4.96191L29.3475 10.6456L29.3791 51.8476Z" fill="#472758" />
              <path d="M58.7946 34.0297C58.7946 41.3192 53.0748 47.1968 45.9973 48.5772L29.3478 51.8159L29.3433 10.65L44.8606 7.63224C51.7667 6.28801 57.3782 9.84256 57.3782 16.9607C57.3782 20.3709 56.0745 23.33 53.9274 25.6891C56.8684 27.0514 58.79 29.8527 58.7946 34.0297ZM38.4055 17.7095V24.999L44.8606 23.7405C46.8995 23.3435 48.3159 21.5392 48.3159 19.4236C48.3159 17.308 46.9581 16.045 44.8606 16.4509L38.4055 17.7095ZM49.7323 35.0852C49.7323 32.7937 48.2617 31.4315 45.9928 31.8735L38.4055 33.3486V41.229L45.9928 39.754C48.2617 39.3164 49.7323 37.3813 49.7323 35.0852Z" fill="#4D2C5E" />
            </svg>

            <span className="text-xl font-semibold" style={styles.logoname}>Book Store</span>
          </a>

          {/* <!-- Nav --> */}
          <ul className="flex flex-wrap gap-5">
            <li>
              <a href="#" style={styles.listAnchor} >Home</a>
            </li>
            <li>
              <a href="#" style={styles.listAnchor} >About us</a>
            </li>
            <li>
              <a href="#" style={styles.listAnchor} >Courses</a>
            </li>
            <li>
              <a href="#" style={styles.listAnchor} >Our Service</a>
            </li>
            <li>
              <a href="#" style={styles.listAnchor}>Contact us</a>
            </li>


          </ul>
          <button type="button" style={styles.signupButton} >Sign in</button>


        </header>
      </div>
    </div>
  )
}

export default Header
