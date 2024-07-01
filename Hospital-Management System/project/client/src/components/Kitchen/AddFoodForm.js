// import { useState } from "react"
// import React from "react"
// import "./AddFoodForm.scss"

// const AddFoodForm = ()=>{
//     const [ foodName,setFoodName] = useState("");
//     const [ type,setType] = useState("");
//     const [ quantity,setQuantity] = useState("");
//     const [ unitPrice,setunitPrice] = useState("");
//     const [ error,setError] = useState(null);
//     const [emptyFields, setEmptyFields] = useState("")

//     const handleSubmit=async(e)=>{
//         e.preventDefault()

//         const stock = {foodName,type,quantity,unitPrice};

//         const response = await fetch ("/food",{
//             method:'POST',
//             body: JSON.stringify(stock),
//             headers:{
//                 'Content-Type': 'application/json',
//             },
//         });
//         const json= await response.json();
//         if (!response.ok){
//             setError(json.error);
//             setEmptyFields(json.emptyFields)

//         }

//         if(response.ok){
//             setFoodName("");
//             setType("");
//             setQuantity("");
//             setunitPrice("");
//             setError(null);
//             setEmptyFields("")
//             console.log("New food added",json);
//         }
//     }
//     return(
//          <form className="create" onSubmit={handleSubmit}>
//             <h3>Add a new food</h3>

//             <label> Food : </label>
//             <input
//             type = "text"
//             onChange={ (e)  =>setFoodName(e.target.value) }
//             value={foodName}
//             className={emptyFields.includes('foodName')?'error':""}
//             />

//            <label> Type: </label>
//             <input
//             type = "text"
//             onChange={ (e)  =>setType(e.target.value) }
//             value={type}
//             className={emptyFields.includes('type')?'error':''}
//             />

//          <label> Quantity: </label>
//             <input
//             type = "number"
//             onChange={ (e)  =>setQuantity(e.target.value) }
//             value={quantity}
//             className={emptyFields.includes('quantity')?'error':''}
//             />

//            <label> unitPrice: </label>
//             <input
//             type = "number"
//             onChange={ (e)  =>setunitPrice(e.target.value) }
//             value={unitPrice}
//             className={emptyFields.includes('unitPrice')?'error':''}
//             />

//             <button>Add Food</button>
//             {error && <div className="error"> {error}</div>}
//          </form>
//     );
// };

// export default AddFoodForm;

// import { useState } from "react";
// import React from "react";
// import "./AddFoodForm.scss";

// const AddFoodForm = () => {
//   const [foodName, setFoodName] = useState("");
//   const [type, setType] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [unitPrice, setUnitPrice] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const emptyFields = [];
//     if (!foodName) {
//       emptyFields.push("foodName");
//     }
//     if (!type) {
//       emptyFields.push("type");
//     }
//     if (!quantity) {
//       emptyFields.push("quantity");
//     }
//     if (!unitPrice) {
//       emptyFields.push("unitPrice");
//     }
//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       setError("Please fill in all fields");
//       return;
//     }

//     const stock = { foodName, type, quantity, unitPrice };

//     const response = await fetch("/food", {
//       method: "POST",
//       body: JSON.stringify(stock),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }

//     if (response.ok) {
//       setFoodName("");
//       setType("");
//       setQuantity("");
//       setUnitPrice("");
//       setError(null);
//       setEmptyFields([]);
//       console.log("New food added", json);
//     }
//   };
//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Add a new food</h3>

//       <label> Food : </label>
//       <input
//         type="text"
//         placeholder="Enter Food Name"
//         onChange={(e) => setFoodName(e.target.value)}
//         value={foodName}
//         className={emptyFields.includes("foodName") ? "error" : ""}
//       />

//       <label> Type: </label>
//       <input
//         type="text"
//         placeholder="Enter Food Type"
//         onChange={(e) => setType(e.target.value)}
//         value={type}
//         className={emptyFields.includes("type") ? "error" : ""}
//       />

