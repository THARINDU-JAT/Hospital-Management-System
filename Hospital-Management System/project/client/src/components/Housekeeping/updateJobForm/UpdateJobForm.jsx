// import React, { useState, useEffect } from "react";
// import "./updateJobForm.scss";
// import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";

// const UpdateJobForm = () => {
//   const [jobTitle, setJobTitle] = useState("");
//   const [employeeId, setEmpId] = useState("");
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [workingShift, setWorkingShift] = useState("");
//   const [jobDesc, setRemarks] = useState("");
//   const [error, setError] = useState(null);

//   const jobId = useParams();

//   useEffect(() => {
//     async function fetchJob() {
//       const response = await fetch(`/jobs/${jobId}`);
//       const data = await response.json();

//       setJobTitle(data.jobTitle);
//       setEmpId(data.employeeId);
//       setLocation(data.location);
//       setDate(data.date);
//       setWorkingShift(data.workingShift);
//       setRemarks(data.jobDesc);
//     }

//     fetchJob();
//   }, [jobId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const job = { jobTitle, employeeId, location, date, workingShift, jobDesc };

//     const response = await fetch(`/jobs/${jobId}`, {
//       method: "PUT",
//       body: JSON.stringify(job),
//       headers: {
//         "content-type": "application/json",
//       },
//     });

//     const json = await response.json();

//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setJobTitle("");
//       setEmpId("");
//       setLocation("");
//       setDate("");
//       setWorkingShift("");
//       setRemarks("");
//       setError(null);
//       console.log("job updated", json);
//     }
//     Swal.fire("Done!", "Job Updated Successfully!", "success");
//   };

//   return (
//     <form className="addJob" onSubmit={handleSubmit}>
//       <label>Job Title :</label>
//       <input
//         type="text"
//         onChange={(e) => setJobTitle(e.target.value)}
//         value={jobTitle}
//         required
//       />

//       <label>Employee ID :</label>
//       <input
//         type="text"
//         onChange={(e) => setEmpId(e.target.value)}
//         value={employeeId}
//         required
//       />

//       <label>Location :</label>
//       <input
//         type="text"
//         onChange={(e) => setLocation(e.target.value)}
//         value={location}
//         required
//       />

//       <label>Date :</label>
//       <input
//         type="date"
//         onChange={(e) => setDate(e.target.value)}
//         min={new Date().toISOString().slice(0, 10)}
//         value={date}
//         required
//       />

//       <label>Working Shift :</label>
//       <select
//         onChange={(e) => setWorkingShift(e.target.value)}
//         value={workingShift}
//         required
//       >
//         <option value="">--Please choose an option--</option>
//         <option value="morning">Morning</option>
//         <option value="evening">Evening</option>
//       </select>

//       <label>Remarks :</label>
//       <input
//         type="text"
//         className="remark"
//         onChange={(e) => setRemarks(e.target.value)}
//         value={jobDesc}
//         required
//       />

//       <button>UPDATE</button>
//       <p>{error && <p className="error">{error}</p>}</p>
//     </form>
//   );
// };

// export default UpdateJobForm;

import React from "react";
import { useState, useEffect } from "react";
import "./updateJobForm.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJobForm = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    jobTitle: "",
    employeeId: "",
    location: "",
    date: "",
    workingShift: "",
    jobDesc: "",
  });
  useEffect(() => {
    axios
      .get(`/jobs/${id}`)
      .then((res) => {
        setValues({
          ...values,
          jobTitle: res.data.jobTitle,
          employeeId: res.data.employeeId,
          location: res.data.location,
          date: res.data.date,
          workingShift: res.data.workingShift,
          jobDesc: res.data.jobDesc,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/jobs/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Job Updated Successfully!", "success");
        navigate("/housekeeping/viewDutyRoster");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>Job Title:</label>
      <input
        type="text"
        value={values.jobTitle}
        onChange={(e) => setValues({ ...values, jobTitle: e.target.value })}
        required
      />

      <label>Employee ID:</label>
      <input
        type="text"
        value={values.employeeId}
        onChange={(e) => setValues({ ...values, employeeId: e.target.value })}
        required
      />

      <label>Location:</label>
      <input
        type="text"
        value={values.location}
        onChange={(e) => setValues({ ...values, location: e.target.value })}
        required
      />

      <label>Date:</label>
      <input
        type="date"
        value={values.date}
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
        required
      />

      <label>Working Shift:</label>
      <select
        value={values.workingShift}
        onChange={(e) => setValues({ ...values, workingShift: e.target.value })}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="morning">Morning</option>
        <option value="evening">Evening</option>
      </select>

      <label>Job Description:</label>
      <input
        type="text"
        value={values.jobDesc}
        onChange={(e) => setValues({ ...values, jobDesc: e.target.value })}
        required
      />

      <button type="submit">Update</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default UpdateJobForm;
