// const checkBoolean = (
//   testVariable: unknown,
// ) => {
//   if (typeof testVariable === 'string') {
//     if (testVariable === '0') {
//       return false;
//     }
//     if (testVariable === '1') {
//       return true;
//     }
//   }
//   return null;
// }
// const checkFloat = (
//   testVariable: unknown,
// ) => {
//   if (typeof testVariable === 'string') {
//     if (!Number.isNaN(parseFloat(testVariable))) {
//       return parseFloat(testVariable);
//     }
//   }
//   return null;
// };
// const checkInteger = (
//   testVariable: unknown,
// ) => {
//   if (typeof testVariable === 'string') {
//     if (!Number.isNaN(parseInt(testVariable, 10))) {
//       return parseInt(testVariable, 10);
//     }
//   }
//   return null;
// };
const checkString = (
  testVariable: unknown,
) => {
  if (typeof testVariable === 'string') {
    if (testVariable !== '') {
      return testVariable;
    }
  }
  return null;
};
// const checkTime = (
//   testVariable: unknown,
// ) => {
//   // @ts-ignore
//   const tempTime: number | null = new GlideDateTime(testVariable).getNumericValue();
//   if (tempTime !== 0) {
//     // @ts-ignore
//     return tempTime;
//   }
//   return null;
// };
const getData = () => {
  const datacenters: Array<string> = [];
  // @ts-ignore
  const grDatacenter = new GlideRecord('cmdb_ci_datacenter');
  grDatacenter.query();
  while (grDatacenter.next()) {
    const datacenterName = checkString(grDatacenter.getValue('name'));
    if (datacenterName !== null) {
      datacenters.push(datacenterName);
    }
  }
  datacenters.sort();
  // @ts-ignore
  data.datacenters = datacenters;
};
// @ts-ignore
if (input && input.getData) {
  // @ts-ignore
  getData();
}