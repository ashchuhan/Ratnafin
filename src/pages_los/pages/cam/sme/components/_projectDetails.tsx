import {
  Default,
  DateFormat,
  Amount,
  SquareFeetFormat,
} from "pages_los/pages/cam/components";
export const ProjectDetails = ({ project }) => {
  if (!Array.isArray(project) || project.length <= 0) {
    return (
      <tr>
        <th colSpan={9} className="form-heading">
          Project Details
        </th>
        <td>Not Available</td>
      </tr>
    );
  }

  return (
    <>
      <tr>
        <th colSpan={9} className="form-heading">
          Project Details
        </th>
      </tr>
      {project.map((projectsData) => {
        return (
          <>
            <br />
            <ProjectParticulaDetails
              projectParticular={projectsData.projectParticularDetails}
            />
            <tr>
              <th colSpan={2}>Location of the project</th>
              <td colSpan={7}>
                {<Default value={projectsData.landDetails} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Land Details</th>
              <td colSpan={7}>
                {<Default value={projectsData.landLocation} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Area of the Project Land</th>
              <td colSpan={7}>
                {<Default value={projectsData.landAreaApproxValuation} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Approximate valuation</th>
              <td colSpan={7}>
                {
                  //@ts-ignore
                  <Amount value={projectsData.landAreaApproximateValuation} />
                }
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Expected Date of Commencement (DCCO)</th>
              <td colSpan={7}>
                {<DateFormat value={projectsData.commencementDate} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Current Stage of Project</th>
              <td colSpan={7}>
                {<Default value={projectsData.currentLandStage} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Moratorium</th>
              <td colSpan={7}>{<Default value={projectsData.maratorium} />}</td>
            </tr>
            <tr>
              <th colSpan={2}>Equal Installments or Balloonig</th>
              <td colSpan={7}>
                {<Default value={projectsData.installmentBallooning} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Installed Capacity</th>
              <td colSpan={7}>
                {<Default value={projectsData.installedCapacity} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Manufacturing Process</th>
              <td colSpan={7}>
                {<Default value={projectsData.manufacturingProcess} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Requirement and arrangement of Power</th>
              <td colSpan={7}>
                {<Default value={projectsData.reqArranPower} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Requirement and arrangement of Employees</th>
              <td colSpan={7}>
                {<Default value={projectsData.reqArranEmployee} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Brief about Technical Person / Plant manager</th>
              <td colSpan={7}>
                {<Default value={projectsData.brifTechPerson} />}
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Unit Matrix</th>
              <td colSpan={7}>{<Default value={projectsData.unitMatrix} />}</td>
            </tr>
            <tr>
              <th colSpan={2}>Projected Turnover</th>
              <td colSpan={7}>
                {
                  //@ts-ignore
                  <Amount value={projectsData.projectTurnover} />
                }
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Projected rofit</th>
              <td colSpan={7}>
                {
                  //@ts-ignore
                  <Amount value={projectsData.projectProfit} />
                }
              </td>
            </tr>

            <Machieneries machieneries={projectsData.machieneries} />
            <ManufacturedProduct
              manufacturedProduct={projectsData.manufacturedProduct}
            />
          </>
        );
      })}
    </>
  );
};

const ProjectParticulaDetails = ({ projectParticular }) => {
  const costOfProject = projectParticular.filter(
    (one) => one.particularType === "Total Cost of Project"
  );

  const meansOfFinance = projectParticular.filter(
    (one) => one.particularType === "Total Means of Finance"
  );

  return (
    <>
      <tr>
        <th colSpan={9} className="form-sub-heading">
          Total Cost of Project
        </th>
      </tr>
      <tr>
        <th colSpan={2}></th>
        <th colSpan={2}>Particulars</th>
        <th colSpan={2}>Total Amount (In Lacs)</th>
        <th colSpan={2}>Amount Incurred (In Lacs)</th>
      </tr>

      {costOfProject.map((projectParticularData) => {
        return (
          <>
            <tr>
              <td colSpan={2}></td>
              <td colSpan={2}>
                {<Default value={projectParticularData.particulars} />}
              </td>
              <td colSpan={2}>
                {
                  //@ts-ignore
                  <Amount value={projectParticularData.amount} />
                }
              </td>
              <td colSpan={2}>
                {
                  //@ts-ignore
                  <Amount value={projectParticularData.incurredAmount} />
                }
              </td>
            </tr>
          </>
        );
      })}
      <MeansOfFinance meandOfFinanceDetails={meansOfFinance} />
      <br />
    </>
  );
};

export const MeansOfFinance = ({ meandOfFinanceDetails }) => {
  if (
    !Array.isArray(meandOfFinanceDetails) ||
    meandOfFinanceDetails.length <= 0
  ) {
    return (
      <tr>
        <th colSpan={9} className="form-sub-heading">
          Total Means of Finance
        </th>
        <td>Not Available</td>
      </tr>
    );
  }
  return (
    <>
      <tr>
        <th colSpan={9} className="form-sub-heading">
          Total Means of Finance
        </th>
      </tr>
      <tr>
        <th colSpan={2}></th>
        <th colSpan={2}>Particulars</th>
        <th colSpan={2}>Total Amount (In Lacs)</th>
        <th colSpan={2}>Amount Incurred (In Lacs)</th>
      </tr>
      {meandOfFinanceDetails.map((meansOfFinanceData, index) => {
        return (
          <tr>
            <td colSpan={2}></td>
            <td colSpan={2}>
              {<Default value={meansOfFinanceData.particulars} />}
            </td>
            <td colSpan={2}>
              {
                //@ts-ignore
                <Amount value={meansOfFinanceData.amount} />
              }
            </td>
            <td colSpan={2}>
              {
                //@ts-ignore
                <Amount value={meansOfFinanceData.incurredAmount} />
              }
            </td>
          </tr>
        );
      })}
    </>
  );
};

export const Machieneries = ({ machieneries }) => {
  if (!Array.isArray(machieneries) || machieneries.length <= 0) {
    return (
      <tr>
        <th colSpan={9} className="form-sub-heading">
          List of Machieneries
        </th>
        <td>Not Available</td>
      </tr>
    );
  }
  return (
    <>
      <tr>
        <th colSpan={9} className="form-sub-heading">
          List of Machieneries
        </th>
      </tr>
      <tr>
        <th colSpan={2}></th>
        <th colSpan={2}>Machinery Name</th>
        <th colSpan={2}>Supplier Name</th>
        <th colSpan={3}>Application Area</th>
      </tr>
      {machieneries.map((machieneriesDetails, index) => {
        return (
          <tr>
            <td colSpan={2}></td>
            <td colSpan={2}>
              {<Default value={machieneriesDetails?.machineryName ?? ""} />}
            </td>
            <td colSpan={2}>
              {<Default value={machieneriesDetails?.supplierName ?? ""} />}
            </td>
            <td colSpan={2}>
              {
                //@ts-ignore
                <SquareFeetFormat
                  value={machieneriesDetails?.applicationArea ?? ""}
                />
              }
            </td>
          </tr>
        );
      })}
    </>
  );
};

export const ManufacturedProduct = ({ manufacturedProduct }) => {
  if (!Array.isArray(manufacturedProduct) || manufacturedProduct.length <= 0) {
    return (
      <tr>
        <th colSpan={9} className="form-sub-heading">
          Products to be Manufactured
        </th>
        <td>Not Available</td>
      </tr>
    );
  }
  return (
    <>
      <tr>
        <th colSpan={9} className="form-sub-heading">
          Products to be Manufactured
        </th>
      </tr>
      <tr>
        <th colSpan={2}></th>
        <th colSpan={7}>Machinery Name</th>
      </tr>
      {manufacturedProduct.map((manufacturedProducts, index) => {
        return (
          <tr>
            <td colSpan={2}></td>
            <td colSpan={7}>
              {<Default value={manufacturedProducts?.productName ?? ""} />}
            </td>
          </tr>
        );
      })}
    </>
  );
};
