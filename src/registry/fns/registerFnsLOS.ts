import { shouldExclude, LOSSDK, retail, readOnly, sme } from "./los";

import { singletonFunctionRegisrationFactory } from "components/utils";
const { registerFn } = singletonFunctionRegisrationFactory;

registerFn(
  "shouldExcludeGeneralDetailProposed",
  shouldExclude.generalDetailNatureofFacilityProposed
);
registerFn(
  "shouldExcludeBankDetailNatureofFacilityPresent",
  shouldExclude.bankDetailNatureofFacilityPresent
);

registerFn(
  "shouldExcludeBankDetailArrangements",
  shouldExclude.bankDetailBankingArrangements
);

registerFn(
  "shouldExcludeGeneralDetailBusinessNature",
  shouldExclude.generalDetailBusinessNature
);

registerFn(
  "shouldExcludeProjectDetailsTypeCostOfProject",
  shouldExclude.projectDetailsTypeCostOfProject
);

registerFn(
  "shouldExcludeProjectDetailsTypeMeansOFFinance",
  shouldExclude.projectDetailsTypeMeansOFFinance
);
registerFn(
  "shouldExcludeMainDetailsdeveloperOrContactor",
  shouldExclude.mainDetailsdeveloperOrContactor
);

registerFn("getLeadSubStageCode", LOSSDK.getLeadSubStageCode);
registerFn("getLeadEmploymentType", LOSSDK.getLeadEmploymentType);
registerFn(
  "getYearlyTargetUserBranchList",
  LOSSDK.getYearlyTargetUserBranchList
);

registerFn(
  "shouldExcludesShowSMELAPSubProductTypeField",
  shouldExclude.showSMELAPSubProductTypeField
);

registerFn(
  "shouldExcludeShowInfraSubProduct2TypeField",
  shouldExclude.showInfraSubProduct2TypeField
);
registerFn(
  "shouldShowRetailHomeLAPSalariedField",
  shouldExclude.shouldShowRetailHomeLAPSalariedField
);
registerFn(
  "shouldShowRetailHomeEmployementField",
  shouldExclude.showRetailHomeEmployementField
);
registerFn(
  "shouldShowRetailHomeLAPEmployementField",
  shouldExclude.showRetailHomeLAPEmployementField
);

registerFn(
  "shouldExcludeExternalAPIManagementDetails",
  shouldExclude.externalAPIManagementDetails
);

//Bank API

registerFn(
  "shouldExcludeSanctionLimitFixedAmountExternalAPIBank",
  shouldExclude.sanctionLimitFixedAmountExternalAPIBank
);
registerFn(
  "shouldExcludeSanctionLimitOptionsExternalAPIBank",
  shouldExclude.sanctionLimitOptionsExternalAPIBank
);
registerFn(
  "shouldExcludeSanctionLimitVariableAmountExternalAPIBank",
  shouldExclude.sanctionLimitVariableAmountExternalAPIBank
);
registerFn(
  "shouldExcludeDrawingPowerVariableAmountExternalAPIBank",
  shouldExclude.drawingPowerVariableAmountExternalAPIBank
);
registerFn("shouldExcludeShowCostOfProject", shouldExclude.showCostOfProject);

registerFn("shouldExcludeShowMeansOfFinance", shouldExclude.showMeansOfFinance);

