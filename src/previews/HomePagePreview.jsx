/* eslint-disable react/prop-types */
import React from "react";

const brandColors = {
  50: "#FBEAEA",
  100: "#F2C4C4",
  200: "#EA9E9E",
  300: "#E27979",
  400: "#DA5353",
  500: "#D22D2D",
  600: "#A82424",
  700: "#7E1B1B",
  800: "#541212",
  900: "#2A0909",
};

const grayColors = {
  50: "#F7FAFC",
  100: "#EDF2F7",
  200: "#E2E8F0",
  300: "#CBD5E0",
  400: "#A0AEC0",
  500: "#718096",
  600: "#4A5568",
  700: "#2D3748",
  800: "#1A202C",
  900: "#171923",
};

const secondaryColors = {
  50: "#FFF8E6",
  100: "#FEECB9",
  200: "#FDDF8C",
  300: "#FCD35E",
  400: "#FCC631",
  500: "#FBBA04",
  600: "#C99503",
  700: "#976F02",
  800: "#644A02",
  900: "#322501",
};

// eslint-disable-next-line
const HomePagePreview = ({ entry, widgetFor, widgetsFor }) => {
  const attributes = entry.getIn(["data"]).toJS();
  console.log(attributes);

  return (
    <main style={{ marginTop: "24px", fontFamily: "sans-serif" }}>
      <section style={{ display: "flex" }}>
        <div style={{ padding: "2rem" }}>
          <h2>
            {attributes.hero.tagline}{" "}
            <span style={{ color: secondaryColors[600] }}>
              {attributes.hero.taglineEmphasis}
            </span>
          </h2>
          <p style={{ color: grayColors[600] }}>{attributes.hero.content}</p>
          <p style={{ color: secondaryColors[700] }}>{attributes.hero.hook}</p>
          <button
            style={{
              marginTop: "10px",
              backgroundColor: secondaryColors[500],
              padding: "8px",
              color: "white",
            }}
          >
            Buy Now
          </button>
        </div>
        <img
          src={attributes.hero.image}
          style={{
            maxWidth: "50%",
            objectFit: "cover",
            objectPosition: "left",
          }}
        />
      </section>

      <div
        style={{
          width: "100%",
          backgroundColor: brandColors[400],
          padding: "6px 12px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        Official Contract Address:{" "}
        <span
          style={{
            backgroundColor: brandColors[200],
            color: "#312a02",
            padding: "1px",
            marginLeft: "6px",
          }}
        >
          {attributes.banner.address}
        </span>
      </div>

      <section
        id="project"
        style={{ backgroundColor: "#EDF2F7", padding: "2rem 2rem" }}
      >
        <h3 style={{ margin: 0, padding: ".5rem 1rem", textAlign: "center" }}>
          {attributes.project.tagline}
        </h3>
        <div style={{ display: "flex" }}>
          <p style={{ width: "50%", padding: "1rem 2rem" }}>
            {attributes.project.content}
          </p>
          <div
            style={{
              backgroundColor: "#aaaaaa",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Stats to pull from APIs
          </div>
        </div>
      </section>

      <section id="tokenomics" style={{ padding: "2rem 2rem" }}>
        <div
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            color: brandColors[700],
            fontSize: ".75rem",
          }}
        >
          {attributes.tokenomics.title}
        </div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            margin: "4px 0",
          }}
        >
          {attributes.tokenomics.tagline}
        </h2>
        <div
          style={{
            textAlign: "center",
            color: grayColors[500],
            fontSize: ".9rem",
            marginTop: "8px",
          }}
        >
          {attributes.tokenomics.description}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gridGap: "8px",
            marginTop: "1rem",
            padding: "0px 1rem",
          }}
        >
          {attributes.tokenomics.items.map((item) => (
            <div style={{ padding: "1rem" }} key={item.title}>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    backgroundColor: brandColors[600],
                    width: "2.65rem",
                    height: "2.65rem",
                    borderRadius: "20%",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "75%",
                    marginLeft: "1rem",
                  }}
                >
                  <div
                    style={{
                      color: grayColors[800],
                      fontWeight: 500,
                      marginBottom: ".5rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ color: grayColors[500] }}>
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How To Buy Section */}
      <section
        style={{ backgroundColor: grayColors[100], padding: "2rem 2rem" }}
      >
        <h1>{attributes.howToBuy.tagline}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flexBasis: "50%", margin: "10px" }}>
            {attributes.howToBuy.steps.map((step, i) => (
              // Steps
              <div
                key={i}
                style={{
                  display: "flex",
                  margin: "10px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: brandColors[200],
                    color: brandColors[700],
                    padding: "10px",
                    margin: "5px",
                    borderRadius: "8px",
                    border: `1px solid ${brandColors[700]}`,
                  }}
                >
                  {i + 1}
                </div>
                <div>{step.description}</div>
              </div>
            ))}
          </div>
          <div>
            {/* Video */}
            <p
              style={{
                background: brandColors[200],
                textAlign: "center",
                padding: "3px",
                borderRadius: "8px",
              }}
            >
              Contract Address
            </p>
            <iframe src={attributes.howToBuy.youtube} />
          </div>
        </div>
      </section>

      {/* Testimonials Section    */}
      <section style={{ padding: "2rem 2rem" }}>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: brandColors[600] }}>
            {attributes.testimonials.tagline}
          </h3>
          <h1>{attributes.testimonials.taglineEmp}</h1>
          <p style={{ color: "grey" }}>{attributes.testimonials.tagDesc}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {attributes.testimonials.testimonials.map((person, i) => (
            // User Card
            <div
              key={i}
              style={{
                border: "1px solid grey",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                margin: "10px",
              }}
            >
              <div style={{ flexBasis: "80%" }}>
                <p style={{ fontStyle: "italic" }}>
                  &quot;{person.content}&quot;
                </p>
                <div style={{ display: "flex" }}>
                  <p style={{ fontWeight: "bold" }}>{person.name}</p>
                  <p style={{ color: "grey" }}>- {person.role}</p>
                </div>
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${person.image})`,
                    width: "50px",
                    height: "50px",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section
        style={{ backgroundColor: grayColors[100], padding: "2rem 2rem" }}
      >
        <h1>{attributes.community.heading}</h1>
        <h1 style={{ color: brandColors[600] }}>
          {attributes.community.subheading}
        </h1>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: grayColors[100], padding: "2rem 2rem" }}
      >
        <div style={{ textAlign: "center" }}>
          <a
            style={{
              textDecoration: "none",
              margin: "5px",
              color: brandColors[300],
            }}
            href={attributes.footer.twitterUrl}
          >
            Twitter
          </a>
          <a
            style={{
              textDecoration: "none",
              margin: "5px",
              color: brandColors[300],
            }}
            href={attributes.footer.telegramUrl}
          >
            Telegram
          </a>
          <a
            style={{
              textDecoration: "none",
              margin: "5px",
              color: brandColors[300],
            }}
            href={attributes.footer.redditUrl}
          >
            Reddit
          </a>
          <a
            style={{
              textDecoration: "none",
              margin: "5px",
              color: brandColors[300],
            }}
            href={attributes.footer.discordUrl}
          >
            Discord
          </a>
        </div>
      </footer>
    </main>
  );
};
export default HomePagePreview;
