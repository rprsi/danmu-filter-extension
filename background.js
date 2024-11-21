var 日期_core={
    "2023-12-12":"36faf75c"
   ,"2023-12-14":"755ecd19"
   ,"2024-02-29":"e958ce79"
   ,"2024-07-23":"12ea1214"
   ,"2024-08-13":"8f2238a5"
   ,"2024-09-24":"e85cb4fd"
   ,"2024-10-15":"810d59cf"
};
var requestId;
var 日期="2023-12-14";//这里修改版本

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
    	var uurl=details.url;
        if(requestId==details.requestId){return {cancel: false};}
        else if((uurl.indexOf("bf"+"s/stat"+"ic/pla"+"yer/mai"+"n/co"+"re.") != -1 || uurl.indexOf("bf"+"s/se"+"ed/jin"+"kela/sho"+"rt/pl"+"ayer/js/co"+"re.js") != -1 )){			
            requestId=details.requestId;
			var core=日期_core[日期];			
            var url= "https://s1"+".hds"+"lb.com/b"+"fs/sta"+"tic/pla"+"yer/ma"+"in/core."+(core?core:"755ecd19")+".js";
            return {redirectUrl: url};
		}		
        return {cancel: false};	
    }, {urls: ["<all_urls>"]}, ["blocking"]
);