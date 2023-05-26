interface RackData {
  powerDesign: number;
  powerUsed: number;
  rackName: string;
}
interface PduData {
  powerDesign: number;
  childRacks: Array<string>;
}

let roomTotalDesign = 1520;
let roomTotalUsed = 0;
const pduNamePduSysId: Record<string, string> = {
  'PDU0' : 'pdu0',
  'PDU1' : 'pdu1',
  'PDU2' : 'pdu2',
};
console.log(pduNamePduSysId);
const pduData: Record<string, PduData> = {
  'pdu0': {
    'powerDesign': 500,
    'childRacks': [
      'b93239b31ba0b01046ac2f4b234bcb96',
      '753239b31ba0b01046ac2f4b234bcb97',
      '313239b31ba0b01046ac2f4b234bcb98',
      'f93239b31ba0b01046ac2f4b234bcb98',
      'b53239b31ba0b01046ac2f4b234bcb99',
      '713239b31ba0b01046ac2f4b234bcb9a',
      '3d3239b31ba0b01046ac2f4b234bcb9a',
      'f53239b31ba0b01046ac2f4b234bcb9b',
      'b13239b31ba0b01046ac2f4b234bcb9c',
      'bd3239b31ba0b01046ac2f4b234bcb9c',
      '793239b31ba0b01046ac2f4b234bcb9d',
      '353239b31ba0b01046ac2f4b234bcb9e',
      'fd3239b31ba0b01046ac2f4b234bcb9e',
      'b93239b31ba0b01046ac2f4b234bcb9f',
      '753239b31ba0b01046ac2f4b234bcba0',
      '313239b31ba0b01046ac2f4b234bcba1',
      'f93239b31ba0b01046ac2f4b234bcba1',
      'b53239b31ba0b01046ac2f4b234bcba2',
      '713239b31ba0b01046ac2f4b234bcba3',
      '3d3239b31ba0b01046ac2f4b234bcba3',
      'f53239b31ba0b01046ac2f4b234bcba4',
      'b13239b31ba0b01046ac2f4b234bcba5',
      '7d3239b31ba0b01046ac2f4b234bcba5',
    ],
  },
  'pdu1': {
    'powerDesign': 500,
    'childRacks': [
      '393239b31ba0b01046ac2f4b234bcba6',
      'f13239b31ba0b01046ac2f4b234bcba7',
      'bd3239b31ba0b01046ac2f4b234bcba7',
      '793239b31ba0b01046ac2f4b234bcba8',
      '353239b31ba0b01046ac2f4b234bcba9',
      'fd3239b31ba0b01046ac2f4b234bcba9',
      'b93239b31ba0b01046ac2f4b234bcbaa',
      '753239b31ba0b01046ac2f4b234bcbab',
      '313239b31ba0b01046ac2f4b234bcbac',
      'f93239b31ba0b01046ac2f4b234bcbac',
      'b53239b31ba0b01046ac2f4b234bcbad',
      '713239b31ba0b01046ac2f4b234bcbae',
      '3d3239b31ba0b01046ac2f4b234bcbae',
      'f53239b31ba0b01046ac2f4b234bcbaf',
      'b13239b31ba0b01046ac2f4b234bcbb0',
      '7d3239b31ba0b01046ac2f4b234bcbb0',
      '393239b31ba0b01046ac2f4b234bcbb1',
      'f13239b31ba0b01046ac2f4b234bcbb2',
      'bd3239b31ba0b01046ac2f4b234bcbb2',
      '793239b31ba0b01046ac2f4b234bcbb3',
      '353239b31ba0b01046ac2f4b234bcbb4',
      'fd3239b31ba0b01046ac2f4b234bcbb4',
      'b93239b31ba0b01046ac2f4b234bcbb5',
    ],
  },
  'pdu2': {
    'powerDesign': 500,
    'childRacks': [
      '753239b31ba0b01046ac2f4b234bcbb6',
      '313239b31ba0b01046ac2f4b234bcbb7',
      'f93239b31ba0b01046ac2f4b234bcbb7',
      'b53239b31ba0b01046ac2f4b234bcbb8',
      '713239b31ba0b01046ac2f4b234bcbb9',
      '3d3239b31ba0b01046ac2f4b234bcbb9',
      'f53239b31ba0b01046ac2f4b234bcbba',
      '793239b31ba0b01046ac2f4b234bcbc7',
      '353239b31ba0b01046ac2f4b234bcbc8',
      'fd3239b31ba0b01046ac2f4b234bcbc8',
      'b93239b31ba0b01046ac2f4b234bcbc9',
      '753239b31ba0b01046ac2f4b234bcbca',
      '313239b31ba0b01046ac2f4b234bcbcb',
      'f93239b31ba0b01046ac2f4b234bcbcb',
      'b53239b31ba0b01046ac2f4b234bcbcc',
      '713239b31ba0b01046ac2f4b234bcbcd',
      '3d3239b31ba0b01046ac2f4b234bcbcd',
      'f53239b31ba0b01046ac2f4b234bcbce',
      'b13239b31ba0b01046ac2f4b234bcbcf',
      '7d3239b31ba0b01046ac2f4b234bcbcf',
      '393239b31ba0b01046ac2f4b234bcbd0',
      'f13239b31ba0b01046ac2f4b234bcbd1',
      'bd3239b31ba0b01046ac2f4b234bcbd1',
      '793239b31ba0b01046ac2f4b234bcbd2',
      '353239b31ba0b01046ac2f4b234bcbd3',
      'fd3239b31ba0b01046ac2f4b234bcbd3',
      'b93239b31ba0b01046ac2f4b234bcbd4',
      '753239b31ba0b01046ac2f4b234bcbd5',
      '313239b31ba0b01046ac2f4b234bcbd6',
      'f93239b31ba0b01046ac2f4b234bcbd6',
    ],
  },
};
console.log(pduData);
const rackData: Record<string, RackData> = {
  b93239b31ba0b01046ac2f4b234bcb96: {
    powerDesign: 20,
    powerUsed: 19.6,
    rackName: 'TEST01.01',
  },
  '753239b31ba0b01046ac2f4b234bcb97': {
    powerDesign: 20,
    powerUsed: 16.921058382260522,
    rackName: 'TEST01.02',
  },
  '313239b31ba0b01046ac2f4b234bcb98': {
    powerDesign: 20,
    powerUsed: 8.0,
    rackName: 'TEST01.03',
  },
  f93239b31ba0b01046ac2f4b234bcb98: {
    powerDesign: 20,
    powerUsed: 8.736725956483962,
    rackName: 'TEST01.04',
  },
  b53239b31ba0b01046ac2f4b234bcb99: {
    powerDesign: 20,
    powerUsed: 18.480530928366125,
    rackName: 'TEST01.05',
  },
  '713239b31ba0b01046ac2f4b234bcb9a': {
    powerDesign: 20,
    powerUsed: 7.015335576436007,
    rackName: 'TEST01.06',
  },
  '3d3239b31ba0b01046ac2f4b234bcb9a': {
    powerDesign: 20,
    powerUsed: 18.118081234446848,
    rackName: 'TEST01.07',
  },
  f53239b31ba0b01046ac2f4b234bcb9b: {
    powerDesign: 20,
    powerUsed: 9.704142272724999,
    rackName: 'TEST01.08',
  },
  b13239b31ba0b01046ac2f4b234bcb9c: {
    powerDesign: 20,
    powerUsed: 13.566452202275439,
    rackName: 'TEST01.09',
  },
  bd3239b31ba0b01046ac2f4b234bcb9c: {
    powerDesign: 20,
    powerUsed: 10.991969967053725,
    rackName: 'TEST01.10',
  },
  '793239b31ba0b01046ac2f4b234bcb9d': {
    powerDesign: 20,
    powerUsed: 12.075727321920116,
    rackName: 'TEST01.31',
  },
  '353239b31ba0b01046ac2f4b234bcb9e': {
    powerDesign: 20,
    powerUsed: 17.557908094368692,
    rackName: 'TEST01.32',
  },
  fd3239b31ba0b01046ac2f4b234bcb9e: {
    powerDesign: 20,
    powerUsed: 14.614046722211429,
    rackName: 'TEST01.33',
  },
  b93239b31ba0b01046ac2f4b234bcb9f: {
    powerDesign: 20,
    powerUsed: 12.165942629976588,
    rackName: 'TEST01.34',
  },
  '753239b31ba0b01046ac2f4b234bcba0': {
    powerDesign: 20,
    powerUsed: 10.313615542057837,
    rackName: 'TEST01.35',
  },
  '313239b31ba0b01046ac2f4b234bcba1': {
    powerDesign: 20,
    powerUsed: 11.641150869457563,
    rackName: 'TEST01.36',
  },
  f93239b31ba0b01046ac2f4b234bcba1: {
    powerDesign: 20,
    powerUsed: 12.332522635285246,
    rackName: 'TEST01.37',
  },
  b53239b31ba0b01046ac2f4b234bcba2: {
    powerDesign: 20,
    powerUsed: 7.752868004149737,
    rackName: 'TEST01.38',
  },
  '713239b31ba0b01046ac2f4b234bcba3': {
    powerDesign: 20,
    powerUsed: 19.328719340096207,
    rackName: 'TEST02.01',
  },
  '3d3239b31ba0b01046ac2f4b234bcba3': {
    powerDesign: 20,
    powerUsed: 18.187609000984473,
    rackName: 'TEST02.02',
  },
  f53239b31ba0b01046ac2f4b234bcba4: {
    powerDesign: 20,
    powerUsed: 18.078917768692577,
    rackName: 'TEST02.03',
  },
  b13239b31ba0b01046ac2f4b234bcba5: {
    powerDesign: 20,
    powerUsed: 14.59327499755882,
    rackName: 'TEST02.04',
  },
  '7d3239b31ba0b01046ac2f4b234bcba5': {
    powerDesign: 20,
    powerUsed: 10.139352794621662,
    rackName: 'TEST02.05',
  },
  '393239b31ba0b01046ac2f4b234bcba6': {
    powerDesign: 20,
    powerUsed: 7.397690872266324,
    rackName: 'TEST02.06',
  },
  f13239b31ba0b01046ac2f4b234bcba7: {
    powerDesign: 20,
    powerUsed: 18.622365604535144,
    rackName: 'TEST02.07',
  },
  bd3239b31ba0b01046ac2f4b234bcba7: {
    powerDesign: 20,
    powerUsed: 18.677361770568865,
    rackName: 'TEST02.08',
  },
  '793239b31ba0b01046ac2f4b234bcba8': {
    powerDesign: 20,
    powerUsed: 19.5633847526394,
    rackName: 'TEST02.09',
  },
  '353239b31ba0b01046ac2f4b234bcba9': {
    powerDesign: 20,
    powerUsed: 11.538877648731184,
    rackName: 'TEST02.10',
  },
  fd3239b31ba0b01046ac2f4b234bcba9: {
    powerDesign: 20,
    powerUsed: 18.136428277185495,
    rackName: 'TEST02.31',
  },
  b93239b31ba0b01046ac2f4b234bcbaa: {
    powerDesign: 20,
    powerUsed: 13.311418106416184,
    rackName: 'TEST02.32',
  },
  '753239b31ba0b01046ac2f4b234bcbab': {
    powerDesign: 20,
    powerUsed: 14.083857580728132,
    rackName: 'TEST02.33',
  },
  '313239b31ba0b01046ac2f4b234bcbac': {
    powerDesign: 20,
    powerUsed: 15.59487565638908,
    rackName: 'TEST02.34',
  },
  f93239b31ba0b01046ac2f4b234bcbac: {
    powerDesign: 20,
    powerUsed: 8.911924789321063,
    rackName: 'TEST02.35',
  },
  b53239b31ba0b01046ac2f4b234bcbad: {
    powerDesign: 20,
    powerUsed: 18.687440838123322,
    rackName: 'TEST02.36',
  },
  '713239b31ba0b01046ac2f4b234bcbae': {
    powerDesign: 20,
    powerUsed: 8.526268025790346,
    rackName: 'TEST02.37',
  },
  '3d3239b31ba0b01046ac2f4b234bcbae': {
    powerDesign: 20,
    powerUsed: 19.38335856866508,
    rackName: 'TEST02.38',
  },
  f53239b31ba0b01046ac2f4b234bcbaf: {
    powerDesign: 20,
    powerUsed: 15.323828549180758,
    rackName: 'TEST02.39',
  },
  b13239b31ba0b01046ac2f4b234bcbb0: {
    powerDesign: 20,
    powerUsed: 13.98336279974419,
    rackName: 'TEST02.40',
  },
  '7d3239b31ba0b01046ac2f4b234bcbb0': {
    powerDesign: 20,
    powerUsed: 19.698106516250117,
    rackName: 'TEST03.01',
  },
  '393239b31ba0b01046ac2f4b234bcbb1': {
    powerDesign: 20,
    powerUsed: 19.27157048700994,
    rackName: 'TEST03.02',
  },
  f13239b31ba0b01046ac2f4b234bcbb2: {
    powerDesign: 20,
    powerUsed: 9.615893290631838,
    rackName: 'TEST03.03',
  },
  bd3239b31ba0b01046ac2f4b234bcbb2: {
    powerDesign: 20,
    powerUsed: 13.25508194929042,
    rackName: 'TEST03.04',
  },
  '793239b31ba0b01046ac2f4b234bcbb3': {
    powerDesign: 20,
    powerUsed: 17.40399195601043,
    rackName: 'TEST03.05',
  },
  '353239b31ba0b01046ac2f4b234bcbb4': {
    powerDesign: 20,
    powerUsed: 9.274636535362813,
    rackName: 'TEST03.06',
  },
  fd3239b31ba0b01046ac2f4b234bcbb4: {
    powerDesign: 20,
    powerUsed: 15.143607844229223,
    rackName: 'TEST03.07',
  },
  b93239b31ba0b01046ac2f4b234bcbb5: {
    powerDesign: 20,
    powerUsed: 12.293133004526734,
    rackName: 'TEST03.08',
  },
  '753239b31ba0b01046ac2f4b234bcbb6': {
    powerDesign: 20,
    powerUsed: 10.731322328053993,
    rackName: 'TEST03.09',
  },
  '313239b31ba0b01046ac2f4b234bcbb7': {
    powerDesign: 20,
    powerUsed: 11.42889282127818,
    rackName: 'TEST03.10',
  },
  f93239b31ba0b01046ac2f4b234bcbb7: {
    powerDesign: 20,
    powerUsed: 7.935160873361367,
    rackName: 'TEST04.01',
  },
  b53239b31ba0b01046ac2f4b234bcbb8: {
    powerDesign: 20,
    powerUsed: 15.991068147083327,
    rackName: 'TEST04.02',
  },
  '713239b31ba0b01046ac2f4b234bcbb9': {
    powerDesign: 20,
    powerUsed: 17.70714314626165,
    rackName: 'TEST04.03',
  },
  '3d3239b31ba0b01046ac2f4b234bcbb9': {
    powerDesign: 20,
    powerUsed: 11.260318665330331,
    rackName: 'TEST04.04',
  },
  f53239b31ba0b01046ac2f4b234bcbba: {
    powerDesign: 20,
    powerUsed: 8.46202663930073,
    rackName: 'TEST04.05',
  },
  '793239b31ba0b01046ac2f4b234bcbc7': {
    powerDesign: 20,
    powerUsed: 16.37318400194665,
    rackName: 'TEST04.06',
  },
  '353239b31ba0b01046ac2f4b234bcbc8': {
    powerDesign: 20,
    powerUsed: 8.706116880529246,
    rackName: 'TEST04.07',
  },
  fd3239b31ba0b01046ac2f4b234bcbc8: {
    powerDesign: 20,
    powerUsed: 14.399200434085104,
    rackName: 'TEST04.08',
  },
  b93239b31ba0b01046ac2f4b234bcbc9: {
    powerDesign: 20,
    powerUsed: 16.784114326773565,
    rackName: 'TEST04.09',
  },
  '753239b31ba0b01046ac2f4b234bcbca': {
    powerDesign: 20,
    powerUsed: 19.26868695224234,
    rackName: 'TEST04.10',
  },
  '313239b31ba0b01046ac2f4b234bcbcb': {
    powerDesign: 20,
    powerUsed: 9.677994983842762,
    rackName: 'TEST05.01',
  },
  f93239b31ba0b01046ac2f4b234bcbcb: {
    powerDesign: 20,
    powerUsed: 6.810766724145351,
    rackName: 'TEST05.02',
  },
  b53239b31ba0b01046ac2f4b234bcbcc: {
    powerDesign: 20,
    powerUsed: 7.84291681606728,
    rackName: 'TEST05.03',
  },
  '713239b31ba0b01046ac2f4b234bcbcd': {
    powerDesign: 20,
    powerUsed: 11.4213809025203,
    rackName: 'TEST05.04',
  },
  '3d3239b31ba0b01046ac2f4b234bcbcd': {
    powerDesign: 20,
    powerUsed: 15.735112678864587,
    rackName: 'TEST05.05',
  },
  f53239b31ba0b01046ac2f4b234bcbce: {
    powerDesign: 20,
    powerUsed: 17.806406863346005,
    rackName: 'TEST05.06',
  },
  b13239b31ba0b01046ac2f4b234bcbcf: {
    powerDesign: 20,
    powerUsed: 9.84905132087619,
    rackName: 'TEST05.07',
  },
  '7d3239b31ba0b01046ac2f4b234bcbcf': {
    powerDesign: 20,
    powerUsed: 19.006105508107964,
    rackName: 'TEST05.08',
  },
  '393239b31ba0b01046ac2f4b234bcbd0': {
    powerDesign: 20,
    powerUsed: 13.258696502723765,
    rackName: 'TEST05.09',
  },
  f13239b31ba0b01046ac2f4b234bcbd1: {
    powerDesign: 20,
    powerUsed: 12.152184562985639,
    rackName: 'TEST05.10',
  },
  bd3239b31ba0b01046ac2f4b234bcbd1: {
    powerDesign: 20,
    powerUsed: 12.442184661642301,
    rackName: 'TEST06.01',
  },
  '793239b31ba0b01046ac2f4b234bcbd2': {
    powerDesign: 20,
    powerUsed: 17.039046518399783,
    rackName: 'TEST06.02',
  },
  '353239b31ba0b01046ac2f4b234bcbd3': {
    powerDesign: 20,
    powerUsed: 19.942581376582254,
    rackName: 'TEST06.03',
  },
  fd3239b31ba0b01046ac2f4b234bcbd3: {
    powerDesign: 20,
    powerUsed: 15.180632881253137,
    rackName: 'TEST06.04',
  },
  b93239b31ba0b01046ac2f4b234bcbd4: {
    powerDesign: 20,
    powerUsed: 14.909833915754628,
    rackName: 'TEST06.05',
  },
  '753239b31ba0b01046ac2f4b234bcbd5': {
    powerDesign: 20,
    powerUsed: 13.311056956094603,
    rackName: 'TEST06.06',
  },
  '313239b31ba0b01046ac2f4b234bcbd6': {
    powerDesign: 20,
    powerUsed: 16.840959466425502,
    rackName: 'TEST06.07',
  },
  f93239b31ba0b01046ac2f4b234bcbd6: {
    powerDesign: 20,
    powerUsed: 16.735655878328295,
    rackName: 'TEST06.08',
  },
};


