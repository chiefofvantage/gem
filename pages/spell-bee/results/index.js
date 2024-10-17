import { db } from "@/firebase/firebaseinitialization";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";


const Results = () => {
  const [studentData, setStudentData] = useState(null);
  const [registerNumber, setRegisterNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchStudentData = async () => {
    if (!registerNumber) {
      alert("Please enter a registration number.");
      return;
    }

    setLoading(true);
    // Trim spaces

    console.log("Fetching data for:", registerNumber);

    try {
      const docRef = doc(db, "students_data", registerNumber);
      const docSnap = await getDoc(docRef, { source: "server" }); // Fetch data from the server

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setStudentData(docSnap.data());
      } else {
        console.log("No such document!");
        alert("No such document found!");
        setStudentData(null);
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    } finally {
      setLoading(false);
      setRegisterNumber("");
    }
  };
  return (
    <main className="bg-gradient-to-br from-blue-light to-blue-bright h-screen  w-full flex justify-center items-start relative">
      <div className="bg-[url(/spell-bee-2.png)] h-[290px] w-[363px] absolute left-5 bottom-2 xl:block hidden"></div>
      <div className="bg-[url(/idea.png)] h-[285px] w-[265px] absolute right-8 bottom-5 xl:block hidden"></div>
      {/* <div className="absolute">
        <div className="border-white border-2  rounded-full h-72 w-72 ">
          <div className="border-white border-2  rounded-full h-56 w-56 "></div>
        </div>
      </div> */}
      <div className="bg-white w-[780px] h-[600px] rounded-xl mt-[48px] flex flex-col justify-start items-center  relative z-20">
        <div className="bg-[url(/grey-spell.png)] h-[45px] w-[190px] bg-cover mt-20 z-20"></div>
        <h6 className="font-semibold text-base mt-15">Spell Bee Results</h6>
        <div className="flex flex-row justify-around w-[700px] mt-3 relative ">
          <input
            placeholder="Enter the registeration number "
            className="bg-input-bg w-[512px] py-2 pl-4 rounded  z-20"
            value={registerNumber}
            onChange={(e) => setRegisterNumber(e.target.value)}
          ></input>
          <button
            className="bg-button-color text-white px-4 py-1 text-sm rounded  z-20"
            onClick={fetchStudentData}
            disabled={loading}
          >
            {loading ? "Loading.." : "View Results"}
          </button>
        </div>
        {studentData && (
          <div className="flex flex-row w-full px-6 mt-4 h-[50px] justify-around ">
            <div className="w-1/2 flex flex-col h-10 mr-6">
              <h6 className="font-semibold">Student Details</h6>
              <div className="w-full h-64 bg-input-bg flex flex-col p-4 rounded-xl space-y-2">
                <div className="flex flex-row justify-between">
                  <div className="w-1/2">
                    <h6 className="text-sm">Register Number</h6>
                  </div>
                  <div className="text-left w-1/2">
                    <h6 className="text-sm text-customGray">
                      {studentData["id"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-1/2 font-semibold">
                    <h6 className="text-sm">Student Name</h6>
                  </div>
                  <div className="text-left w-1/2">
                    <h6 className="text-sm text-customGray">
                      {studentData["studentName"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-1/2 font-semibold">
                    <h6 className="text-sm">Gender</h6>
                  </div>
                  <div className="text-left w-1/2">
                    <h6 className="text-sm text-customGray">
                      {studentData["Gender"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-1/2 font-semibold">
                    <h6 className="text-sm">FatherName</h6>
                  </div>
                  <div className="text-left w-1/2">
                    <h6 className="text-sm text-customGray">
                      {studentData["fatherName"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-1/2 font-semibold">
                    <h6 className="text-sm">Contact Number</h6>
                  </div>
                  <div className="text-left w-1/2">
                    <h6 className="text-sm text-customGray">
                      {studentData["contactNo"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-1/2 font-semibold">
                    <h6 className="text-sm">Class</h6>
                  </div>
                  <div className="text-left w-1/2">
                    <h6 className="text-sm text-customGray">
                      {studentData["Class"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-1/2 font-semibold">
                    <h6 className="text-sm">Section</h6>
                  </div>
                  <div className="text-left w-1/2">
                    <h6 className="text-sm text-customGray">
                      {studentData["Section"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-1/2 font-semibold">
                    <h6 className="text-sm">School Name</h6>
                  </div>
                  <div className="text-left w-1/2">
                    <h6 className="text-sm text-customGray">
                      {studentData['schoolName']}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col h-52">
              <h6 className="font-semibold">Mark List</h6>
              <div className="w-full h-[350px] bg-input-bg flex flex-col  pt-4 pl-6 pr-6 pb-3 rounded-xl space-y-2">
                <div className="flex flex-row">
                  <div className="w-2/3 font-semibold">
                    <h1 className="text-sm">Dictation</h1>
                  </div>
                  <div className="text-left w-1/3">
                    <h6 className="text-sm text-customGray">
                      {studentData["Dict/15"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-2/3 font-semibold">
                    <h6 className="text-sm">Misssing Letter</h6>
                  </div>
                  <div className="text-left w-1/3">
                    <h6 className="text-sm text-customGray">
                      {studentData["Miss/10"]}
                    </h6>
                  </div>
                </div>
                {/* <div className="flex flex-row justify-between">
                  <div className=" w-2/3 font-semibold">
                    <h6 className="text-sm">Fill ups</h6>
                  </div>
                  <div className="text-left  w-1/3">
                    <h6 className="text-sm text-customGray">{studentData["OPP/5"] || "-"}</h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className=" w-2/3 font-semibold">
                    <h6 className="text-sm">Jumbled Sentences</h6>
                  </div>
                  <div className="text-left  w-1/3">
                    <h6 className="text-sm text-customGray">
                      {studentData["J.SENT/10"] || "-"}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className=" w-2/3 font-semibold">
                    <h6 className="text-sm">Correct Spelling</h6>
                  </div>
                  <div className="text-left  w-1/3">
                    <h6 className="text-sm text-customGray">{studentData["COR.SENT/5"] || "-"}</h6>
                  </div>
                </div> */}
                <div className="flex flex-row justify-between">
                  <div className=" w-2/3 font-semibold">
                    <h6 className="text-sm">Rhyming Words</h6>
                  </div>
                  <div className="text-left  w-1/3">
                    <h6 className="text-sm text-customGray">
                      {studentData["Rhy/5"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className=" w-2/3 font-semibold">
                    <h6 className="text-sm">Picture Identification</h6>
                  </div>
                  <div className="text-left  w-1/3">
                    <h6 className="text-sm text-customGray">
                      {studentData["Pic/10"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className=" w-2/3 font-semibold">
                    <h6 className="text-sm">Identify the correct spelling</h6>
                  </div>
                  <div className="text-left  w-1/3">
                    <h6 className="text-sm text-customGray">
                      {studentData["Ident/10"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-2/3 font-semibold">
                    <h6 className="text-sm">Total</h6>
                  </div>
                  <div className="text-left w-1/3">
                    <h6 className="text-sm text-customGray">
                      {studentData["Total/50"]}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-2/3 font-semibold">
                    <h6 className="text-sm">Percentage</h6>
                  </div>
                  <div className="text-left w-1/3">
                    <h6 className="text-sm text-customGray">
                      {studentData['Percentage']}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="w-2/3 font-semibold">
                    <h6 className="text-sm">Status</h6>
                  </div>
                  <div className="text-left w-1/3">
                    <h6 className="text-sm">{studentData["Status"]}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
export default Results;
