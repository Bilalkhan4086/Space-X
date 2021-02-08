const sWorker = () =>{
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        const sW = `${process.env.PUBLIC_URL}/SW.js`
      navigator.serviceWorker.register(sW).then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }}
  export default sWorker;