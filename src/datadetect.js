export const detectColumns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "disease",
      headerName: "Disease",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.disease}
          </div>
        );
      },
    },
    {
      field: "user",
      headerName: "User",
      width: 170,
    },
  
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
  
    {
      field: "create",
      headerName: "Created at",
      width: 130,
    },

    {
      field: "isreport",
      headerName: "Is report",
      width: 130,
    },
  
  

  ];
  
  //temporary data
  export const detectRows = [
    {
      id: 1,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      location: "toa do",
      create: "2022-12-12",
      isreport: "No"
    },
    {
      id: 2,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      location: "toa do",
      create: "2022-12-12",
      isreport: "No"
    },
    {
      id: 3,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      location: "toa do",
      create: "2022-12-12",
      isreport: "No"
    },
    {
      id: 4,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      location: "toa do",
      create: "2022-12-12",
      isreport: "No"
    },
    {
      id: 5,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      location: "toa do",
      create: "2022-12-12",
      isreport: "No"
    },

    {
      id: 6,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      location: "toa do",
      create: "2022-12-12",
      isreport: "No"
    },

    {
      id: 7,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      location: "toa do",
      create: "2022-12-12",
      isreport: "No"
    },
  ];
  
  