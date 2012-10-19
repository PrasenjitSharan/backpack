/* 
 * source: http://www.prasenjitsharan.com/blog/append-parameters-to-a-url-using-javascript/
 */

/* 
 * Function to append parameters to a url 
 * returns the result url string 
 * parameter 1 – url, string 
 * parameter 2 – params, JSON object with parameter list to be appended 
 */ 

function appendUrlParams(url, params) { 
    var appendAmpersand = (url.length > 0) 
        && (url.charAt(url.length - 1) != '?'); 
    
    for ( var property in params) { 
        if (appendAmpersand == true) { 
            url += "&"; 
        } 
        else { 
            appendAmpersand = true; 
        } 

        if (typeof params[property] === "object") { 
            url += (property + "=" + escape(JSON.stringify(params[property]))); 
        } 
        else { 
            url += (property + "=" + escape(params[property])); 
        } 
    } 
    return url; 
} 