//END of Bank API
registerFn(
  "getBankListForLeadDocuments",
  LOSSDK.getBankListForLeadDocumentsForGridUpload
);
registerFn("deleteFormArrayFieldData", LOSSDK.deleteFormArrayFieldData);
registerFn("deleteAssignArrayFieldData", LOSSDK.deleteAssignArrayFieldData);
registerFn("getProductTypeForProductName", LOSSDK.getProductTypeForProductName);
registerFn("getManagementPersonnel", LOSSDK.getManagementPersonnel);
registerFn("getPropertyTypeCAM", LOSSDK.getPropertyTypeCAM("12300002"));
registerFn("getLRDPropertyTypeCAM", LOSSDK.getPropertyTypeCAM("12300003"));
registerFn("retailCalculateEligibleEMI", retail.eligibleEMI);
registerFn(
  "retailCalculateLoanAmountBasedOnFOIR",
  retail.loanAmountBasedOnFOIR
);
registerFn("retailCalculateLTV", retail.calculateLTV);
registerFn("retailCalculateLoanAmountBasedOnLTV", retail.loanAmountBasedOnLTV);
registerFn(
  "retailCalculateLoanAmountBasedOnFOIRLTV",
  retail.loanAmountBasedOnFOIRLTV
);
registerFn(
  "retailCalculateEligibileLoanAmountDifference",
  retail.eligibileLoanAmountDifference
);
registerFn("retailSetEligibleLoanAmount", retail.setEligibleLoanAmount);
registerFn("retailCalculateFOIR", retail.calculateFOIR);
registerFn("retailCalculateNewLTVCondition", retail.calculateNewLTVCondition);
registerFn("retailCalcualteSENPCLFR", retail.calculateSENPCLFR);
registerFn("retailCalcualteSENPEligibleEMI", retail.calcualteSENPEligibleEMI);
registerFn("retailCalculateSENPCondition", retail.calculateSENPCondition);
registerFn(
  "retailCalculateSENPLoanAmountBasedOnFOIRCondition",
  retail.calculateSENPLoanAmountBasedOnFOIRCondition
);
registerFn(
  "retailCalculateSENPLoanAmountCondition",
  retail.calculateSENPLoanAmountCondition
);
registerFn("retailCalculateSENPAmount", retail.calculateSENPAmount);
registerFn("retailCalculateSENPNewCLFR", retail.calculateSENPNewCLFR);
registerFn("retailCalculateSENPltvCondition", retail.calculateSENPltvCondition);
registerFn("retailCalculateSENPNewLTV", retail.calculateSENPNewLTV);
registerFn("retailCalculateSENPNewFOIR", retail.calculateSENPNewFOIR);
registerFn(
  "retailCalculateSENPLoanAmountBasedOnLTV",
  retail.calculateSENPLoanAmountBasedOnLTV
);
registerFn(
  "retailCalculateSENPEligibleLoanAmount",
  retail.calculateSENPEligibleLoanAmount
);

registerFn(
  "retailLRDCalculateBalanceLeasePeriodRemaining",
  retail.balanceLeasePeriodRemaining
);
registerFn("retailLRDCalculateRentRevisionMonths", retail.rentRevisionMonths);
registerFn("retailLRDCalculatecalLTV", retail.calculateLTVLRD);
registerFn(
  "retailLRDCalculatecalLoanAmountBasedOnLTV",
  retail.loanAmountBasedOnLTVLRD
);
registerFn("getBankFacilityOptions", LOSSDK.getBankFacilityOptions);
registerFn(
  "getBankListForLeadDocumentsForAPICallInterface",
  LOSSDK.getBankListForLeadDocumentsForAPICallInterface
);

registerFn(
  "retailCalculateBalanceLeasePeriodRemaining",
  retail.calculateBalanceLeasePeriodRemaining
);
registerFn(
  "retailsCalculateRentRevisionMonth",
  retail.calculateRentRevisionMonth
);
registerFn(
  "retailLRDCalculateLoanAmountBasedOnRent",
  retail.calculateLoanAmountBasedOnRent
);
registerFn(
  "retailLRDCalculateMinimumLoanAmountBasedOnLTVRent",
  retail.calculateMinimumLoanAmountBasedOnLTVRent
);
registerFn("retailLRDCalculateEligibleEMI", retail.calculateLRDEligibleEMI);

registerFn(
  "retailLRDCalculateEligibleLoanAmount",
  retail.calculateLRDEligibleLoanAmount
);

//role Assignment API register functions

registerFn("getBranchList", LOSSDK.getBranchList);
registerFn("getRoleList", LOSSDK.getRoleList);
registerFn("getAllUnRegisteredUsersList", LOSSDK.getAllUnRegisteredUsersList);
registerFn("getAllRegisteredUsersList", LOSSDK.getAllRegisteredUsersList);
registerFn("getTeamRoleList", LOSSDK.getTeamRoleList);
registerFn("getUserListFromTeamRole", LOSSDK.getPendingUserListForTeamRole);
registerFn(
  "getAssignedUserListForTeamRole",
  LOSSDK.getAssignedUserListForTeamRole
);

