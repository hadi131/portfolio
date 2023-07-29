const services = () => {
  const servicesData = [
    {
      title: "Digital Media",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/04.jpg"
    },
    {
      title: "Ideas & Plans",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/03.jpg"
    },
    {
      title: "Prompt Strategies",
      desc: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/04.jpg"
    }
  ];
  return (
    <>
      <div id="services" className="cards">
        {servicesData.map((v) => {
            return(

                <>

          <div className="card" id="card1">
            <h1>{v.title}</h1>
            <p>{v.desc} </p>
            <img src={v.image} alt="" />
          </div>
                </>
            )
        })}
      </div>
    </>
  );
};

export default services;
