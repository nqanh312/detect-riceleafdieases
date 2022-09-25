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
      description: "I don't believe that is Brown Spot!",
      create: "2022-09-13",
      status: "reject"
      //Pending, Reject, Accept
    },
    {
      id: 2,
      disease: "Tungro",
      img: "http://www.knowledgebank.irri.org/images/stories/tungro-1.jpg",
      user: "Quoc Khang",
      description: "I need more information to prevent this disease",
      create: "2022-09-10",
      status: "pending"
    },
    {
      id: 3,
      disease: "Bacterial Blight",
      img: "http://tanthanhco.com.vn/img/img/1(240).jpg",
      user: "Trong Phuc",
      description: "I believe that it's Leaf smuf disease",
      create: "2022-09-10",
      status: "reject"
    },
    {
      id: 4,
      disease: "Tungro",
      img: "https://symbio.com.vn/vnt_upload/news/05_2021/thuoc_dac_tri_benh_vang_la_chin_som_hai_lua.jpg",
      user: "Hoang Khang",
      description: "I think it's Red Stripe rather than Tungro",
      create: "2022-09-09",
      status: "accept"
    },
    // {
    //   id: 5,
    //   disease: "Brown Spot",
    //   img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
    //   user: "Nhat Quang",
    //   description: "I believe that it's Leaf smuf disease",
    //   create: "2022-12-12",
    //   status: "Pending"
    // },

    // {
    //   id: 6,
    //   disease: "Brown Spot",
    //   img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
    //   user: "Minh Tri",
    //   description: "I believe that it's Leaf smuf disease",
    //   create: "2022-12-12",
    //   status: "Reject"
    // },

    // {
    //   id: 7,
    //   disease: "Brown Spot",
    //   img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
    //   user: "Tu My",
    //   description: "I believe that it's Leaf smuf disease",
    //   create: "2022-12-12",
    //   status: "Approved"
    // },
  ];
  
  