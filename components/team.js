const team = () => {
  const teamData = [
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/face1.jpg",
      name: "Marie Jordan",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/face2.jpg",
      name: "Ann Brown",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/face3.jpg",
      name: "David",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/face4.jpg",
      name: "Jason Stawer",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/face5.jpg",
      name: "Lisa Green",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/face5.jpg",
      name: "Lisa Green",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
  ];
  return (
    <>
      <div id="teamDiv" className="teamDiv">
        <div className="expertText">
          <h1>Team Of Experts</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="teamCards">


{
    teamData.map(v=>{
        return(
            <>

  <div className="teamCard" id="teamCard3">
            <img
              src={v.image}
              alt=""
            />
            <h1>{v.name}</h1>
            <p>{v.desc} </p>
            <div className="socialIcons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-skype"></i>
            </div>
          </div>

            </>
        )
    })
}
        




        </div>
      </div>
    </>
  );
};

export default team;
