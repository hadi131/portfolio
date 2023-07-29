const clients = () => {
  const clientsData = [
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/1.png"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/2.png"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/3.png"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/4.png"
    },
    {
      image:
        "https://mobirise.com/extensions/solutionm4/websolution/assets/images/5.png"
    }
  ];
  return (
    <>
      <div className="clients">
        <div className="clientText">
          <h1>Our Clients</h1>
        </div>

        <div className="clientNames">
          {clientsData.map((v) => {
            return (
              <>
                <div className="client">
                  <img
                    src={v.image}
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default clients;
