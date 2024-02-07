import React, { useEffect, useState } from "react";
import img from "../assets/img/Frame.svg";
import img1 from "../assets/img/img1.svg";
import foto1 from "../assets/img/Photo.svg";
import foto2 from "../assets/img/Photo2.svg";
import foto5 from "../assets/img/Photo3.svg";
import foto6 from "../assets/img/Large.svg";
import img2 from "../assets/img/Image.svg";
import img3 from "../assets/img/So.svg";
import foto3 from "../assets/img/Photo (1).svg";
import foto4 from "../assets/img/Photo (2).svg";
import Local from "@mui/icons-material/LocalShippingOutlined";
import Check from "@mui/icons-material/CheckCircleOutline";
import Cred from "@mui/icons-material/CreditCardOutlined";
import Spa from "@mui/icons-material/SpaOutlined";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import FileBase64 from "react-file-base64";
import { Button } from "@mui/material";

const About = () => {
  let url = "http://localhost:3000/data";
  const [data, setData] = useState([]);

  // getData
  async function getData() {
    try {
      const { data } = await axios.get(url);
      // console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect((e) => {
    getData();
  }, []);

  //   add img
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const [inp1, setInp1] = useState("")
  const [inp4, setInp4] = useState("")
  const [inp2, setInp2] = useState("")
  const [inp3, setInp3] = useState("")

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function adduser() {
    try {
      if(inp2.trim().length == 0){
        alert("enter your facking month")
      }
      else if(inp3.trim().length == 0){
        alert("enter your facking time")
      }
      else{
        let user = {
          "img": img,
          "name": inp1,
          "price": inp2,
          "color": inp3,
          "roun": inp4
        }
        const {data} = await axios.post(url, user)
        getData()
        setInp1("")
        setInp2("")
        setInp3("")
        setInp4("")
        handleClose()
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const getFiles = (event) => {
    setImg(event.base64)
  }
  const [img, setImg] = useState("")

   //delete
   async function delet(id) {
    try {
      const {data} = await axios.delete(`${url}/${id}`)
      getData()
    } catch (error) {
      console.log(error);
    }
  }

  // edit
  const [inp11, setInp11] = useState("")
  const [inp44, setInp44] = useState("")
  const [inp22, setInp22] = useState("")
  const [inp33, setInp33] = useState("")
  const [idx, setIdx] = useState(null)

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  async function editus() {
    try {
      let newuser = {
        "img": img,
        "name": inp11,
        "price": inp22,
        "color": inp33,
        "roun": inp44
      }
      const {data} = await axios.put(`${url}/${idx}`, newuser)
      setData(data)
      handleClose1()
    } catch (error) {
      console.log(error);
    }
  }

  function edituser(el) {
    handleOpen1()
    setInp11(el.name)
    setInp22(el.price)
    setInp33(el.color)
    setInp44(el.roun)
}

  return (
    <div>
      <div className="w-[47%] absolute md:w-[100%] md:left-0 md:top-[25vh]  dark:bg-[#2A254B] dark:text-[#d9d5fa] text-[#2A254B] bg-[#FFF] left-[600px] p-[40px] top-[40vh]">
        <h1 className="text-[35px] font-[400]">
          Luxury homeware for people who love timeless design quality
        </h1>
        <h1 className="text-[20px] mt-[20px]">
          Shop the new Spring 2022 collection today
        </h1>
        <button className="px-[28px]  dark:bg-[#191537] dark:text-[#d9d5fa] md:w-[100%] py-[10px] md:mt-[5vh] mt-[25vh] bg-[#F9F9F9]">
          View collection
        </button>
      </div>
      <div id="bg" className="md:mt-[90vh]"></div>

      <div className="px-[5%] py-[50px] mt-[20vh]">
        <h1 className="text-[30px] dark:bg-[#0b091a] dark:text-[#d9d5fa] text-[#2A254B] text-center md:text-start">
          What makes our brand different
        </h1>

        <div className="flex justify-between  items-start mt-[40px] md:flex-col md:gap-[40px_0]">
          <div className="w-[23%] md:w-[100%] p-[25px] bg-[#F9F9F9] dark:bg-[#161230] dark:text-[#d9d5fa] text-[#2A254B]">
            <Local />
            <h1 className="text-[20px] my-[10px]">Next day as standard</h1>
            <h1 className="text-[15px]">
              Order before 3pm and get your order the innit next day about as
              standard
            </h1>
          </div>

          <div className="w-[23%] p-[25px] bg-[#F9F9F9] dark:bg-[#161230] dark:text-[#d9d5fa] md:w-[100%] text-[#2A254B]">
            <Check />
            <h1 className="text-[20px] my-[10px]">Made by true artisans</h1>
            <h1 className="text-[15px]">
              Handmade crafted goods made with real passion and craftmanship
            </h1>
          </div>

          <div className="w-[23%] p-[25px] bg-[#F9F9F9] dark:bg-[#161230] dark:text-[#d9d5fa] md:w-[100%] text-[#2A254B]">
            <Cred />
            <h1 className="text-[20px] my-[10px]">Unbeatable prices</h1>
            <h1 className="text-[15px]">
              For our materials and quality you won’t find better prices
              anywhere
            </h1>
          </div>
          <div className="w-[23%] p-[25px] bg-[#F9F9F9] dark:bg-[#161230] dark:text-[#d9d5fa] md:w-[100%] text-[#2A254B]">
            <Spa />
            <h1 className="text-[20px] my-[10px]">Recycled packaging</h1>
            <h1 className="text-[15px]">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </h1>
          </div>
        </div>
      </div>

      <div className="px-[5%] py-[80px]">
        <h1 className="text-[30px] text-[#2A254B] dark:bg-[#0b091a] dark:text-[#d9d5fa]">
          New ceramics
        </h1>

        <div className="flex justify-between flex-wrap items-start my-[20px] md:flex-wrap md:gap-[20px_0]">
          {data.map((e) => {
            return (
              <div
                key={e.id}
                style={{ background: e.color, borderRadius: e.roun }}
                className="w-[24%] dark:bg-[#0b091a] dark:text-[#d9d5fa] md:w-[49%] text-[#2A254B] text-[19px]"
              >
                <img src={e.img} alt="" className="w-[100%]" />
                <h1 className="my-[5px] mt-[20px]">{e.name}</h1>
                <h1>£{e.price}</h1>
                <button className="px-[28px] text-red-500 text-[14px]  dark:bg-[#191537] dark:text-[#d9d5fa] md:w-[100%] py-[10px] mt-[30px] bg-[#F9F9F9]" onClick={()=> delet(e.id)}>delete</button>
                <button onClick={() => {edituser(e), setIdx(e.id)}} className="px-[28px] text-blue-500 ml-[10px] text-[14px]  dark:bg-[#191537] dark:text-[#d9d5fa] md:w-[100%] py-[10px] mt-[30px] bg-[#F9F9F9]">Edit</button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleOpen}
            className="px-[28px] dark:bg-[#191537] text-[17px] dark:text-[#d9d5fa] md:w-[100%] py-[10px] mt-[30px] bg-[#F9F9F9]"
          >
            + ADD
          </button>
        </div>
      </div>

      <div className="w-[100%] px-[5%] py-[50px] dark:bg-[#151231] dark:text-[#d9d5fa]  flex justify-between items-start md:flex-col">
        <div className="w-[49.5%] p-[50px] bg-[#2A254B] text-white md:w-[100%] md:p-[20px] dark:bg-[#110e25] dark:text-[#d9d5fa]">
          <h1 className="text-[35px]">It started with a small idea</h1>
          <h1 className="text-[17px] mt-[30px]">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </h1>
          <button className="px-[28px]  dark:bg-[#1f1b43] dark:text-[#d9d5fa] md:w-[100%] md:mt-[10vh] py-[10px] mt-[35vh] bg-[#F9F9F926]">
            Get in touch
          </button>
        </div>
        <img src={img2} alt="" className="w-[49.5%] md:w-[100%] md:mt-[5vh]" />
      </div>

      <div id="bg1" className="flex justify-center items-end pb-[15vh]">
        <div>
          <input
            type="text"
            className="bg-[#F9F9F9] py-[10px] px-[15px] w-[350px] md:w-[280px]"
            placeholder="your@email.com"
          />
          <button className="px-[28px] py-[10px] text-white mt-[30px] bg-[#2A254B]">
            Sign up
          </button>
        </div>
      </div>

      <div className="px-[5%] text-[#FFF] bg-[#2A254B] dark:bg-[#100e23] dark:text-[#d9d5fa]">
        <div className="flex justify-between items-start md:flex-wrap  py-[50px] ">
          <div className="flex flex-col gap-3 md:w-[50%]">
            <h1 className="text-[20px]">Menu</h1>
            <h1>New arrivals</h1>
            <h1>Best sellers</h1>
            <h1>Recently viewed</h1>
            <h1>Popular this week</h1>
            <h1>All products</h1>
          </div>
          <div className="flex flex-col gap-3 md:w-[50%]">
            <h1 className="text-[20px]">Categories</h1>
            <h1>Crockery</h1>
            <h1>Furniture</h1>
            <h1>Homeware</h1>
            <h1>Plant pots</h1>
            <h1>Chairs</h1>
            <h1>Crockery</h1>
          </div>
          <div className="flex flex-col gap-3 md:my-[30px]">
            <h1 className="text-[20px]">Our company</h1>
            <h1>About us</h1>
            <h1>Vacancies</h1>
            <h1>Contact us</h1>
            <h1>Privacy</h1>
            <h1>Returns policy</h1>
          </div>
          <div>
            <h1 className="text-[20px]">Join our mailing list</h1>
            <div>
              <input
                type="text"
                className="bg-[#FFFFFF26] py-[10px] px-[15px] w-[330px] md:w-[300px]"
                placeholder="your@email.com"
              />
              <button className="px-[28px] py-[10px] text-[#2A254B] mt-[15px] bg-[#FFF]">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center md:justify-center py-[15px] border-t-[2px] border-[#4E4D93]">
          <h1>Copyright 2022 Avion LTD</h1>
          <img src={img3} alt="" className="md:hidden" />
        </div>
      </div>

      {/* add modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FileBase64 multiple={false} onDone={getFiles}/>
          <TextField value={inp1} onChange={(e) => setInp1(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={inp2} onChange={(e) => setInp2(e.target.value)} id="outlined-basic" label="Price" variant="outlined" />
          <TextField value={inp3} onChange={(e) => setInp3(e.target.value)} id="outlined-basic" label="BG-color" variant="outlined" />
          <TextField value={inp4} onChange={(e) => setInp4(e.target.value)} id="outlined-basic" label="Rounded" variant="outlined" />
          <Button variant="contained" onClick={() => adduser() }>add</Button>
        </Box>
      </Modal>

      {/* edit modal */}
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FileBase64 multiple={false} onDone={getFiles}/>
          <TextField value={inp11} onChange={(e) => setInp11(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={inp22} onChange={(e) => setInp22(e.target.value)} id="outlined-basic" label="Price" variant="outlined" />
          <TextField value={inp33} onChange={(e) => setInp33(e.target.value)} id="outlined-basic" label="BG-color" variant="outlined" />
          <TextField value={inp44} onChange={(e) => setInp44(e.target.value)} id="outlined-basic" label="Rounded" variant="outlined" />
          <Button variant="contained" onClick={() => editus()}>edit</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default About;