//       <label> Quantity: </label>
//       <input
//         type="number"
//         placeholder="Enter Quantity"
//         onChange={(e) => setQuantity(e.target.value)}
//         value={quantity}
//         className={emptyFields.includes("quantity") ? "error" : ""}
//       />

//       <label> Unit Price: </label>
//       <input
//         type="number"
//         placeholder="Enter Unit Price"
//         onChange={(e) => setUnitPrice(e.target.value)}
//         value={unitPrice}
//         className={emptyFields.includes("unitPrice") ? "error" : ""}
//       />

//       <button>Add Food</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default AddFoodForm;
// correct code without the error message

// import { useState } from "react";
// import React from "react";
// import "./AddFoodForm.scss";

// const AddFoodForm = () => {
//   const [foodName, setFoodName] = useState("");
//   const [type, setType] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [unitPrice, setUnitPrice] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const emptyFields = [];
//     if (!foodName) {
//       emptyFields.push("foodName");
//     }
//     if (!type) {
//       emptyFields.push("type");
//     }
//     if (!quantity) {
//       emptyFields.push("quantity");
//     }
//     if (!unitPrice) {
//       emptyFields.push("unitPrice");
//     }
//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       setError(null);
//       return;
//     }

//     const stock = { foodName, type, quantity, unitPrice };

//     const response = await fetch("/food", {
//       method: "POST",
//       body: JSON.stringify(stock),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }

//     if (response.ok) {
//       setFoodName("");
//       setType("");
//       setQuantity("");
//       setUnitPrice("");
//       setError(null);
//       setEmptyFields([]);
//       console.log("New food added", json);
//     }
//   };
//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Add a new food</h3>

//       <label> Food : </label>
//       <input
//         type="text"
//         onChange={(e) => setFoodName(e.target.value)}
//         value={foodName}
//         className={emptyFields.includes("foodName") ? "error" : ""}
//       />
//       {emptyFields.includes("foodName") && <div className="input-error">Must fill in food name</div>}

//       <label> Type: </label>
//       <input
//         type="text"
//         onChange={(e) => setType(e.target.value)}
//         value={type}
//         className={emptyFields.includes("type") ? "error" : ""}
//       />
//       {emptyFields.includes("type") && <div className="input-error">Must fill in type</div>}

//       <label> Quantity: </label>
//       <input
//         type="number"
//         onChange={(e) => setQuantity(e.target.value)}
//         value={quantity}
//         className={emptyFields.includes("quantity") ? "error" : ""}
//       />
//       {emptyFields.includes("quantity") && <div className="input-error">Must fill in quantity</div>}

//       <label> unitPrice: </label>
//       <input
//         type="number"
//         onChange={(e) => setUnitPrice(e.target.value)}
//         value={unitPrice}
//         className={emptyFields.includes("unitPrice") ? "error" : ""}
//       />
//       {emptyFields.includes("unitPrice") && <div className="input-error">Must fill in unit price</div>}

//       <button>Add Food</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// // export default AddFoodForm;

import { useState } from "react";
import React from "react";
import "./AddFoodForm.scss";
import Swal from "sweetalert2";

