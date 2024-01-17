# Voting-DAPP
Readme
------------------------------------------------------------
--------------------DOWNLOAD--------------------------------
1. Create a folder named VotingDAPP.
2. Download all the file in this repo and paste it in that folder.
3. Make sure that all files are downloaded.
--------------------INSTALL---------------------------------
1. Open Command Prompt or CMD.
2. Change the directory to the above folder VotingDAPP.
3. Install truffle.
4. Install nodejs.
5. Install ganache.
6. From the ganache UI, import truffle-config.js into the workspace.
7. Make sure that the truffle-config has the same localhost IP.
----------------COMPILE AND MIGRATE--------------------------
1. From the CMD, type truffle migrate to compile and deploy the contract.
2. Open ganache to see if the contract has been deployed or not.
3. Once it has been deployed, in CMD type this command >lite-server
4. Above command will connect index.html with our smart contract.
----------------USER INTERFACE------------------------------
1. From the index.html, make sure that you have MetaMask extension installed.
2. From the metamask extension, login to your account and connect to the website.
3. To start the voting, you have to get the admin address from the Ganache.
4. Login to the metamask as the admin by entering the private key of the admin address.
5. Start the voting.
6. Login to your account again to register as a voter.
7. Vote and log out.
8. Login as the admin and stop the voting.
9. Announce the winner.
