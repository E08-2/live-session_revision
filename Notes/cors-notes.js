// * CORS (Cross-Origin Resource Sharing)

// * 1. What is CORS?

// ... not so fast!
// Before we talk about what CORS is, we should first ask what the SOP (Same Origin Policy) is...

// * Ok, what is the SOP (Same Origin Policy)?

// "The Same Origin Policy is a web browser security mechanism that aims to prevent websites from attacking each other!"
// It stops scripts on one origin from accessing data on another origin.

// ? For example, a company URL may look like:

// 1. scheme  2. domain                                   (3. port - default = 80)
// https://www.bobs-website.com/articles/bob.html

// * According to the SOP, a URL should only access other URLs with the same scheme, domain AND port!
// This is because cookies are often sent as part of HTTP requests.
// This means that when a response is generated, it could include data specific to the user.
// If you visted a malicious website, it could send a request, and get access to your emails, Facebook messages, etc.

// * Ok, that sounds reasonable, but also pretty restrictive.
// * Is there a way we can choose which URLs we are happy to receive requests from?

// Yes, which brings us back to CORS!

// CORS was designed as a "controlled relaxation" of SOP.
// It's a security measure, built into all modern browsers.
// It uses a range of headers in a HTTP request that define TRUSTED web origins, and what kinds of access are permitted.
// At the moment, we don't have time to go into all the headers in detail. However, the most common one is:

// ? Access-Control-Allow-Origin
// This header defines which origins can access a resource.

// Now you know a little about CORS (Cross-Origin Resource Sharing)!
// If you want to dive a little deeper, here is a quick example from Wikipedia:

// https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#Simple_example