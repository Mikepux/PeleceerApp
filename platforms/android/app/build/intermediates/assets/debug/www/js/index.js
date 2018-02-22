var app = {
 // Application Constructor
 initialize: function() {
 this.bindEvents();
 console.log("Starting NFC Reader app");
 },
 // Bind Event Listeners
 bindEvents: function() {
 document.addEventListener('deviceready', this.onDeviceReady, false);
 },
 // deviceready Event Handler 
 onDeviceReady: function() {
 //app.receivedEvent('deviceready');
 nfc.addTagDiscoveredListener(
 app.onNfc, // tag successfully scanned
 function (status) { // listener successfully initialized
 app.display("Tap a tag to read its id number.");
 },
 function (error) { // listener fails to initialize
 app.display("NFC reader failed to initialize " +
 JSON.stringify(error));
 }
 );
 },
  
 onNfc: function(nfcEvent) {
 var tag = nfcEvent.tag;
 //var locationm='MIKE SEMA';
 app.display("Read tag: "+nfc.bytesToHexString(tag.id));
 var items="";
 $.getJSON("http://www.shammahpainters.com/myscript/mylogin.php?mysnfc="+nfc.bytesToHexString(tag.id),function(data){
  var output = [];
  if (data.status == 'success') {
var url = 'adminpanel.html';
$(location).attr('href',url);
  }else{
 alert("User Do not exist");
  }
/*$.each(data,function(index,item) {
  items+=item.username;
  });*/
 //app.display("Another Tag: "+items);
});
 },
 display: function(message) {
 var label = document.createTextNode(message),
 lineBreak = document.createElement("br");
 messageDiv.appendChild(lineBreak); // add a line break
 messageDiv.appendChild(label); // add the text
 },   
  clear: function() {
 messageDiv.innerHTML = "";
 },

};