//  Web3 intializer
//  ABI definition, Binary Data and contract Address in contractDetails.js

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var kycContract = web3.eth.contract(abi);
var deployedContract = kycContract.new({
    data: binaryData,
    from: web3.eth.accounts[0],
    gas: 4700000
});
var contractInstance = kycContract.at(contractAddress);


var current_account = localStorage.bank_eth_account.toString();



  node.once('ready', () => {
      console.log('Online status: ', node.isOnline() ? 'online' : 'offline');
      node.add(new node.types.Buffer("data"), (err, filesAdded) => {
        //if(getInfo()=="!@#!@#!@#!@#!@#!@#!@#Female!@#!@#!@#!@#!@#!@#") break;
      if (err) {
        return console.error('Error - ipfs add', err, res);
      }

      filesAdded.forEach((file) => console.log('successfully stored', file.hash));
      
    });
      
      
      // You can write more code here to use it. Use methods like
      // node.add, node.get. See the API docs here:
      // https://github.com/ipfs/interface-ipfs-core
    });




    



//  function to create a new KYC profile

function onClickAdd() {
    

    var Data = getInfo();
    


    var usnm = document.getElementById("username").value;
     localStorage.user_name_m=usnm;
     localStorage.data=Data;
    if (Data == undefined || usnm == "") {
        alert("Valid details required!");
        window.location = '../bankHomePage.html';
        return;
    }
    //  Data = performEncryption(Data);
    alert("Current bank accout: " + current_account);
    var check = contractInstance.addCustomer.call(usnm.toString(), Data.toString(), {
        from: current_account.toString(),
        gas: 4700000
    });
    if (check == 7) {
        alert("Access denied!");
        window.location = '../bankHomePage.html';
        return false;

    } else if (check == 1) {
        alert("Service limit reached! Try after some time...");
        window.location = '../bankHomePage.html';
        return false;
    } else if (check == 2) {
        alert("Customer already in database! Go to the modify form if you wish to change customer details. Thank you!");
        window.location = '../bankHomePage.html';
        return false;
    } else {
        
        
        contractInstance.addCustomer.sendTransaction(usnm, Data, {
            from: current_account.toString(),
            gas: 4700000
        });
        alert("Customer profile successfully created! Check the customer details from the view form tab. Thank you!");
        window.location = '../bankHomePage.html';
        return false;
    }
}
function getIpfs(node) {
    
    // body...
    var data=getInfo();

    console.log(node);
    
    
       node.add(node.types.Buffer(getInfo()), (err,filesAdded) => {
      if (err) {
        return console.error('Error - ipfs add', err)

      }
      filesAdded.forEach((file) => console.log (file.hash));
      console.log(filesAdded[0]['hash']);
      return (filesAdded[0]['hash']);
      
      
      
    });
      
      // You can write more code here to use it. Use methods like
      // node.add, node.get. See the API docs here:
     // https://github.com/ipfs/interface-ipfs-core
    

     
    return data;
    

}


  function getInfo() {
    
    
    

    var data = document.getElementById("username").value + "!@#" + document.getElementById("first_name").value + "!@#" + document.getElementById("middle_name").value + "!@#" + document.getElementById("last_name").value + "!@#" + document.getElementById("occupation").value + "!@#" + document.getElementById("income_range").value + "!@#" + document.getElementById("DOB").value + "!@#";
    if (document.getElementById("gender_m").checked)
        data = data + "Male";
    else
        data = data + "Female";
    data = data + "!@#" + document.getElementById("address").value + "!@#" + document.getElementById("phone_1").value + "!@#" + document.getElementById("phone_2").value + "!@#" + document.getElementById("email").value + "!@#" + document.getElementById("country_res").value + "!@#";
    
    // Connect to IPFS
    

      
    
    
    
  
   
     
     
    return data;
}

