export const buddySystemAddress = "0x490764ae3a7c6F4813CECf03A0ab253F2C69356A";
export const buddySystemAbi = [{
    "constant": false,
    "inputs": [{
        "name": "buddy",
        "type": "address"
    }],
    "name": "updateBuddy",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "myBuddy",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "player",
        "type": "address"
    }],
    "name": "buddyOf",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "player",
        "type": "address"
    }, {
        "indexed": true,
        "name": "buddy",
        "type": "address"
    }],
    "name": "onUpdateBuddy",
    "type": "event"
}]