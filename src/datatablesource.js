export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "user",
    headerName: "User",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 270,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },

  {
    field: "birthday",
    headerName: "Birthday",
    width: 130,
  },

  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },

  {
    field: "admin",
    headerName: "Admin",
    width: 70,
  },

  {
    field: "status",
    headerName: "Status",
    width: 70,
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
export const userRows = [
  {
    id: 1,
    username: "Quynh Anh",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "anhnqce160515@fpt.edu.vn",
    birthday: "2002-11-30",
    phone: "0813399973",
    gender: "female",
    admin: "Yes"
  },
  {
    id: 2,
    username: "Quoc Khang",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "khangnqce160234@fpt.edu.vn",
    birthday: "2002-12-10",
    phone: "0985873645",
    gender: "male",
    admin: "Yes"
  },
  {
    id: 3,
    username: "Trong Phuc",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "phucntce160315@fpt.edu.vn",
    birthday: "2002-10-10",
    phone: "0939179803",
    gender: "male",
    admin: "No"
  },
  {
    id: 4,
    username: "Hoang Khang",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "nhkhang1122@gmail.com",
    birthday: "2003-09-12",
    phone: "0917767872",
    gender: "male",
    admin: "No"
  },
  {
    id: 5,
    username: "Tuan Khai",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "tuankhai512@gmail.com",
    birthday: "2001-12-23",
    phone: "0923485218",
    gender: "male",
    admin: "No"
  },
  {
    id: 6,
    username: "Ha Thien",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "thiennhse150234@fpt.edu.vn",
    birthday: "2001-06-12",
    phone: "0928473528",
    gender: "male",
    admin: "No"
  },
  {
    id: 7,
    username: "Phuoc",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "trannguyenphuoc1402@gmail.com",
    birthday: "1995-02-14",
    phone: "0923238875",
    gender: "male",
    admin: "No"
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    birthday: "2000-12-12",
    phone: "0123344456",
    gender: "male",
    admin: "No"
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    birthday: "2000-12-12",
    phone: "0123344456",
    gender: "male",
    admin: "No"
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    birthday: 2000-12-12,
    phone: "0123344456",
    gender: "male",
    admin: "No"
  },
];

