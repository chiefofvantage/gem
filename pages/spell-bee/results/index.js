const Results = () => {
  return (
    <main className="bg-gradient-to-br from-blue-light to-blue-bright h-screen  w-full flex justify-center items-start relative">
      <div className="bg-[url(/spell-bee-2.png)] h-[290px] w-[363px] absolute left-5 bottom-2"></div>
      <div className="bg-[url(/idea.png)] h-[285px] w-[265px] absolute right-8 bottom-5"></div>
      {/* <div className="absolute">
        <div className="border-white border-2  rounded-full h-72 w-72 ">
          <div className="border-white border-2  rounded-full h-56 w-56 "></div>
        </div>
      </div> */}
      <div className="bg-white w-[780px] h-[600px] rounded-xl mt-[48px] flex flex-col justify-start items-center">
        <div className="bg-[url(/grey-spell.png)] h-[58px] w-[178px] bg-cover mt-20"></div>
        <h9 className="font-semibold text-base mt-20">Spell Bee Results</h9>
        <div className="flex flex-row justify-around w-[700px] mt-4 ">
          <input
            placeholder="Enter the registeration number "
            className="bg-input-bg w-[512px] py-2 pl-4 rounded-xl"
          ></input>
          <button className="bg-button-color text-white px-4 py-1 text-sm rounded">
            View Results
          </button>
        </div>
        <div className="flex flex-row w-full px-6 mt-4 h-full justify-around">
          <div className="w-1/2 flex flex-col h-10  mr-6">
            <h9 className="font-semibold">Student Details</h9>
            <div className="w-full h-64 bg-input-bg flex flex-col p-4 rounded-xl ">
              <div className="flex flex-row justify-between">
                <div className=" w-1/2 font-semibold">
                  <h9>Register Number</h9>
                </div>
                <div className="text-left  w-1/2">
                  <h9>S2TN24C2-1077</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-1/2 font-semibold">
                  <h9>Name</h9>
                </div>
                <div className="text-left  w-1/2">
                  <h9>Ramya</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-1/2 font-semibold">
                  <h9>Gender</h9>
                </div>
                <div className="text-left  w-1/2">
                  <h9>Girl</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-1/2 font-semibold">
                  <h9>Contact Number</h9>
                </div>
                <div className="text-left  w-1/2">
                  <h9>9884402149</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-1/2 font-semibold">
                  <h9>Class</h9>
                </div>
                <div className="text-left  w-1/2">
                  <h9>2</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-1/2 font-semibold">
                  <h9>Category</h9>
                </div>
                <div className="text-left  w-1/2">
                  <h9>2</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-1/2 font-semibold">
                  <h9>School Name</h9>
                </div>
                <div className="text-left  w-1/2">
                  <h9>Godsan Mat.hr.Sec.School</h9>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col h-full ">
            <h9 className="font-semibold">Mark List</h9>
            <div className="w-full h-[350px] bg-input-bg flex flex-col mb-3 p-4 rounded-xl">
              <div className="flex flex-row  ">
                <div className=" w-2/3 font-semibold">
                  <h9>Dictation</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>9/15</h9>
                </div>
              </div>
              <div className="flex flex-row ">
                <div className=" w-2/3 font-semibold">
                  <h9>Misssing Letter</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>6/10</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Fill ups</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>7/10</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Jumbled Sentences</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>5/10</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Correct Spelling</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>4/5</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Rhyming Words</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>2/5</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Picture Identification</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>7/10</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Identify the correct spelling</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>8/10</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Total</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>48/75</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Percentage</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>64/100</h9>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className=" w-2/3 font-semibold">
                  <h9>Status</h9>
                </div>
                <div className="text-left  w-1/3">
                  <h9>Qualified</h9>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Results;
