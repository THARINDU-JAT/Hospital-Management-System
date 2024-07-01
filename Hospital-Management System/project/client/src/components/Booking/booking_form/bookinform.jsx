import React from 'react';
import { useState } from "react"
import Swal from "sweetalert2"
import { useEffect } from "react";
import "./bookingform.scss";

 const AddBookingForm  = () =>{
    
    const [bookingid, setBookingid] = useState('');
    const [nic, setNic] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [email, setEmail] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [roomtype, setRoomtype] = useState('');
    const [roomCount, setroomCount] = useState('');
    const [totRoom, settotRoom] = useState('');
    const [noadults, setNoadults] = useState('');
    const [nochildren, setNochildren] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);
    const[error,setError] = useState(null);

    // const handleSubmitUP = (e) => {
    //   e.preventDefault();
    //   const updatedBooking = {
    //     nic,
    //     name,
    //     phone,
    //     address1,
    //     address2,
    //     city,
    //     state,
    //     zip,
    //     email,
    //     checkin,
    //     checkout,
    //     roomtype,
    //     roomCount,
    //     totRoom,
    //     noadults,
    //     nochildren
    //   };
    //----------------1st function for discount-----------


    function calculateTotal(roomtype, roomCount) {
        let rate;
        switch(roomtype) {
          case 'Luxary_Rooms':
            rate = 15000;
            break;
          case 'Semi_Luxary_Rooms':
            rate = 12000;
            break;
          case 'Normal_Rooms':
            rate = 10000;
            break;
          default:
            rate = 0;
        }
        return rate * roomCount;
      }

      function handleRoomTypeChange(event) {
        setRoomtype(event.target.value);
        settotRoom(calculateTotal(event.target.value, roomCount));
      }
    
      function handleRoomCountChange(event) {
        setroomCount(event.target.value);
        settotRoom(calculateTotal(roomtype, event.target.value));
      }

      //----------------2nd function for discount-----------


      function calculateDicount(nochildren, totRoom) {
        let dis;
        if (nochildren > 5) {
            dis = nochildren* 0.2;
            
        }else{
            dis = totRoom;
        }
       
        return totRoom - dis;
      }

    
    //   function handleToT(event) {
    //     setNochildren(event.targe.valute);
    //     settotRoom(calculateDicount(event.target.value,totRoom));
    //   }

      function handleToT(event) {
        setNochildren(event.target.value);
        const discountedTotal = calculateDicount(event.target.value, totRoom);
        settotRoom(discountedTotal);
      }

      useEffect(() => {
        const prefix = 'BID';
        let lastID = localStorage.getItem('lastID');
        let nextCount = 0;
        if (lastID) {
          nextCount = parseInt(lastID.substring(3), 10) + 1;
        }
        const nextID = `${prefix}${(nextCount).toString().padStart(4, '0')}`;
        localStorage.setItem('lastID', nextID);
        setBookingid(nextID);
      }, [setBookingid]);

      //localStorage.clear();
      
   const handleSubmit = async (e)=> {

        console.log(e);
        e.preventDefault();
    
        const emptyFields = [];
        if (!bookingid) {
          emptyFields.push("bookingid");
        }
        if (!nic) {
          emptyFields.push("nic");
        }
        if (!name) {
          emptyFields.push("name");
        }
        if (!phone) {
          emptyFields.push("phone");
        }
        if (!address1) {
          emptyFields.push("address1");
        }
        if (!address2) {
          emptyFields.push("address2");
        }
        if (!city) {
          emptyFields.push("city");
        }
        if (!state) {
          emptyFields.push("state");
        }
        if (!zip) {
          emptyFields.push("zip");
        }
        if (!email) {
          emptyFields.push("email");
        }
        if (!checkin) {
          emptyFields.push("checkin");
        }
        if (!checkout) {
          emptyFields.push("checkout");
        }
        if (!roomtype) {
          emptyFields.push("roomtype");
        }
        if (!roomCount) {
          emptyFields.push("roomCount");
        }
        if (!totRoom) {
            emptyFields.push("totRoom");
        }
        if (!noadults) {
            emptyFields.push("noadults");
        }
        if (!nochildren) {
            emptyFields.push("nochildren");
        }
        if(emptyFields.length > 0) {
          setEmptyFields(emptyFields);
          return;
        }
    const booking = {
        bookingid,
        nic,
        name,
        phone,
        address1,
        address2,
        city,
        state,
        zip,
        email,
        checkin,
        checkout,
        roomtype,
        roomCount,
        totRoom,
        noadults,
        nochildren}

        const  response = await fetch("/rmhotel/add",{
        method:'POST',
        body: JSON.stringify(booking),
        headers: {
            'Content-Type': 'application/json',
        },
     });

     const json = await response.json()
     if (!response.ok){
       setError(json.error)
     }

     if (response.ok){

        setBookingid('');
        setNic('');
        setName('');
        setPhone('');
        setAddress1('');
        setAddress2('');
        setCity('');
        setState('');
        setZip('');
        setEmail('');
        setCheckin('');
        setCheckout('');
        setRoomtype('');
        setroomCount('');
        settotRoom('');
        setNoadults('');
        setNochildren('');
        setError(null)

        console.log('New Booking Added',json)
     }
     Swal.fire("Done!", "Payment Successfull!", "success");
   };

