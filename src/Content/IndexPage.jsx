import React, { useEffect, useState } from "react";
import CourseCard from "../Components/CourseCard";
import CollegeCard from "../Components/CollegeCard";


const IndexPage = () => {
  const courseCardData = [
    {
      img: "https://www.admissionproviders.com/img/icon/B.tech.png",
      title: "B.tech /B.E",
    },
    {
      img: "https://www.admissionproviders.com/img/icon/B.tech.png",
      title: "B.tech /B.E",
    },
    {
      img: "https://www.admissionproviders.com/img/icon/B.tech.png",
      title: "B.tech /B.E",
    },
    ,
    {
      img: "https://www.admissionproviders.com/img/icon/B.tech.png",
      title: "B.tech /B.E",
    },
    {
      img: "https://www.admissionproviders.com/img/icon/B.tech.png",
      title: "B.tech /B.E",
    },
    ,
    {
      img: "https://www.admissionproviders.com/img/icon/B.tech.png",
      title: "B.tech /B.E",
    },
    {
      img: "https://www.admissionproviders.com/img/icon/B.tech.png",
      title: "B.tech /B.E",
    },
    ,
    {
      img: "https://www.admissionproviders.com/img/icon/B.tech.png",
      title: "B.tech /B.E",
    },
  ];
  const medicalColleges = [
    {
      img: "https://www.admissionproviders.com/img/gallery/Christian-Medical-College-Vellore.jpg",
      collegeName: "CHRISTIAN MEDICAL COLLEGE",
      add: "Vellore , Tamil Nadu",
      estd: "1918",
    },
    {
      img: "https://www.admissionproviders.com/img/gallery/Christian-Medical-College-Vellore.jpg",
      collegeName: "CHRISTIAN MEDICAL COLLEGE",
      add: "Vellore , Tamil Nadu",
      estd: "1918",
    },
    {
      img: "https://www.admissionproviders.com/img/gallery/Christian-Medical-College-Vellore.jpg",
      collegeName: "CHRISTIAN MEDICAL COLLEGE",
      add: "Vellore , Tamil Nadu",
      estd: "1918",
    },
    {
      img: "https://www.admissionproviders.com/img/gallery/Christian-Medical-College-Vellore.jpg",
      collegeName: "CHRISTIAN MEDICAL COLLEGE",
      add: "Vellore , Tamil Nadu",
      estd: "1918",
    },
  ];
  const engineeringColleges = [
    {
      img: "https://www.admissionproviders.com/img/gallery/GALGOTIAS-COLLEGE-OF-ENGINEERING-AND-TECHNOLOGY-.jpg",
      collegeName: "UNITED GROUP OF INSTITUTIONS",
      add: "GREATER NOIDA",
      estd: "1999",
    },
    {
      img: "https://www.admissionproviders.com/img/gallery/GALGOTIAS-COLLEGE-OF-ENGINEERING-AND-TECHNOLOGY-.jpg",
      collegeName: "UNITED GROUP OF INSTITUTIONS",
      add: "GREATER NOIDA",
      estd: "1999",
    },
    {
      img: "https://www.admissionproviders.com/img/gallery/GALGOTIAS-COLLEGE-OF-ENGINEERING-AND-TECHNOLOGY-.jpg",
      collegeName: "UNITED GROUP OF INSTITUTIONS",
      add: "GREATER NOIDA",
      estd: "1999",
    },
    {
      img: "https://www.admissionproviders.com/img/gallery/GALGOTIAS-COLLEGE-OF-ENGINEERING-AND-TECHNOLOGY-.jpg",
      collegeName: "UNITED GROUP OF INSTITUTIONS",
      add: "GREATER NOIDA",
      estd: "1999",
    },
  ];
  const [isInView, setIsInVIew] = useState(false);
  function openModal() {
    const modalActive = document.getElementById("modalActive");
    modalActive.click();
  }

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInVIew(true);
        } else {
          setIsInVIew(false);
        }
      });
    },
    { threshold: 1 } // Trigger when 50% of the element is in view
  );

  useEffect(() => {
    // openModal();

    const box = document.getElementById("counterSection");
    observer.observe(box);
  }, []);

  useEffect(() => {
    if (isInView) {
      const obj = document.getElementById("value1");
      const obj1 = document.getElementById("value2");
      const obj2 = document.getElementById("value3");
      const obj3 = document.getElementById("value4");
      animateValue(obj, 0, 6432, 2000);
      animateValue(obj1, 0, 40, 2000);
      animateValue(obj2, 0, 942, 2000);
      animateValue(obj3, 0, 50, 2000);
    }
  }, [isInView]);

  return (
    <div>
      {/* Fixed Items*/}
      <div className="whatsapp">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
              fill="#BFC8D0"
            ></path>{" "}
            <path
              d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
              fill="url(#paint0_linear_87_7264)"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
              fill="white"
            ></path>{" "}
            <path
              d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
              fill="white"
            ></path>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_87_7264"
                x1="26.5"
                y1="7"
                x2="4"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#5BD066"></stop>{" "}
                <stop offset="1" stop-color="#27B43E"></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
          </g>
        </svg>
      </div>
      <button onClick={openModal} className="enquiry">
        Quick Enquiry
      </button>

      {/* Modal Start */}
      <button
        type="button"
        id="modalActive"
        className="d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-5 pt-2">
                <p className="h2 text-center">Quick Enquiry For Admission</p>
                <div className="mb-2">
                  <label for="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="Full Name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label for="exampleInputPassword1" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    name="Course"
                    aria-label="Default select example"
                  >
                    <option selected>Select Course</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div classNameName="mb-2">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* Modal End */}
      {/* Main Crasouel Start */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.admissionproviders.com/img/gallery/admission%201.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.admissionproviders.com/img/gallery/admission%202.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.admissionproviders.com/img/gallery/admission%203.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Main Crasouel End */}
      {/* Latest  Notifications Section*/}
      <div className="container pt-5 pb-3">
        <div className="row">
          <div className="col-md-8 ">
            {/* <h3>Educational Consultancy in Patna</h3> */}
            <h1 className=" font-bold main-heading">
              You Will Get <span className="admission">Admission </span>in
              Medical Colleges.
            </h1>
            <h6 className="text-black">
              Admission Provider is a Leading Educational consulatncy in Patna
              that can provide Medical Course in India / Abraod Colleges for
              your career path.
            </h6>
            <p className="h5 gray-text mb-3">
              We do not choose the BEST, We make them the BEST. We are Admission
              Provider, the leading admission consultancy in Patna. 100%
              Placement Guaranteed. Get placed in top companies and elevate your
              career to the next level.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <button className="btn ">MBBS</button>
              <button className="btn ">BAMS</button>
              <button className="btn ">BDS</button>
              <button className="btn ">BHMS</button>
              <button className="btn ">B. Pharma</button>
              <button className="btn ">D. Pharma</button>
              <button className="btn ">Bsc Nurcing</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="latestNotificationTitle">LATEST NOTIFICATION</div>
            <div className="latestNotification">
              <div className="notifications">
                <h6>MBBS Admission in India 2023</h6>
                <p>
                  MBBS Admission in India 2023 is scheduled for 1st April 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Course Section */}
      <div className="courses-section pb-3">
        <h2>
          We are the Asia's Leading <br />
          Admission Consultant in{" "}
          <span className="red-color">INDIA and ABROAD. !</span>
        </h2>

        <div className=" container">
          <div className="row">
            {courseCardData.map((data, index) => (
              <CourseCard key={index} img={data.img} title={data.title} />
            ))}
          </div>
        </div>
      </div>
      {/* Eligible Section */}
      <div className="container pt-5 pb-3">
        <div className="row">
          <div className="col-md-8 ">
            <h3>Educational Consultancy in Patna</h3>

            <h1 className=" font-bold main-heading">
              You Will Get <span className="admission">Admission </span>Through
            </h1>
            <h1 className=" font-bold">Bihar Student Credit Card</h1>
            <h6 className="text-black">
              Education Loan Scheme For Pursuing Higher Education For Students
              Of Bihar
            </h6>
            <p className="h5 gray-text mb-3">
              General Courses (non-technical), Financial Courses and Technical
              Courses e.g. B.A., B.Sc., B.Com, Engineering, Management, Medical,
              Law etc.
            </p>
            <div className=" mb-3">
              <button className="btn ">
                बिहार स्‍टूडेंट क्रेडिट कार्ड योजना की संशोधित मार्गदर्शिका लागू
                करने के संबंध में I
              </button>
              <br />
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-danger ">Read More</button>
                <button className="btn btn-filled">Apply</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://www.admissionproviders.com/img/poster-1.jpeg"
              alt=""
              className="img-fluid shadow-img"
            />
          </div>
        </div>
      </div>
      {/* College Section */}
      <div className="college-section">
        <div className=" container">
          <h2>
            TOP <span className="red-color">MEDICAL</span> COLLEGES
          </h2>
          <div className="row">
            {medicalColleges.map((data, index) => (
              <CollegeCard
                key={index}
                img={data.img}
                collegeName={data.collegeName}
                add={data.add}
                estd={data.estd}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="college-section mt-5">
        <div className=" container">
          <h2>
            TOP <span className="red-color">ENGINEERING</span> COLLEGES
          </h2>
          <div className="row">
            {engineeringColleges.map((data, index) => (
              <CollegeCard
                key={index}
                img={data.img}
                collegeName={data.collegeName}
                add={data.add}
                estd={data.estd}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Abroad Section */}
      <div className="abroad-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-12">
              <h3 className="colored h3">
                COUNTRIES WE PROVIDE SERVICE IN
                <span className=" red-color"> Abroad !</span>
              </h3>
              <p className="h5">MBBS in neighbouring countries –</p>
              <div className="countries mb-3 d-flex flex-wrap gap-3 text-center">
                <div>
                  <img
                    src="https://www.admissionproviders.com/img/abroad/bangladesh.png"
                    alt="bangladesh"
                  />
                  <br />
                  <button className="btn">Bangladesh</button>
                </div>
                <div>
                  <img
                    src="https://www.admissionproviders.com/img/abroad/nepal.png"
                    alt="nepal"
                  />
                  <br />
                  <button className="btn">Nepal</button>
                </div>
                <div>
                  <img
                    src="https://www.admissionproviders.com/img/abroad/bangladesh.png"
                    alt="bangladesh"
                  />
                  <br />
                  <button className="btn">Bangladesh</button>
                </div>
                <div>
                  <img
                    src="https://www.admissionproviders.com/img/abroad/nepal.png"
                    alt="nepal"
                  />
                  <br />
                  <button className="btn">Nepal</button>
                </div>
                <div>
                  <img
                    src="https://www.admissionproviders.com/img/abroad/nepal.png"
                    alt="nepal"
                  />
                  <br />
                  <button className="btn">Nepal</button>
                </div>
              </div>
              <p className="h5 mt-2">
                With new medical colleges coming up in neighbouring countries,
                the process to find a seat is much easier - some of the popular
                choices for Indian students, Students wanting to apply for MBBS
                abroad would be required to have an aggregate percentage of at
                least 50%
              </p>
              <div className="d-flex mt-4 justify-content-center">
                <button className="btn btn-filled">View All Country</button>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <img
                src="https://www.admissionproviders.com/img/mbba-abroad.jpeg"
                alt="admission process"
                className="img-fluid shadow-img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Achive Section */}
      <div className="achive-section">
        <div className="container">
          <div className="row pt-2">
            <h3 className="h1">
              Our <span className="red-color">Achievement</span>
            </h3>
            <div className="col-lg-5 col-md-6 col-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://www.admissionproviders.com/img/achivment/a-1.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.admissionproviders.com/img/achivment/a-2.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.admissionproviders.com/img/achivment/a-3.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-2 col-md-6 col-12">
              <p className="h5">
                Since our humble beginning in 2001, THE ADMISSION PROVIDER has
                been constantly providing quality and professional guidance to
                students. With our dedicated approach, we have been able to win
                the confidence of students who have approached us to fulfil
                their educational goals. This is evident form the fact that
                majority of students come to us by reference. We strive to
                provide the best possible service to our students. The following
                achievements are the hallmark of our success:
              </p>
              <div className="mt-4">
                <p className="d-flex gap 2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>
                    Direct Representation of Top Ranked 500+ Colleges and
                    Universities.
                  </span>
                </p>
                <p className="d-flex gap 2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>100 % student admissions in various institutions.</span>
                </p>
                <p className="d-flex gap 2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>
                    Successful processing of Financial Aid / Scholarships
                    Applications.
                  </span>
                </p>
                <p className="d-flex gap 2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>95 % success rate in providing admission.</span>
                </p>
                <div className="d-flex gap-4">
                  <button className="btn btn-outlined">Call Now</button>
                  <button className="btn btn-outlined" onClick={openModal}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}

      <div className="counter-section">
        <div className="container" id="counterSection">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="counter-1">
                <div className="counter-content-1">
                  <div className="counter-icon p-2">
                    <svg
                      viewBox="0 0 400 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M287.432 300.302C306.779 385.028 292.971 360.599 250.743 326.789"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M94.828 70.3771C113.332 85.9691 176.677 40.604 186.268 43.0996C206.653 48.4 227.119 56.1071 247.838 61.4965C269.269 67.0723 296.33 67.1443 295.997 67.8392C294.169 71.6482 211.531 94.3032 189.318 98.9257C181.558 100.54 107.282 75.364 93 71.6482"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M158 68.9995C53.7401 74.5448 80 78.9995 74 145"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M120.922 84.9023C114.073 110.436 114.073 104.779 120.922 108.494C128.891 112.818 182.863 139.683 193.357 139.683C210.043 139.683 248.611 117.108 256.895 107.679"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M254.527 195.65C243.826 307.409 100.913 269.227 118.063 178.545C111.711 169.636 99.9606 158.5 118.064 158.5"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M202.342 217.653C191.302 226.163 177.423 229.779 167.993 217.653"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M172.991 181.787C173.526 177.726 173.734 173.411 173.926 169.312"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M205.545 181.787C206.547 177.575 206.945 173.572 206.945 169.312"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M292.896 217.653C272.658 257.951 236.129 288.872 216.393 328.371"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M307.729 214.535C328.431 219.263 318.55 236.092 302.265 227.927"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M321 228.569C302.424 249.82 263.216 364.4 221.077 334.272"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          opacity="0.503384"
                          d="M269.478 298.533C261.278 299.298 255.585 298.115 250.743 292.505"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="14"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M150.818 269.616C168.858 277.029 166.108 305.739 176.913 316.307C187.076 326.249 221.387 268.41 225.28 266.502C231.057 263.679 245.441 273.491 250.741 275.221"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M152.381 270.673C127.565 277.279 85.1756 302.08 79 345.525"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M261.425 169.128C280.874 167.251 266.987 186.589 257.165 192.391"
                          stroke="#ffffff"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <h3>Happy Student</h3>
                </div>
                <span className="counter-value-1">
                  <span id="value1">6432</span>+
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter-1 green">
                <div className="counter-content-1">
                  <div className="counter-icon p-2">
                    <svg
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="icomoon-ignore"> </g>{" "}
                        <path
                          d="M31.514 11.177l-15.514-7.467-15.514 7.467 2.186 1.318v11.529h1.066v-10.886l3.199 1.929v13.223h18.126v-13.219l6.451-3.894zM16 4.893l13.275 6.39-13.267 8.008-13.282-8.009 13.274-6.39zM23.997 27.224h-15.994v-11.514l8.005 4.827 7.989-4.823v11.51z"
                          fill="#ffffff"
                        >
                          {" "}
                        </path>{" "}
                      </g>
                    </svg>
                  </div>
                  <h3>Our Courses</h3>
                </div>
                <span className="counter-value-1">
                  <span id="value2">40</span>+
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter-1 gray">
                <div className="counter-content-1">
                  <div className="counter-icon p-2">
                    <svg
                      fill="#ffffff"
                      version="1.2"
                      baseProfile="tiny"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="-63 65 128 128"
                      xml:space="preserve"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M-16.6,136.2h71.8v-5.8H31.1l-0.1,0.2l-0.6-0.2h-47V136.2z M-16.9,66.1c7.1,0,12.8,5.7,12.8,12.8c0,7.1-5.7,12.8-12.8,12.8 S-29.7,86-29.7,78.9C-29.7,71.8-24,66.1-16.9,66.1z M42.7,93.4l-16-12.1l-1.9,6.1l-9.4-3.1l-10.6,32l-17.4,0.2l-14.7-24.9 c-1.1-2-3.3-3.1-5.8-3.1c-0.3,0-1.2,0.1-1.6,0.2c-0.3,0.1-0.8,0.2-1.2,0.3c-10.9,3.6-19.4,20.6-19.4,38.3c-0.1,5.3,0,9.8,0.3,14.1 c-0.4,5.1,2.6,10.2,7.6,12c1.4,0.4,2.6,0.7,3.9,0.7h32.3v30.1c0,4.1,3.3,7.3,7.3,7.3c4.1,0,7.3-3.3,7.3-7.3V147 c0-1.9-0.7-3.8-2.2-5.1c-1.5-1.5-3.4-2.3-5.1-2.3h-21.6v-16.1l-11.2-19c-0.4-0.7-0.1-1.8,0.5-2.2c0.7-0.4,1.8-0.1,2.2,0.5l12.8,22.1 c1,1.7,2.7,2.9,4.8,2.9H5.8c2.4,0,4.4-1.6,5.3-3.6l19.2,6.3l0.7,0.2l0.1-0.2l12.2-36.9L42.7,93.4z M29.7,128l-18.2-6 c0-2.6-1.9-4.9-4.3-5.4l9.7-29.6l23.7,7.8L29.7,128z"></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <h3>Alumini Student</h3>
                </div>
                <span className="counter-value-1">
                  <span id="value3">942</span>+
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter-1 blue">
                <div className="counter-content-1">
                  <div className="counter-icon">
                    <svg
                      version="1.0"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 64 64"
                      enable-background="new 0 0 64 64"
                      xml:space="preserve"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill="#ffffff"
                          d="M32,0C15.776,0,2.381,12.077,0.292,27.729c-0.002,0.016-0.004,0.031-0.006,0.047 c-0.056,0.421-0.106,0.843-0.146,1.269c-0.019,0.197-0.029,0.396-0.045,0.594c-0.021,0.28-0.044,0.56-0.058,0.842 C0.014,30.983,0,31.49,0,32c0,17.673,14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M33.362,58.502 c-0.72,0.787-1.901,1.414-2.675,0.67c-0.653-0.644-0.099-1.44,0-2.353c0.125-1.065-0.362-2.345,0.666-2.676 c0.837-0.259,1.468,0.322,2.009,1.012C34.187,56.175,34.239,57.526,33.362,58.502z M43.446,49.87 c-1.18,0.608-2.006,0.494-3.323,0.673c-2.454,0.309-4.394,1.52-6.333,0c-0.867-0.695-0.978-1.451-1.65-2.341 c-1.084-1.364-1.355-3.879-3.01-3.322c-1.058,0.356-1.026,1.415-1.654,2.335c-0.81,1.156-0.607,2.793-2.005,2.993 c-0.974,0.138-1.499-0.458-2.321-1c-0.922-0.614-1.104-1.348-2.002-1.993c-0.934-0.689-1.69-0.693-2.654-1.334 c-0.694-0.463-0.842-1.304-1.673-1.334c-0.751-0.022-1.289,0.346-1.664,0.996c-0.701,1.214-0.942,4.793-2.988,4.665 c-1.516-0.103-4.758-3.509-5.994-4.327c-0.405-0.273-0.78-0.551-1.158-0.763c-1.829-3.756-2.891-7.952-2.997-12.385 c0.614-0.515,1.239-0.769,1.819-1.493c0.927-1.13,0.481-2.507,1.673-3.335c0.886-0.604,1.602-0.507,2.669-0.658 c1.529-0.222,2.491-0.422,3.988,0c1.459,0.409,2.016,1.246,3.326,1.992c1.415,0.81,2.052,1.766,3.66,2.001 c1.166,0.165,1.966-0.901,2.988-0.337c0.824,0.458,1.406,1.066,1.341,2.001c-0.1,1.218-2.522,0.444-2.659,1.662 c-0.183,1.558,2.512-0.194,3.992,0.33c0.974,0.355,2.241,0.294,2.325,1.334c0.081,1.156-1.608,0.837-2.657,1.335 c-1.162,0.541-1.771,0.996-3.004,1.329c-1.125,0.298-2.312-0.628-2.987,0.329c-0.53,0.742-0.343,1.489,0,2.335 c0.787,1.931,3.349,1.352,5.322,0.657c1.383-0.488,1.641-1.726,2.997-2.329c1.438-0.641,2.554-1.335,3.981-0.663 c1.178,0.556,0.849,2.05,2.006,2.663c1.253,0.668,2.432-0.729,3.663,0c0.957,0.569,0.887,1.521,1.655,2.327 c0.894,0.942,1.41,1.702,2.668,2c1.286,0.299,2.072-1.071,3.327-0.671c0.965,0.315,1.755,0.68,1.987,1.672 C46.465,48.634,44.744,49.198,43.446,49.87z M45.839,33.841c-1.154,1.16-2.156,1.539-3.771,1.893c-1.433,0.315-3.443,1.438-3.772,0 c-0.251-1.148,1.029-1.558,1.893-2.359c0.959-0.895,1.854-0.983,2.826-1.892c0.87-0.802,0.756-2.031,1.893-2.359 c1.109-0.32,2.182-0.019,2.825,0.947C48.652,31.438,47.006,32.681,45.839,33.841z M59.989,29.319 c-0.492,0.508-0.462,1.044-0.965,1.542c-0.557,0.539-1.331,0.307-1.738,0.968c-0.358,0.577-0.13,1.057-0.194,1.735 c-0.041,0.387-1.924,1.256-2.313,0.385c-0.214-0.481,0.281-0.907,0-1.353c-0.263-0.401-0.555-0.195-0.899,0.181 c-0.359,0.388-0.772,0.958-1.221,1.172c-0.589,0.273-0.196-2.25-0.395-3.088c-0.146-0.663,0.01-1.08,0.198-1.736 c0.25-0.91,0.938-1.206,1.155-2.125c0.194-0.806,0.033-1.295,0-2.123c-0.039-0.906-0.015-1.427-0.188-2.314 c-0.192-0.937-0.252-1.525-0.771-2.316c-0.418-0.624-0.694-1.001-1.354-1.352c-0.16-0.088-0.31-0.146-0.452-0.191 c-0.34-0.113-0.659-0.128-1.098-0.193c-0.888-0.132-1.522,0.432-2.314,0c-0.462-0.255-0.606-0.575-0.96-0.967 c-0.404-0.434-0.511-0.789-0.967-1.158c-0.341-0.276-0.552-0.437-0.965-0.581c-0.79-0.263-1.342-0.082-2.126,0.196 c-0.77,0.268-1.058,0.707-1.739,1.155c-0.522,0.303-0.893,0.371-1.348,0.774c-0.276,0.242-1.59,1.177-2.127,1.155 c-0.544-0.021-0.851-0.343-1.338-0.382c-0.065-0.008-0.13-0.008-0.204,0c0,0,0,0-0.005,0c-0.473,0.036-0.696,0.269-1.146,0.382 c-1.107,0.276-1.812-0.115-2.905,0.197c-0.712,0.2-0.993,0.766-1.73,0.771c-0.841,0.005-1.125-0.743-1.932-0.968 c-0.442-0.118-0.702-0.129-1.157-0.19c-0.749-0.108-1.178-0.119-1.926-0.191H24.86c-0.016,0.006-0.591,0.058-0.688,0 c-0.422-0.286-0.722-0.521-1.244-0.773c-0.575-0.283-0.919-0.428-1.547-0.584l0.026-0.381c0,0,0-0.847-0.121-1.207 c-0.115-0.361-0.24-0.361,0-1.086c0.248-0.722,0.679-1.182,0.679-1.182c0.297-0.228,0.516-0.305,0.769-0.58 c0.51-0.539,0.717-0.998,0.774-1.739c0.067-0.972-1.205-1.367-0.97-2.316c0.209-0.826,0.904-0.98,1.547-1.543 c0.779-0.67,1.468-0.758,2.12-1.542c0.501-0.593,0.911-0.965,0.97-1.738c0.053-0.657-0.23-1.068-0.57-1.538 C28.356,2.175,30.157,2,32,2c14.919,0,27.29,10.893,29.605,25.158c-0.203,0.352-0.001,0.796-0.27,1.193 C60.979,28.894,60.436,28.85,59.989,29.319z"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <h3>Countries</h3>
                </div>
                <span className="counter-value-1">
                  <span id="value4">60</span>+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Footer Section */}
      <div className="sub-footer">
        <div className=" gap-5  d-flex flex-column flex-md-row justify-content-center align-item-center">
          <div className="d-flex flex-column flex-md-row   gap-3 justify-content-center align-item-center">
            <div className="newslater-img ">
              <img
                src="https://themeim.com/demo/eduplan/assets/img/icon/newslater.png"
                alt="newslater"
                className="img-fluid"
              />
            </div>
            <div className="text-center text-md-start">
              <h3>Subscribe our newsletter</h3>
              <p>
                Enter your mail address to get our updates, offer and study
                abroad related all updates
              </p>
            </div>
          </div>
          <div className="input-email mt-3">
            <div className="d-flex justify-content-center">
              <input type="text" placeholder="Your Email ...." />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
        <hr />
      </div>

      
    </div>
  );
};

export default IndexPage;