//for Assign inquiry or lead inquiry
registerFn("getRoleListForInquiryAssign", LOSSDK.getRoleListForInquiryAssign);
registerFn(
  "getTeamRoleListForInquiryAssign",
  LOSSDK.getTeamRoleListForInquiryAssign
);

//for priority change form
registerFn("readOnlyPriorityHoldDays", readOnly.priorityHoldDays);
registerFn(
  "ShouldExcludeShowOtherIncomeAmountField",
  shouldExclude.showOtherIncomeAmountField
);
registerFn(
  "ShouldExcludeShowRetailOtherIncomeAmountField",
  shouldExclude.showRetailOtherIncomeAmountField
);
registerFn(
  "ShouldExcludeShowRetailOtherIncomeTypeField",
  shouldExclude.showRetailOtherIncomeTypeField
);
registerFn(
  "ShouldExcludeShowRetailSalaryOtherIncomeAmountField",
  shouldExclude.showRetailSalaryOtherIncomeAmountField
);
registerFn(
  "ShouldExcludeShowRetailSalaryOtherIncomeTypeField",
  shouldExclude.showRetailSalaryOtherIncomeTypeField
);
registerFn(
  "ShouldExcludeShowRetailCoApplicantSelEmployeed",
  shouldExclude.showRetailCoApplicantSelEmployeed
);
registerFn(
  "ShouldExcludeShowRetailCoApplicantSalaried",
  shouldExclude.showRetailCoApplicantSalaried
);
registerFn("ShouldExcludeShowReraNoField", shouldExclude.showReraNoField);
registerFn(
  "ShouldExcludeShowPurposeOfLoanOtherTextfield",
  shouldExclude.showPurposeOfLoanOtherTextfield
);
registerFn(
  "ShouldExcludeShowProjectPromoterAndFirmNameField",
  shouldExclude.showProjectPromoterAndFirmNameField
);
registerFn(
  "ShouldExcludeShowUnsecureSalaryOtherIncomeTypeField",
  shouldExclude.showUnsecureSalaryOtherIncomeTypeField
);
registerFn(
  "ShouldExcludeShowUnsecureOtherIncomeAmountField",
  shouldExclude.showUnsecureOtherIncomeAmountField
);

//Calculation for SME Finance

registerFn("calculateEBITDA", sme.calculateEBITDA);
registerFn("calculateEBIT", sme.calculateEBIT);
registerFn("calculateEBI", sme.calculateEBT);
registerFn("calculateCashProfit", sme.calculateCashProfit);
registerFn("calculateEBITDAPercentage", sme.calculateEBITDAPercentage);
registerFn("calculateEBTPercentage", sme.calculateEBTPercentage);
registerFn("calculatePatPercentage", sme.calculatePatPercentage);
registerFn("calculateCashProfitPercentage", sme.calculateCashProfitPercentage);
registerFn("calculateAdjustedPat", sme.calculateAdjustedPat);
registerFn("calculateAdjustedCashProfit", sme.calculateAdjustedCashProfit);
registerFn(
  "calculateAdjustedPatPercentage",
  sme.calculateAdjustedPatPercentage
);
registerFn(
  "calculateAdjustedCashProfitPercentage",
  sme.calculateAdjustedCashProfitPercentage
);
registerFn("calculateNetWorth", sme.calculateNetWorth);
registerFn("calculateNetWorthQuasi", sme.calculateNetWorthQuasi);
registerFn("calculateLongTermDebtEquity", sme.calculateLongTermDebtEquity);
registerFn("calculateTolTnvQuasi", sme.calculateTolTnvQuasi);
registerFn("calculateCurrentRatio", sme.calculateCurrentRatio);

registerFn("getEntityType", LOSSDK.getEntityType);
registerFn("getApplicants", LOSSDK.getApplicants);
