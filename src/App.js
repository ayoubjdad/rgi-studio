import { color } from "./theme/color";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <AdvancedTechnologySection />
      <About />
      <WhatWeHave />
      <Solutions />
      <WhyChoose />
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
          <p>+212 707 123 456</p>
          <p
            style={{
              borderRadius: 60,
              color: color.white,
              padding: "10px 24px",
              backgroundColor: color.black,
            }}
          >
            Login
          </p>
          <p>Icon</p>
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
          }}
        >
          <h1>Image</h1>
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
        {/* Note: The image shows the text getting cut off on the right, 
            so these might not be fully visible depending on exact placement */}
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
    color: "#c2dd75",
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
        }}
      >
        <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
          <p style={{ fontSize: 38, fontWeight: 600 }}>Image </p>
        </div>

        <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
          <p>
            Travel ERP solution is one of the emerging offshoot for the Road
            Travel Industry
          </p>
          <p style={{ color: color.darkGray }}>
            Infinity Transoft Solution Pvt Ltd is India's one of the most
            exceptional Bus Ticket Booking Engine & ERP solution provider.
            Travels and Tourism using Road is one of the esteemed businesses
            across India. The process of business operations remained manually
            for a long time and left a lot to be craved in terms of efficiency,
            and human errors. There are two major aspects of any travel process.
          </p>
          <p style={{ color: color.darkGray }}>
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
    <div style={{ backgroundColor: "#e9e5e5" }}>
      <div>
        <div
          style={{
            fontSize: 16,
            maxWidth: 1200,
            padding: "100px 0",
            margin: "0 auto 100px auto",
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
          maxWidth: 1200,
          display: "grid",
          margin: "0 auto 50px auto",
          padding: "16px 0",
          fontSize: 16,
          justifyItems: "center",
        }}
      >
        <div style={{ gap: 16, display: "grid", height: "fit-content" }}>
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
          margin: "0 0 100px 0",
          gap: 0,
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        <p
          style={{
            fontSize: 18,
            borderRadius: "0 60px 60px 0",
            textAlign: "center",
            padding: "32px 64px",
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
            borderRadius: "60px 0 0 60px",
            textAlign: "center",
            padding: "32px 64px",
            border: "1px solid" + color.black,
          }}
        >
          Booking Engine & Website CMS
        </p>
      </div>

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
          <p style={{ color: color.darkGray }}>
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
              <p href={item.path} key={item}>
                → {item}
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
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://img.freepik.com/free-vector/modern-desktop-compute-concept-illustration_114360-12156.jpg?t=st=1747946465~exp=1747950065~hmac=bbcd8c51aaad89463aadd170f95e3be0df7a65f7c7c00410a696b50604caefff&w=1380"
          />
        </div>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  const menu = [
    {
      title: "Booking Engine System",
      description:
        "World's largest & fastest 4 inventory Booking Engine System",
    },
    {
      title: "All in One Place",
      description:
        "All-In-One place management for Inter-city & Intra-city bus booking, Cargo Booking, Bus Maintenance System, Expense Management Module, Vehicle Hire Management.",
    },
    {
      title: "Live Bus Tracking",
      description: "Real-Time Live Bus Tracking Facility",
    },
    {
      title: "Records from Beginning",
      description:
        "800+ Bus Company, 14000+ Bus Schedules, 2,00,000+ Daily PNRs, 15 Billion+ Successful Traveled Passengers.",
    },
  ];
  return (
    <div style={{ color: color.white, backgroundColor: color.black }}>
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
          <p style={{ color: color.yellowGreen }}>Why Choose Us</p>
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
              <p style={{ fontSize: 64 }}>Image</p>
              <p style={{ fontSize: 18 }}>{item.title}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ width: "100%", height: 0 }} />
                <span
                  style={{
                    fontSize: 11,
                    width: 24,
                    height: 24,
                    color: color.yellowGreen,
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
              <p style={{ fontSize: 13 }}>{item.description}</p>
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
      phoneNumbers: ["(020) 668 355 00", "+91 69000 26000"],
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
          margin: "0 auto 100px auto",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          <div style={{ gap: 32, display: "grid", height: "fit-content" }}>
            <p>About Our Company</p>
            <p style={{ fontSize: 48, fontWeight: 700 }}>
              Let's connect and <br />
              Grow Togheter
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
                height: 180,
                width: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 120,
                border: "1px solid" + color.black,
              }}
            >
              Contact now
            </p>
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
