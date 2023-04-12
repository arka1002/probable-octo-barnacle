import React, { useState } from "react";

import { ReactComponent as PreviewIcon } from "../../../assets/previewIcon.svg";
import { ReactComponent as UploadIcon } from "../../../assets/uploadIcone.svg";
import { ReactComponent as EditIcon } from "../../../assets/editIcon.svg";
import decrypt from "../../../common-function/index";

const Table = () => {
  const headingList = [
    "Short Name",
    "Class",
    "Profile",
    "Incorporation",
    "Seed Round",
    "Series A",
    "Series B",
    "Series C",
    "Series D",
    "Series E",
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full ">
        <thead className=" border-b border-customGreen-200">
          <tr>
            <td></td>
            <td></td>
            {headingList.map((item, i) => (
              // <TableHeadingItem centerTitle={true} title={item} key={i} />
              <th
                className={
                  "py-4 px-1 lg:px-3 font-bold text-sm text-customGreen-200" +
                  (true ? " text-center" : " text-left")
                }
              >
                {item}
                <span class="flex justify-center cursor-pointer">
                  {item == "Incorporation" ? (
                    <EditIcon
                      style={{ width: "27px" }}
                      onClick={() => showHeaderPopup("incorporation")}
                    />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Seed Round" ? (
                    <EditIcon
                      onClick={() => showHeaderPopup("seedRound")}
                      style={{ width: "27px" }}
                    />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series A" ? (
                    <EditIcon
                      onClick={() => showHeaderPopup("seriesA")}
                      style={{ width: "27px" }}
                    />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series B" ? (
                    <EditIcon
                      onClick={(itm) => showHeaderPopup("seriesB")}
                      style={{ width: "27px" }}
                    />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series C" ? (
                    <EditIcon
                      onClick={() => showHeaderPopup("seriesC")}
                      style={{ width: "27px" }}
                    />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series D" ? (
                    <EditIcon
                      onClick={() => showHeaderPopup("seriesD")}
                      style={{ width: "27px" }}
                    />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series E" ? (
                    <EditIcon
                      onClick={() => showHeaderPopup("seriesE")}
                      style={{ width: "27px" }}
                    />
                  ) : (
                    " "
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(tableData2).map(([k, v]) =>
            keyname === k ? (
              <EditableRow
                currentFile={currentFile}
                fileInput={handleFileChange}
                data={editFormData}
                handleEditFormChange={handleEditFormChange}
                showPopUp={(e) => showPopUp(e, "edit")}
                onSave={saveEditData}
              >
                <td className="text-customGreen-200 capitalize text-center font-semibold  text-sm py-4 px-2 ">
                  <div className="flex">
                    <input
                      // accept="pdf/*"
                      ref={fileInput}
                      type="file"
                      multiple
                      className="hidden"
                      onChange={(e) => handleFileChange(e)}
                      onClick={(e) => {
                        e.target.value = null;
                      }}
                    />
                    <div
                      className="cursor-pointer mx-2 bg-customGreen-100 rounded-lg p-2 flex items-center"
                      onClick={() => handleUploadClick()}
                    >
                      Upload
                      <span className="pl-2">
                        <UploadIcon />
                      </span>
                    </div>
                  </div>
                </td>
              </EditableRow>
            ) : (
              <ReadOnlyRow
                key={k}
                showPopUp={(e) => popup1(v, k)}
                //showPopUp={e=>showPopUp(v,"view")}
                data={{
                  id: k,
                  shortname: decrypt(v.userData.name),
                  clas: v.userData.clas,
                  profile: v.userData.Profile,
                  shares: v.userData.Shares,
                  amount: v.userData.Amount,
                  incorporation: v.incorporation,
                  incorporationShare: v.incshares,
                  incorporationAmount: v.incamount,
                  seedRound: v.seedRound,
                  seedRoundShare: v.srshares,
                  seedRoundAmount: v.srcamount,
                  seriesA: v.seriesA,
                  seriesAShare: v.sAshares,
                  seriesAAmount: v.sAamount,
                  seriesB: v.seriesB,
                  seriesBShare: v.sBshares,
                  seriesBAmount: v.sBamount,
                  seriesC: v.seriesC,
                  seriesCShare: v.sCshares,
                  seriesCAmount: v.sCamount,
                  seriesD: v.seriesD,
                  seriesDShare: v.sDshares,
                  seriesDAmount: v.sDamount,
                  seriesE: v.seriesE,
                  seriesEShare: v.sEshares,
                  seriesEAmount: v.sEamount,
                  filepath: v.filespath,
                }}
                onEdit={editRow}
                toggleModal={toggleModal}
                onDoubleClick={onDoubleClick}
                headingList={headingList}
                totalLength={Object.entries(tableData2).length}
                currentIndex={i++}
                onDelete={onDelete}
              ></ReadOnlyRow>
            )
          )}

          {showAddNew && (
            <EditableRow
              currentFile={currentFile}
              fileInput={handleFileChange}
              data={addFormData}
              showPopUp={(e) => showPopUp(e, "new")}
              handleEditFormChange={handelNewFormOnChange}
              onSave={updateCapTableData}
            >
              <td className="text-customGreen-200 capitalize text-center font-semibold  text-sm py-4 px-2 "></td>
            </EditableRow>
          )}
        </tbody>
      </table>
      {Object.entries(tableData2).length === 0 && (
        <div className="w-full text-center py-4">
          <h2 className="text-xl font-medium ">No Shareholder Data</h2>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Table);

const TableHeadingItem = ({ title, centerTitle = true }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <th
      className={
        "py-4 px-1 lg:px-3 font-bold text-sm text-customGreen-200" +
        (centerTitle ? " text-center" : " text-left")
      }
    >
      {title}
      <span class="flex justify-center">
        {title == "Incorporation" ? (
          <BiEdit size="1.6rem" onClick={toggleModal} />
        ) : (
          " "
        )}
      </span>
      <span class="flex justify-center">
        {title == "Seed Round" ? <BiEdit size="1.6rem" /> : " "}
      </span>
      <span class="flex justify-center">
        {title == "Series A" ? <BiEdit size="1.6rem" /> : " "}
      </span>
      <span class="flex justify-center">
        {title == "Series B" ? <BiEdit size="1.6rem" /> : " "}
      </span>
      <span class="flex justify-center">
        {title == "Series C" ? <BiEdit size="1.6rem" /> : " "}
      </span>
      <span class="flex justify-center">
        {title == "Series D" ? <BiEdit size="1.6rem" /> : " "}
      </span>
      <span class="flex justify-center">
        {title == "Series E" ? <BiEdit size="1.6rem" /> : " "}
      </span>
    </th>
  );
};

const TableDataItem = ({ value }) => {
  return (
    <td className="py-4 px-1 lg:px-3 text-center text-customBlue-100 font-semibold  text-sm ">
      {value}
    </td>
  );
};