const AddFoodForm = () => {
  const [foodName, setFoodName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const emptyFields = [];
    if (!foodName) {
      emptyFields.push("foodName");
    }
    if (!type) {
      emptyFields.push("type");
    }
    if (!quantity) {
      emptyFields.push("quantity");
    }
    if (!unitPrice) {
      emptyFields.push("unitPrice");
    }
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      setError("Please fill in all fields");
      return;
    }

    const stock = { foodName, type, quantity, unitPrice, date };

    const response = await fetch("/food", {
      method: "POST",
      body: JSON.stringify(stock),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // if (!response.ok) {
    //   setError(json.error);
    // }

    if (!response.ok) {
      if (response.status === 500) {
        setError("Food name is already exist");
      } else {
        setError(json.error);
      }
    } else {
      setFoodName("");
      setType("");
      setQuantity("");
      setUnitPrice("");
      setDate("");
      setError(null);
      setEmptyFields([]);
      console.log("New food added", json);
      Swal.fire("Done!", "Food item added successfully!.", "success");
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new food</h3>

      <label> Food : </label>
      {emptyFields.includes("foodName") && (
        <div className="error">*Please enter a food name</div>
      )}
      <input
        type="text"
        placeholder="Enter the food name"
        onChange={(e) => setFoodName(e.target.value)}
        value={foodName}
      />

      <label> Type: </label>
      {emptyFields.includes("type") && (
        <div className="error">*Please enter a type</div>
      )}
      <input
        type="text"
        placeholder="Enter the food type"
        onChange={(e) => setType(e.target.value)}
        value={type}
      />

      <label> Quantity: </label>
      {emptyFields.includes("quantity") && (
        <div className="error">*Please enter a quantity</div>
      )}
      <input
        type="number"
        placeholder="Enter quantity"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
      />

      <label> unitPrice: </label>
      {emptyFields.includes("unitPrice") && (
        <div className="error">*Please enter a unit price</div>
      )}
      <input
        type="number"
        placeholder="Enter unit price"
        onChange={(e) => setUnitPrice(e.target.value)}
        value={unitPrice}
      />

      <label> Date: </label>
      {emptyFields.includes("date") && (
        <div className="error">*Please enter a quantity</div>
      )}
      <input
        type="date"
        max={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <button>Add Food</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddFoodForm;
//nice one

// import { useState } from "react";
// import React from "react";
// import "./AddFoodForm.scss";

// const AddFoodForm = () => {
//   const [foodName, setFoodName] = useState("");
//   const [type, setType] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [unitPrice, setUnitPrice] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const emptyFields = [];
//     if (!foodName) {
//       emptyFields.push("foodName");
//     }
//     if (!type) {
//       emptyFields.push("type");
//     }
//     if (!quantity) {
//       emptyFields.push("quantity");
//     }
//     if (!unitPrice) {
//       emptyFields.push("unitPrice");
//     }
//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       setError("Please fill in all fields");
//       return;
//     }

//     const stock = { foodName, type, quantity, unitPrice };

//     const response = await fetch("/food", {
//       method: "POST",
//       body: JSON.stringify(stock),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }

//     if (response.ok) {
//       setFoodName("");
//       setType("");
//       setQuantity("");
//       setUnitPrice("");
//       setError(null);
//       setEmptyFields([]);
//       console.log("New food added", json);
//     }
//   };

//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Add a new food</h3>

//       <label>Food:</label>
//       <input
//         type="text"
//         onChange={(e) => setFoodName(e.target.value)}
//         value={foodName}
//         className={emptyFields.includes("foodName") ? "error" : ""}
//       />
//       {emptyFields.includes("foodName") && (
//         <div className="error-msg">This field is required.</div>
//       )}

//       <label>Type:</label>
//       <input
//         type="text"
//         onChange={(e) => setType(e.target.value)}
//         value={type}
//         className={emptyFields.includes("type") ? "error" : ""}
//       />
//       {emptyFields.includes("type") && (
//         <div className="error-msg">This field is required.</div>
//       )}

//       <label>Quantity:</label>
//       <input
//         type="number"
//         onChange={(e) => setQuantity(e.target.value)}
//         value={quantity}
//         className={emptyFields.includes("quantity") ? "error" : ""}
//       />
//       {emptyFields.includes("quantity") && (
//         <div className="error-msg">This field is required.</div>
//       )}

//       <label>Unit Price:</label>
//       <input
//         type="number"
//         onChange={(e) => setUnitPrice(e.target.value)}
//         value={unitPrice}
//         className={emptyFields.includes("unitPrice") ? "error" : ""}
//       />
//       {emptyFields.includes("unitPrice") && (
//         <div className="error-msg">This field is required.</div>
//       )}

//       <button>Add Food</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default AddFoodForm;
