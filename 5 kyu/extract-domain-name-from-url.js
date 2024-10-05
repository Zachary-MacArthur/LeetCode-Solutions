//input is a string (domain name)
//return just the domain name as a string ie between www. and .com
//example * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//pseudo code: use replace to get rid of all prefixes ie www. https http etx
// split into array on the . for dot com and return zero index 
function domainName(url){
    let noH = url.replace('http://', '')
    let noW = noH.replace('www.', '')  
    let noS = noW.replace('https://', '')
    let noC = noS.split('.')
    return noC[0]
  }