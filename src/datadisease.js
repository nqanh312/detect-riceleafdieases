export const diseaseColumns = [
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
      field: "symptom",
      headerName: "Symptom",
      width: 170,
    },
  
    {
      field: "treatment",
      headerName: "Treatment",
      width: 150,
    },
  
    {
      field: "prevention",
      headerName: "Prevention",
      width: 130,
    },
  
  

  ];
  
  //temporary data
  export const diseaseRows = [
    {
      id: 1,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      symptom: "1snow@gmail.com",
      treatment: "2000-12-12",
      prevention: "0123344456",
    },
    {
      id: 2,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      symptom: "1snow@gmail.com",
      treatment: "2000-12-12",
      prevention: "0123344456",
    },
    {
      id: 3,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      symptom: "1snow@gmail.com",
      treatment: "2000-12-12",
      prevention: "0123344456",
    },
    {
      id: 4,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      symptom: "1snow@gmail.com",
      treatment: "2000-12-12",
      prevention: "0123344456",
    },
    {
      id: 5,
      disease: "Brown Spot",
      img: "http://www.knowledgebank.irri.org/images/stories/brown-spot-3.jpg",
      symptom: "1snow@gmail.com",
      treatment: "2000-12-12",
      prevention: "0123344456",
    },
  ];
  
  