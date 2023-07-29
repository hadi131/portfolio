import React from "react";

const skills = () => {
  const skillsData = [
    {
      value: "100",
      min: "0",
      max: "100",
      text: "75%",
      name: "Marketing"
    },
    {
      value: "73",
      min: "0",
      max: "100",
      text: "75%",
      name: "Branding"
    },
    {
      value: "35",
      min: "0",
      max: "100",
      text: "75%",
      name: "Creation"
    },
    {
      value: "60",
      min: "0",
      max: "100",
      text: "75%",
      name: "Graphic"
    }
  ];
  return (
    <>
      <div id="skills" className="skills">
        <div className="skillText">
          <h1>Our Company Skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nullam
            placerat est quis lorem tristique aliquet cras quis tristique felis
            vitae eleifend sapien.
          </p>
        </div>

        <div className="progress">

        {skillsData.map((v) => {
          return (
            <>
              <div className="prog">
                <div className="progress-bar bar4">
                  <progress
                    value={v.value}
                    min={v.min}
                    max={v.max}
                    style={{ visibility: "hidden", height: "0", width: "0" }}
                  >
                    {v.text}
                  </progress>
                </div>
                <p>{v.name} </p>
              </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default skills;
