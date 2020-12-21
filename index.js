import { Burrow } from '@hyperledger/burrow'

// const burrowURL = "<IP-ADDRESS>:<PORT>";  // localhost:10997 if running locally on default port
// const account = 'ABCDEF01234567890123'; // address of the account to use for signing, hex string representation

const burrowURL = "localhost:10997";
const account = '69D914876E5B66664CAE32D74DB8252B5001D3E7';
const client = new Burrow(burrowURL, account);

console.log("🐸 Hello Hyperledger Burrow \n", client);