return(

    <form className="create"  onSubmit={handleSubmit}>

      <h3> ADD NEW ROOM BOOKING  </h3>

     
      
        <label> Booking ID   </label>
        <input
             type ="text"
             placeholder='Enter Booking ID ' required
             onChange={(e)=> setBookingid(e.target.value)}
            value={bookingid}
        />


        <label> Customer Name   </label>
        <input
             type ="text"
             placeholder='Enter Name ' required
             onChange={(e)=> setName(e.target.value)}
            value={name}
        />
        {emptyFields.includes("name") && (
              <div className="error">*Please enter Name*</div>
        )}

        <label>Customer NIC:</label>
            <input
            type="text"
            minLength="10"
            maxLength="12"
            pattern="^(?:\d{9}(?:V|\d)|\d{12})$"
            unique = "true"
            placeholder="Enter NIC" required
            onChange={(e) => setNic(e.target.value)}
            value={nic}
            />
        {emptyFields.includes("nic") && (
              <div className="error">*Please enter NIC*</div>
        )}

         <label> Contact Number:</label>
            <input
            type="tel"
            pattern="^[0-9]{10}$"
            placeholder="Enter Contact Number"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            />
        {emptyFields.includes("phone") && (
              <div className="error">*Please enter Phone No*</div>
        )}


        <label> Address1  </label>
        <input
             type ="text"
             placeholder='Enter Address1 ' required
             onChange={(e)=> setAddress1(e.target.value)}
            value={address1}
        
        />
        {emptyFields.includes("address1") && (
              <div className="error">*Please enter Address1*</div>
        )}


         <label> Address2 </label>
        <input
             type ="text"
             placeholder='Enter Address2' required
             onChange={(e)=> setAddress2(e.target.value)}
            value={address2}
        
        />
        {emptyFields.includes("address2") && (
              <div className="error">*Please enter Address2*</div>
        )}


         <label>City   </label>
        <input
             type ="text"
             placeholder=' Enter City' required
             onChange={(e)=> setCity(e.target.value)}
            value={city}
        
        />
        {emptyFields.includes("city") && (
              <div className="error">*Please enter City*</div>
        )}


         <label>State  </label>
        <input
             type ="text"
             placeholder=' Enter State' required
             onChange={(e)=> setState(e.target.value)}
            value={state}
        
        />
        {emptyFields.includes("state") && (
              <div className="error">*Please enter State*</div>
        )}


        <label> Zip Code</label>
            <input
            type="number"
            pattern="^[0-9]{5}$"
            placeholder="Enter Zip Code"
            required
            onChange={(e) => setZip(e.target.value)}
            value={zip}
            />
        {emptyFields.includes("zip") && (
              <div className="error">*Please enter Zip*</div>
        )}



         <label> Email  </label>
        <input
             type ="email"
             unique = "true"
             placeholder=' Enter Email' required
             onChange={(e)=> setEmail(e.target.value)}
            value={email}
        
        />
        {emptyFields.includes("email") && (
              <div className="error">*Please enter Email*</div>
        )}


         <label> Check In Date  </label>
        <input
             type ="date"
             min={new Date().toISOString().slice(0, 10)}
             onChange={(e)=> setCheckin(e.target.value)}
            value={checkin}
        
        /> 
        {emptyFields.includes("checkin") && (
              <div className="error">*Please enter Check In Date*</div>
        )}



        <label> Check Out Date  </label>
        <input
             type ="date"
             placeholder=' Check Out Date' required
             min={new Date().toISOString().slice(0, 10)}
             onChange={(e)=> setCheckout(e.target.value)}
            value={checkout}
        
        />
        {emptyFields.includes("checkout") && (
              <div className="error">*Please enter Check Out Date*</div>
        )}



        <label>Room Type</label>
        <select
            value={roomtype}
            onChange={handleRoomTypeChange}

         >

        <option value="Luxary_Rooms" >Luxary Rooms</option>
        <option value="Semi_Luxary_Rooms" >Semi Luxary Rooms</option>
        <option value="Normal_Rooms" >Normal Rooms</option>
      </select>

      {emptyFields.includes("roomtype") && (
              <div className="error">*Please enter Room Type*</div>
      )}


      <label>Enter No Of Rooms</label>

            

      <input
        type="number"
        pattern="^[1-5]{1}$"
        placeholder="Number Between 1 - 5"required
        value={roomCount}
        onChange={handleRoomCountChange} // event handler to handle room count target values in here

      />
      {emptyFields.includes("roomCount") && (
              <div className="error">*Please enter No Of Rooms*</div>
      )}


      <label>Total value of the rooms</label>
      <input
        type="number"
        placeholder="Value"required
        onChange={(e)=> settotRoom(e.target.value)}
        value={totRoom}
      />
        {emptyFields.includes("totRoom") && (
              <div className="error">*Please enter Value*</div>
        )}


        <label> No Of Adults</label>
       <input
             type ="number"
             pattern="^[1-7]{1}$"
             placeholder=' Enter No Of Adults' required
             onChange={(e)=> setNoadults(e.target.value)}
            value={noadults}
        
        />
        {emptyFields.includes("noadults") && (
              <div className="error">*Please enter No Of Adults*</div>
        )}


        <label> No Of Children</label>
       <input
             type ="number"
             pattern="^[1-7]{1}$"
             placeholder=' Enter No Of Children' required
            value={nochildren}
            onChange={handleToT} // event handler to handle discount target values in here
        
        />
        {emptyFields.includes("nochildren") && (
              <div className="error">*Please enter No Of Children*</div>
        )}


        {/* <button type="submit">Submit</button> <br/> <br/>    
        

        <button onClick={() => window.location.reload()}> CANCEL </button> */}

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <button type="submit">Submit</button>
  <button onClick={() => window.location.reload()} style={{ marginLeft: '50px' }}>CANCEL</button>
</div>

        {error && <div className ="error">{error}</div>}


    </form>
    
     )
  
 }
  export default AddBookingForm;