const addRack = (
  metaSysId: string,
  powerDesign: number,
  powerUsed: number,
  rackName: string,
) => {
  let message = '';
  // let newline = document.createElement('br');
  const mainDiv = document.getElementById('main');
  if (mainDiv !== null) {
    // rack outer
    const rackOuter = document.createElement('div');
    mainDiv.appendChild(rackOuter);
    rackOuter.classList.add('rackOuter');
    rackOuter.innerText = message;
    rackOuter.classList.add('rackOuter');
    // rack title
    const rackTitle = document.createElement('div');
    rackOuter.appendChild(rackTitle);
    rackTitle.classList.add('rackTitle');
    rackTitle.innerText = `Rack - ${rackName}\n`;
    // rack power design
    const rackPowerDesign = document.createElement('div');
    rackOuter.appendChild(rackPowerDesign);
    rackPowerDesign.classList.add('rackPowerDesign');
    rackPowerDesign.innerText = `Power design - ${powerDesign}\n`;
    // rack power used
    const rackPowerUsed = document.createElement('div');
    rackOuter.appendChild(rackPowerUsed);
    rackPowerUsed.classList.add('rackPowerUsed');
    rackPowerUsed.innerText = `Power Used - ${powerUsed.toFixed(2)}\n`;
    // percentage safety margin
    const rackSafetyMargin = document.createElement('div');
    rackOuter.appendChild(rackSafetyMargin);
    rackSafetyMargin.classList.add('rackSafetyMargin');
    rackSafetyMargin.innerText = `Percentage - ${((powerUsed / powerDesign) * 100).toFixed(2)}\n`;
    // design bar
    const powerDesignDiv = document.createElement('div');
    rackOuter.appendChild(powerDesignDiv);
    powerDesignDiv.classList.add('powerDesign');
    powerDesignDiv.style.width = `${powerDesign * 10}px`;
    // usage bar
    const powerUsageDiv = document.createElement('div');
    rackOuter.appendChild(powerUsageDiv);
    powerUsageDiv.classList.add('powerUsed');
    powerUsageDiv.style.width = `${powerUsed * 10}px`;
    // set rack design
    const setRackDesign = document.createElement('input');
    setRackDesign.classList.add('powerDesignInput');
    setRackDesign.setAttribute('type', 'number');
    setRackDesign.setAttribute('value', '10');
    rackOuter.appendChild(setRackDesign);
    // apply rack design button
    const rackDesignButton = document.createElement('input');
    rackDesignButton.setAttribute('type', 'button');
    rackDesignButton.setAttribute('value', 'Apply New Power Design');
    rackDesignButton.setAttribute('id', `apply${metaSysId}`);
    rackDesignButton.dataset.metasysid = metaSysId;
    rackOuter.appendChild(rackDesignButton);
    // percentage input
    const percentageInput = document.createElement('input');
    percentageInput.classList.add('percentageInput');
    percentageInput.setAttribute('type', 'number');
    percentageInput.setAttribute('value', '10');
    rackOuter.appendChild(percentageInput);
    // apply percentage button
    const safteyPercentageButton = document.createElement('input');
    safteyPercentageButton.setAttribute('type', 'button');
    safteyPercentageButton.setAttribute('value', 'Apply safety margin');
    safteyPercentageButton.setAttribute('id', `apply${metaSysId}`);
    safteyPercentageButton.dataset.metasysid = metaSysId;
    rackOuter.appendChild(safteyPercentageButton);
  }
};
const addRackMain = (
  pduSysId: string,
) => {
  if (Object.prototype.hasOwnProperty.call(pduData, pduSysId)) {
    const rackNameMetaSysId: Record<string, string> = {};
    const rackNameSorted: Array<string> = [];
    pduData[pduSysId].childRacks.forEach((metaSysId) => {
      rackNameMetaSysId[rackData[metaSysId].rackName] = metaSysId;
      rackNameSorted.push(rackData[metaSysId].rackName);
    });
    rackNameSorted.sort();
    roomTotalUsed = 0;
    rackNameSorted.forEach((rackName) => {
      const metaSysId = rackNameMetaSysId[rackName];
      const powerDesign = rackData[metaSysId].powerDesign;
      const powerUsed = rackData[metaSysId].powerUsed;
      roomTotalUsed += powerUsed;
      addRack(
        metaSysId,
        powerDesign,
        powerUsed,
        rackName,
      );
    });

  }
};
const generatePduStats = (
  pduSysId: string,
) => {
  let findDiv: HTMLDivElement | null;
  // PDU Power Design
  findDiv = <HTMLDivElement>document.getElementById(`pduPowerDesign_${pduSysId}`);
  if (findDiv !== null) {
    findDiv.innerText = `PDU Power Design ${pduData[pduSysId].powerDesign}`;
  }
  // calculate rack totals
  let rackDesignTotal = 0;
  let rackUsageTotal = 0;
  if (findDiv !== null) {
    if (Object.prototype.hasOwnProperty.call(pduData, pduSysId)) {
      pduData[pduSysId].childRacks.forEach((rackSysId) => {
        if (Object.prototype.hasOwnProperty.call(rackData, rackSysId)) {
          rackDesignTotal += rackData[rackSysId].powerDesign;
          rackUsageTotal += rackData[rackSysId].powerUsed;
        }
      });
    }
  }
  // round up
  rackDesignTotal = Math.ceil(rackDesignTotal * 1000) / 1000;
  rackUsageTotal = Math.ceil(rackUsageTotal * 1000) / 1000;
  // rack design total
  findDiv = <HTMLDivElement>document.getElementById(`rackPowerDesignTotal_${pduSysId}`);
  if (findDiv !== null) {
    findDiv.innerText = `Rack Design total ${rackDesignTotal}`;
  }
  // rack usage total
  findDiv = <HTMLDivElement>document.getElementById(`rackPowerUsageTotal_${pduSysId}`);
  if (findDiv !== null) {
    findDiv.innerText = `Rack Usage total ${rackUsageTotal}`;
  }
  // power design unused
  findDiv = <HTMLDivElement>document.getElementById(`unusedPduPowerDesign_${pduSysId}`);
  if (findDiv !== null) {
    findDiv.innerText = `Power design unused ${pduData[pduSysId].powerDesign - rackDesignTotal}`;
  }
  // percentage power usage
  findDiv = <HTMLDivElement>document.getElementById(`percentagePowerUsage_${pduSysId}`);
  if (findDiv !== null) {
    const powerOverNeeded = pduData[pduSysId].powerDesign - rackUsageTotal;
    const percentageUsage = (powerOverNeeded / pduData[pduSysId].powerDesign * 100).toFixed(2);
    findDiv.innerText = `Percentage safety margin ${percentageUsage}%`;
  }
};
const drawPdu = (
  pduName: string,
  pduSysId: string,
) => {
  const mainDiv = document.getElementById('main');
  if (mainDiv !== null) {
    let lineBreak = document.createElement('br');
    mainDiv.appendChild(lineBreak);
    // draw pdu outer
    const pduOuter = document.createElement('div');
    mainDiv.appendChild(pduOuter);
    pduOuter.classList.add('pduOuter');
    // pdu title
    const pduTitle = document.createElement('div');
    pduOuter.appendChild(pduTitle);
    pduTitle.classList.add('pduTitle');
    pduTitle.innerText = pduName;
    // pdu power design
    const pduPowerDesign = document.createElement('div');
    pduOuter.appendChild(pduPowerDesign);
    pduPowerDesign.setAttribute('id', `pduPowerDesign_${pduSysId}`);
    pduPowerDesign.classList.add('pduPowerDesign');
    // rack power design total
    const rackPowerDesignTotal = document.createElement('div');
    pduOuter.appendChild(rackPowerDesignTotal);
    rackPowerDesignTotal.setAttribute('id', `rackPowerDesignTotal_${pduSysId}`);
    rackPowerDesignTotal.classList.add('rackPowerDesignTotal');
    // power design unused
    const unusedPduPowerDesign = document.createElement('div');
    pduOuter.appendChild(unusedPduPowerDesign);
    unusedPduPowerDesign.setAttribute('id', `unusedPduPowerDesign_${pduSysId}`);
    unusedPduPowerDesign.classList.add('unusedPduPowerDesign');
    // rack power usage total
    const rackPowerUsageTotal = document.createElement('div');
    pduOuter.appendChild(rackPowerUsageTotal);
    rackPowerUsageTotal.setAttribute('id', `rackPowerUsageTotal_${pduSysId}`);
    rackPowerUsageTotal.classList.add('rackPowerUsageTotal');
    rackPowerUsageTotal.innerText = 'Rack Power Usage Total';
    // percentage power usage
    const percentagePowerUsage = document.createElement('div');
    pduOuter.appendChild(percentagePowerUsage);
    percentagePowerUsage.setAttribute('id', `percentagePowerUsage_${pduSysId}`);
    percentagePowerUsage.classList.add('percentagePowerUsage');
    // line break
    lineBreak = document.createElement('br');
    pduOuter.appendChild(lineBreak);
    // newline after pdu
    lineBreak = document.createElement('br');
    pduOuter.appendChild(lineBreak);
    //
    generatePduStats(pduSysId);
  }
};
const pduLoop = () => {
  // clear div
  const mainDiv = document.getElementById('main');
  if (mainDiv !== null) {
    while (mainDiv.firstChild) {
      mainDiv.removeChild(mainDiv.firstChild);
    }
  }
  // process pdus
  const sortedPdus = Object.keys(pduNamePduSysId);
  sortedPdus.sort();
  sortedPdus.forEach((pduName) => {
    const pduSysId = pduNamePduSysId[pduName];
    drawPdu(
      pduName,
      pduSysId,
    );
    addRackMain(pduSysId);
  });
};
const redistribute = () => {
  // recalculate roomTotalUsed
  roomTotalUsed = 0;
  Object.keys(rackData).forEach((metaSysId) => {
    roomTotalUsed += rackData[metaSysId].powerUsed;
  });
  const thing = roomTotalDesign / roomTotalUsed;
  // update rack power design
  Object.keys(rackData).forEach((metaSysId) => {
    rackData[metaSysId].powerDesign = Math.floor(rackData[metaSysId].powerUsed * 1000 * thing) / 1000;
  });
  pduLoop();
};
const createRoom = () => {
  let message = '';
  const roomDiv = document.getElementById('room');
  if (roomDiv !== null) {
    roomDiv.classList.add('roomDiv');
    message += 'TEST\n\n';
    message += `Room Design ${roomTotalDesign}\n`;
    message += `Room Used ${roomTotalUsed}\n`;
    message += `Percentage - ${((roomTotalUsed / roomTotalDesign) * 100).toFixed(2)}\n`;
    roomDiv.innerText = message;
    // redistributeButton button
    const redistributeButton = document.createElement('div');
    roomDiv.appendChild(redistributeButton);
    redistributeButton.classList.add('button');
    redistributeButton.innerText = 'Redistribute';
    redistributeButton.addEventListener('click', redistribute);
  }
};
pduLoop();
createRoom();