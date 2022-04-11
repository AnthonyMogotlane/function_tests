var totalPhoneBill = function(callAndSms) {
    var callBill = 0;
    var smsBill = 0;
    
    var listCallSms = callAndSms.split(",");
    
    for(var i = 0; i < listCallSms.length; i++) {
      if(listCallSms[i].trim() === "call") {
         callBill += 2.75;
      }
      if(listCallSms[i].trim() === "sms") {
         smsBill += 0.65;
      }
    }
    
    var totalBill = callBill + smsBill;
    
    return "R" + totalBill.toFixed(2);
  }
  
  console.log(totalPhoneBill("call, sms, call, sms, sms"));