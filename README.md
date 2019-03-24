KYC-chain:

A blockchain and IPFS based KYC registry prototype



Requirements

The system must have NodeJS and ganache-cli installed. Be sure the npm version is >= 5.6.0 and node version is >= 9.4.0. Check the version numbers by using the terminal commands node -v and npm -v. Install testrpc using the command line npm install -g ganache-cli in linux.


Instructions to run:

Open a terminal window and execute the command line ganache-cli.or you can use metamask plugin change the code according to that in init.js and other html,js file.

Open another terminal and go to the root directory.

Execute the init.js file using the command line "node init.js".

After about 10-15 seconds, we obtain a 20 byte address. This is the address of the compiled smart contract.

Go to the file root\js\contractDetails.js and open it using a text editor.

Edit the first line denoting the contract instance address given by the variable contractAddress to the 20 byte address obtained in step 4.

Now execute in terminal "npm run dev". For sign up, password must be your ethereum account address 
