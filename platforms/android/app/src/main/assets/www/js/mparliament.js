var serviceURL = "http://www.peleceer.co.ke/etransmission/";
var myasset;
var alafu=[];
$.urlParam = function(name, url) {
    if (!url) {
     url = window.location.href;
    }
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) { 
        return undefined;
    }
    return results[1] || undefined;
}
   function mikepuxed(pcustomer){
 var mike=document.getElementById("pcustomer").value;
  var items="";
  $.getJSON("http://www.peleceer.co.ke/etransmission/myblnumber.php?asseitid="+mike,function(data){
    items+="<option value=''>--Select--</option>";
    $.each(data,function(index,item) 
    {
      items+="<option value='"+item.blnumber+"'>"+item.blnumber+"</option>";
    });
    $("#pbillnumber").html(items); 
});	
 }
  $(document).ready(function(e){
  var items="";
  $.getJSON("http://www.peleceer.co.ke/etransmission/prmstatus.php",function(data){
   items+="<option value=''>--Select--</option>";
   $.each(data,function(index,item) 
    {
      items+="<option value='"+item.statid+"'>"+item.processtatus+"</option>";
    });
    $("#prstatus").html(items); 
  });
 });
 
 /*function checkprocstat(pcustomer,pbillnumber){
var pcust=document.getElementById("pcustomer").value;
var pbill=document.getElementById("pbillnumber").value;
 $(document).ready(function(e){
  var items="";
  $.getJSON("http://www.peleceer.co.ke/etransmission/clprocess.php?mpcust="+pcust+'&mpbill='+pbill,function(data){
   items+="<option value=''>--Select--</option>";
   $.each(data,function(index,item) 
    {
      items+="<option value='"+item.id+"'>"+item.myproces+"</option>";
    });
    $("#clprocess").html(items); 
  });
 });
  }*/
$(document).ready(function(e){
  var items="";
	var Xapartment = $.urlParam('myuser');
	var cont = $.urlParam('constit');
	var mward = $.urlParam('wardw');
$.getJSON("http://www.peleceer.co.ke/etransmission/newpolling.php",function(data){
   items+="<option value=''>--Select--</option>";
   $.each(data,function(index,item) 
    {
      items+="<option value='"+item.rowid+"'>"+item.FullName+"</option>";
    });
    $("#pcustomer").html(items); 
  });
 });
$('#nccheckListPage').bind('pageinit', function(event) {
getAssetList();
});
function getAssetList() {
$.getJSON(serviceURL + 'getaspirantdetails.php?', function(data) {
$('#nccheckList li').remove();
myasset = data.items;
$('#nccheckList').append(
'<p>'+'CUSTOMER:<select name="pcustomer" id="pcustomer" ata-native-menu="false" data-mini="true" onChange="mikepuxed(pcustomer)"></select></p>'+
'<p>'+'BLNUMBER:<select name="pbillnumber" id="pbillnumber" ata-native-menu="false" data-mini="true"  ></select></p>'+
'<p>'+'PROCESS:<input class="wide-control" placeholder="Clearance Process" id="clprocess" name="clprocess" type="text" ></select></p>'+
'<p>'+'DATE:<input class="wide-control" placeholder="Date " type="date" name="fromdate" id="fromdate"></p>'+
'<p>'+'AMOUNT:<input class="wide-control" placeholder="Amount" type="number" name="amount" id="amount"></p>'+
'<p>'+'STATUS:<select name="prstatus" id="prstatus" ata-native-menu="false" data-mini="true" ></select></p>'+
'<p>'+'COMMENTS: <textarea name="coments"></textarea></p>'

  );
/*alafu= data.items;
$.each(alafu, function(index, siteedit) {
$('#nccheckList').append(
'<p>'+siteedit.aspirantname+ '<input type ="number" step="0.01" min="0" name="mikemimi[]" value="" id="mikemimi[]" REQUIRED>'+'</p>'+
'<p><input type ="hidden" name="partyid[]" value="'+siteedit.id+'"></p>'
  );
});*/
$('#neighbourDetails').listview('refresh');
});
 }
