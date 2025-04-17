// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const JAN_1ST_2030 = 1893456000;

const LockModule = buildModule('LockModule', (m) => {
  const unlockTime = m.getParameter('unlockTime', JAN_1ST_2030);

  const lock = m.contract('Lock', [unlockTime], {
    value: 100000n,
  });

  return { lock };
});

export default LockModule;
