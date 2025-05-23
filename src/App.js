import { color } from "./theme/color";
import image1 from "./assets/6342519.png";

const App = () => {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.2,
          filter: "invert(1)",
          backgroundImage:
            "url(https://t4.ftcdn.net/jpg/08/06/61/13/360_F_806611336_V3HIP8zmPy253jEQuAqeV9d7GUfdniny.jpg)",
        }}
      />

      <Header />
      <Main />
      <AdvancedTechnologySection />
      <About />
      <WhatWeHave />
      <Solutions />
      <WhyChoose />
      <Latest />
      <Footer />
    </div>
  );
};

const Header = () => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
  ];

  return (
    <div>
      <header
        style={{
          padding: "16px 0",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          fontSize: 13,
        }}
      >
        <img
          style={{ width: 200 }}
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Cargomatic_%28Company%29_Logo.png"
          alt=""
        />
        <div
          style={{
            gap: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menu.map((item) => (
            <p href={item.path} key={item.name}>
              {item.name}
            </p>
          ))}
        </div>
        <div
          style={{
            gap: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <i className="fi fi-rs-phone-call" style={{ fontSize: 16 }} />
            <p>+212 707 123 456</p>
          </div>
          <p
            style={{
              borderRadius: 60,
              color: color.white,
              padding: "10px 24px",
              backgroundColor: color.black,
            }}
          >
            Devis Gratuit
          </p>
          <i
            style={{
              width: 36,
              height: 36,
              fontSize: 16,
              borderRadius: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
            className="fi fi-rs-bars-staggered"
          />
        </div>
      </header>
    </div>
  );
};

const Main = () => {
  const commonBandStyles = {
    height: "60px", // Adjust height as needed
    backgroundColor: "#1a1a1a", // Dark area color
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#e0e0e0", // Text color
    whiteSpace: "nowrap",
    overflow: "hidden", // Hide overflow if text is too long
    padding: "0 20px",
    boxSizing: "border-box",
    transformOrigin: "top left", // Important for rotation/skewing
  };

  const textStyles = {
    margin: "0 15px", // Spacing between items
    fontSize: "20px", // Adjust font size
  };

  return (
    <div style={{}}>
      <main
        style={{
          height: "80vh",
          maxWidth: 1200,
          display: "grid",
          margin: "0 auto 100px auto",
          padding: "16px 0",
          fontSize: 16,
          alignItems: "center",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
          <p>Best Technology To Make Good Software</p>
          <h1 style={{ fontSize: 64 }}>RGI Studio Solutions</h1>
          <p style={{ color: color.darkGray }}>
            Infinity is the only way to grow your travels & transport business.
          </p>

          <div style={{ display: "flex", gap: 8 }}>
            <p
              style={{
                borderRadius: 60,
                color: color.white,
                width: "fit-content",
                padding: "10px 24px",
                backgroundColor: color.black,
              }}
            >
              Request for Demo
            </p>
            <p
              style={{
                borderRadius: 60,
                width: "fit-content",
                padding: "10px 24px",
                border: "1px solid" + color.black,
              }}
            >
              info@itspl.net
            </p>
          </div>
        </div>

        <div
          style={{
            gap: 32,
            display: "grid",
            textAlign: "end",
            height: "fit-content",
            justifyContent: "end",
            justifyitems: "center",
          }}
        >
          <img src={image1} alt="image1" style={{ width: "100%" }} />
          <p>"WE ARE ON TOP OF USING ADVANCE TECHNOLOGY"</p>
        </div>
      </main>
      {/* Middle diagonal band */}
      <div
        style={{
          ...commonBandStyles,
          top: "50%", // Adjust vertical position
          left: "-10%", // Adjust horizontal position
          width: "100%", // Make it wide enough
          zIndex: 1, // Ensure it's behind the top one at the overlap point if needed
          marginTop: "-30px",
        }}
      >
        <span style={textStyles}>Advance API</span> |
        <span style={textStyles}>Vehicle Management</span> |
        <span style={textStyles}>E-Ticket ERP</span> |
        <span style={textStyles}>Dynamic Price Engine</span> |
        <span style={textStyles}>Magic Box</span> |
        <span style={textStyles}>Cargo</span>
      </div>
    </div>
  );
};

const AdvancedTechnologySection = () => {
  const commonBandStyles = {
    position: "absolute",
    height: "60px", // Adjust height as needed
    backgroundColor: "#1a1a1a", // Dark area color
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    whiteSpace: "nowrap",
    overflow: "hidden", // Hide overflow if text is too long
    padding: "0 20px",
    boxSizing: "border-box",
    transformOrigin: "center center", // Important for rotation/skewing
    color: color.green,
  };

  const textStyles = {
    margin: "0 15px", // Spacing between items
    fontSize: "20px", // Adjust font size
  };

  const backgroundGridStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "20px 20px", // Size of grid cells
    zIndex: 0, // Ensure it's in the background
  };

  return (
    <div
      style={{
        overflow: "hidden",
        marginTop: "-200px",
        marginBottom: "-500px",
        width: "100%",
        height: "900px",
        position: "relative",
      }}
    >
      <div style={backgroundGridStyle}></div>

      {/* Top diagonal band */}
      <div
        style={{
          ...commonBandStyles,
          top: "15%", // Adjust vertical position
          left: "-10%", // Adjust horizontal position
          width: "120%", // Make it wide enough to cross the screen
          transform: "rotate(7deg)", // Adjust angle to match image
          zIndex: 2,
        }}
      >
        <span style={textStyles}>Advance API</span> |
        <span style={textStyles}>Vehicle Management</span> |
        <span style={textStyles}>E-Ticket ERP</span> |
        <span style={textStyles}>Branch Management</span> |
        <span style={textStyles}>Dynamic Price Engine</span> |
        <span style={textStyles}>Magic Box</span> |
        <span style={textStyles}>Cargo</span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div style={{}}>
      <div
        style={{
          maxWidth: 1200,
          display: "grid",
          margin: "0 auto 100px auto",
          padding: "16px 0",
          fontSize: 16,
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
          <p>About Our Company</p>
          <p style={{ fontSize: 38, fontWeight: 600 }}>
            We proudly offer our services as branding agency to enhance grow
            your business
          </p>
        </div>

        <div
          style={{
            gap: 8,
            display: "flex",
            textAlign: "end",
            height: "fit-content",
            justifyContent: "end",
          }}
        >
          <p
            style={{
              borderRadius: 60,
              width: "fit-content",
              padding: "10px 24px",
              border: "1px solid" + color.black,
            }}
          >
            Call us
          </p>
          <p
            style={{
              borderRadius: 60,
              width: "fit-content",
              padding: "10px 24px",
              border: "1px solid" + color.black,
            }}
          >
            Email us
          </p>
        </div>
      </div>

      <div
        style={{
          gap: 64,
          maxWidth: 1200,
          display: "grid",
          margin: "0 auto 100px auto",
          padding: "16px 0",
          fontSize: 16,
          gridTemplateColumns: "repeat(2,1fr)",
          alignItems: "center",
        }}
      >
        <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
          <img src={image1} alt="image1" style={{ width: "100%" }} />
        </div>

        <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
          <p>
            Travel ERP solution is one of the emerging offshoot for the Road
            Travel Industry
          </p>
          <p
            style={{
              color: color.darkGray,
              textAlign: "justify",
              lineHeight: 1.5,
            }}
          >
            Infinity Transoft Solution Pvt Ltd is India's one of the most
            exceptional Bus Ticket Booking Engine & ERP solution provider.
            Travels and Tourism using Road is one of the esteemed businesses
            across India. The process of business operations remained manually
            for a long time and left a lot to be craved in terms of efficiency,
            and human errors. There are two major aspects of any travel process.
          </p>
          <p
            style={{
              color: color.darkGray,
              textAlign: "justify",
              lineHeight: 1.5,
            }}
          >
            The first one is ticketing, and the second is online sales and
            promotion of the business. In those two aspects, Ticketing is one of
            the major hassles for most of the individual transporters because
            coordination between the travel point was always inclined to have
            errors. Infinity Transoft Solution is converting those old-aged
            methods into modern Al & ML integrated software, which provides
            promisingly intensified efficiency in the operational area of the
            business.
          </p>
          <p
            style={{
              borderRadius: 60,
              width: "fit-content",
              padding: "10px 24px",
              color: color.white,
              backgroundColor: color.black,
            }}
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

const WhatWeHave = () => {
  const stats = [
    { label: "Bus Operators", value: "800+" },
    { label: "Buses", value: "14000+" },
    { label: "Schedules", value: "35000+" },
    { label: "Passenger Per Month", value: "3.3m+" },
    { label: "Agents", value: "49000+" },
    { label: "Years of Experience", value: "19+" },
    { label: "Employees", value: "250+" },
  ];

  return (
    <div
      style={{
        border: "1px solid" + color.gray,
        backgroundColor: color.lightGray,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 16,
            maxWidth: 1200,
            padding: "100px 0",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              rowGap: 72,
              columnGap: 32,
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            {stats.map((item) => (
              <div style={{}}>
                <p style={{ fontSize: 13, marginBottom: "-4px" }}>
                  {item.label}
                </p>
                <hr />
                <h1 style={{ fontSize: 28, marginTop: 24 }}>{item.value}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const menu = [
    "Intelligence Pricing System",
    "Customization / Automated Reporting System",
    "State of the Art Updations",
    "Enhanced UI / UX Reports",
  ];

  return (
    <div style={{}}>
      <div
        style={{
          fontSize: 16,
          maxWidth: 1200,
          display: "grid",
          margin: "100px auto",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            gap: 16,
            justifyItems: "center",
            display: "grid",
            height: "fit-content",
          }}
        >
          <p>ITS Offering</p>
          <p
            style={{
              fontSize: 38,
              fontWeight: 600,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Complete travel solution on online booking platform
          </p>
        </div>
      </div>

      <div
        style={{
          gap: 0,
          display: "grid",
          margin: "0 0 100px 0",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        <p
          style={{
            fontSize: 18,
            textAlign: "center",
            padding: "32px 64px",
            borderRadius: "0 60px 60px 0",
            border: "1px solid" + color.black,
          }}
        >
          Booking Engine & Website CMS
        </p>
        <p
          style={{
            fontSize: 18,
            borderRadius: 60,
            color: color.white,
            textAlign: "center",
            padding: "32px 64px",
            backgroundColor: color.black,
          }}
        >
          Booking Engine & Website CMS
        </p>
        <p
          style={{
            fontSize: 18,
            textAlign: "center",
            padding: "32px 64px",
            borderRadius: "60px 0 0 60px",
            border: "1px solid" + color.black,
          }}
        >
          Booking Engine & Website CMS
        </p>
      </div>

      <div
        style={{
          gap: 32,
          fontSize: 16,
          maxWidth: 1200,
          display: "grid",
          alignItems: "center",
          margin: "0 auto 100px auto",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
          <p
            style={{
              color: color.darkGray,
              textAlign: "justify",
              lineHeight: 1.5,
            }}
          >
            We at Infinity Transoft Solution, are dedicated toward providing the
            best in class digital service in ticket booking across various
            inventories. Our sophisticatedly designed program provides you with
            travel intelligence. Those insights are extremely crucial for making
            a valuable business decision. Our booking engine and CMS is well
            equipped with insightful analytical reports and charts which, can be
            customized as per the need of the business.
          </p>

          <div style={{ gap: 8, display: "grid" }}>
            {menu.map((item) => (
              <p
                href={item.path}
                key={item}
                style={{ display: "flex", gap: 8, alignItems: "center" }}
              >
                <i class="fi fi-ts-arrow-alt-right"></i> {item}
              </p>
            ))}
          </div>
        </div>

        <div
          style={{
            gap: 8,
            display: "flex",
            textAlign: "end",
            height: "fit-content",
            justifyContent: "end",
          }}
        >
          <img src={image1} alt="image1" style={{ width: "70%" }} />
        </div>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  const menu = [
    {
      icon: "fi fi-ts-galaxy-planet",
      title: "Booking Engine System",
      description:
        "World's largest & fastest 4 inventory Booking Engine System",
    },
    {
      icon: "fi fi-ts-channel",
      title: "All in One Place",
      description:
        "All-In-One place management for Inter-city & Intra-city bus booking, Cargo Booking, Bus Maintenance System, Expense Management Module, Vehicle Hire Management.",
    },
    {
      icon: "fi fi-ts-track",
      title: "Live Bus Tracking",
      description: "Real-Time Live Bus Tracking Facility",
    },
    {
      icon: "fi fi-ts-bus",
      title: "Records from Beginning",
      description:
        "800+ Bus Company, 14000+ Bus Schedules, 2,00,000+ Daily PNRs, 15 Billion+ Successful Traveled Passengers.",
    },
  ];
  return (
    <div
      style={{
        color: color.white,
        backgroundColor: color.black,
        padding: "50px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          display: "grid",
          margin: "0 auto 100px auto",
          padding: "72px 0",
          gap: 64,
          // gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div style={{ gap: 16, display: "grid", height: "fit-content" }}>
          <p style={{ color: color.green }}>Why Choose Us</p>
          <p style={{ fontSize: 38, fontWeight: 500 }}>
            We proudly offer our services
          </p>
        </div>

        <div
          style={{
            rowGap: 72,
            columnGap: 32,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {menu.map((item, index) => (
            <div style={{ display: "grid", height: "fit-content", gap: 32 }}>
              <p style={{ fontSize: 64 }}>
                <i className={item.icon} />
              </p>
              <p style={{ fontSize: 18 }}>{item.title}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ width: "100%", height: 0 }} />
                <span
                  style={{
                    fontSize: 11,
                    width: 24,
                    height: 24,
                    color: color.green,
                    borderRadius: 80,
                    border: "1px solid" + color.darkGray,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  0{index + 1}
                </span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.5 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Latest = () => {
  const dates = [
    {
      year: 2019,
      event: "Dynamic Price Engine",
    },
    {
      year: 2019,
      event:
        "Wakeup Call Facilities for waking your passenger before ample journey time!",
    },
    {
      year: 2020,
      event: "Now know your future income using Occupancy Forecasting!",
    },
    {
      year: 2020,
      event:
        "Get person relationship with your passenger by Last-mile Connectivity / Pickup man Management",
    },
    {
      year: 2022,
      event: "Dynamic QR Code",
    },
  ];

  return (
    <div style={{ backgroundColor: color.white }}>
      <div
        style={{
          fontSize: 16,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "100px 0",
          display: "grid",
          gap: 16,
        }}
      >
        <p>Always Touch With Us</p>
        <p style={{ fontSize: 38, fontWeight: 600 }}>Latest News</p>
      </div>

      <div
        style={{
          gap: 64,
          fontSize: 16,
          maxWidth: 1200,
          display: "grid",
          margin: "0 auto 100px auto",
          padding: "0 0 100px 0",
          alignItems: "center",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
          <img src={image1} alt="image1" style={{ width: "100%" }} />
        </div>

        <div style={{ gap: 16, display: "grid", height: "fit-content" }}>
          {dates.map((item) => (
            <div
              style={{
                gap: 32,
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "auto 1fr 2fr",
              }}
            >
              <p
                style={{
                  width: 90,
                  height: 90,
                  fontSize: 18,
                  display: "flex",
                  borderRadius: 80,
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid" + color.black,
                }}
              >
                {item.year}
              </p>
              <hr style={{ width: "100%", height: 0 }} />
              <p style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.5 }}>
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const menu = {
    quickLinks: [
      { name: "Home", url: "/home" },
      { name: "About Us", url: "/about-us" },
      { name: "Products", url: "/products" },
      { name: "Services", url: "/services" },
      { name: "Download", url: "/download" },
      { name: "Contact Us", url: "/contact-us" },
      { name: "Terms & Conditions", url: "/terms-conditions" },
      { name: "Privacy Policy", url: "/privacy-policy" },
    ],
    contactInfo: {
      address:
        "INFINITY TRANSOFT SOLUTION PVT. LTD., Vishwakarma Society, Near Vavdi Water Tank, 150 Feet Ring Road, Rajkot, Gujarat 360004",
      phoneNumbers: ["+212 522 456 789"],
      email: "info@itspl.net",
    },
  };

  return (
    <>
      <div
        style={{
          gap: 64,
          fontSize: 16,
          maxWidth: 1200,
          display: "grid",
          padding: "16px 0",
          margin: "100px auto",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          <p style={{ fontSize: 48, fontWeight: 700 }}>
            Let's connect and <br />
            Grow Togheter
          </p>

          <div
            style={{
              gap: 8,
              display: "flex",
              textAlign: "end",
              height: "fit-content",
              justifyContent: "end",
            }}
          >
            <div
              style={{
                height: 180,
                width: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 120,
                border: "1px solid" + color.black,
              }}
            >
              <div
                style={{
                  gap: 12,
                  display: "grid",
                  justifyItems: "center",
                }}
              >
                <p>Contact now</p>
                <i class="fi fi-ts-arrow-up-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1200 }}>
          <hr />
        </div>

        <div
          style={{
            gap: 32,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
            <img
              style={{ width: 200 }}
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Cargomatic_%28Company%29_Logo.png"
              alt=""
            />
          </div>

          <div />

          <div
            style={{
              gap: 8,
              display: "grid",
              height: "fit-content",
              justifyContent: "end",
            }}
          >
            <p style={{ marginBottom: 32, fontWeight: 600 }}>Quick Links</p>
            {menu.quickLinks.map((item) => (
              <p
                style={{ color: color.darkGray }}
                href={item.url}
                key={item.name}
              >
                {item.name}
              </p>
            ))}
          </div>

          <div
            style={{
              gap: 8,
              display: "grid",
              height: "fit-content",
              justifyContent: "end",
            }}
          >
            <p style={{ marginBottom: 32, fontWeight: 600 }}>Address</p>
            <p style={{ color: color.darkGray }}>{menu.contactInfo.address}</p>

            <p style={{ margin: "32px 0", fontWeight: 600 }}>Contact</p>
            <p style={{ color: color.darkGray }}>
              {menu.contactInfo.phoneNumbers}
            </p>
            <p style={{ color: color.darkGray }}>{menu.contactInfo.email}</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: color.lightGray,
          fontSize: 11,
          color: color.darkGray,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0",
            margin: "0 auto",
          }}
        >
          <p>
            © 2011-2024{" "}
            <span style={{ color: color.black }}>
              INFINITY TRAVEL SOLUTIONS
            </span>
            . All Right Reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Hosted & Managed by:</p>
            <img
              style={{ height: 32 }}
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Cargomatic_%28Company%29_Logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
