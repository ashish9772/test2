acctData = [
 {
 "acctNum": "AAA - 1234",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 5231",
 "user": "Bob"
 },
 {
 "acctNum": "AAA - 9921",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 8191",
 "user": "Alice"
 }
];
balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};

function value(a){
    if(a == 'asc'){
        return  acctData.sort(function(a,b){return balance[a.acctNum] - balance[b.acctNum]}) 
    } 

    if(a == 'dsc') {
        return  acctData.sort(function(a,b){return balance[b.acctNum] - balance[a.acctNum]});
    }

    return acctData.filter(d => d.user == a);

}
value('asc')
value('dsc')
value('Alice')
value('Bob')