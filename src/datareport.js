export const reportColumns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "disease",
      headerName: "Detected disease",
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
      field: "create",
      headerName: "Created at",
      width: 130,
    },

    {
      field: "description",
      headerName: "Description",
      width: 280,
    },
  
    {
      field: "status",
      headerName: "Status",
      width: 90,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  

  ];
  
  //temporary data
  export const reportRows = [
    {
      id: 1,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      description: "I believe that it's Leaf smuf disease",
      create: "2022-12-12",
      status: "Pending"
    },
    {
      id: 2,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      description: "I believe that it's Leaf smuf disease",
      create: "2022-12-12",
      status: "Pending"
    },
    {
      id: 3,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      description: "I believe that it's Leaf smuf disease",
      create: "2022-12-12",
      status: "Pending"
    },
    {
      id: 4,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      description: "I believe that it's Leaf smuf disease",
      create: "2022-12-12",
      status: "Pending"
    },
    {
      id: 5,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      description: "I believe that it's Leaf smuf disease",
      create: "2022-12-12",
      status: "Pending"
    },

    {
      id: 6,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      description: "I believe that it's Leaf smuf disease",
      create: "2022-12-12",
      status: "Reject"
    },

    {
      id: 7,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      user: "Quynh Anh",
      description: "I believe that it's Leaf smuf disease",
      create: "2022-12-12",
      status: "Approved"
    },
  ];
  
  