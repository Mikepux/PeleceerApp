var serviceURL = "http://www.ongwaesecretariat.co.ke/etransmission/";
var myasset;
$(document).ready(function(e){
  var items="";
  $.getJSON("http://www.ongwaesecretariat.co.ke/etransmission/npollingst.php",function(data){
   items+="<option value=''>--Select--</option>";
   $.each(data,function(index,item) 
    {
      items+="<option value='"+item.id+"'>"+item.pstation+"</option>";
    });
    $("#pstation").html(items); 
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
'<p>'+'Polling Station:<select name="pstation" id="pstation" ata-native-menu="false" data-mini="true" ></select></p>'
  );
$.each(myasset, function(index, siteedit) {
$('#nccheckList').append(
'<p>'+siteedit.aspirantname+ '<input type ="text" name="mikemimi[]" value="">'+'</p>'+
'<p><input type ="hidden" name="partyid[]" value="'+siteedit.id+'"></p>'

  );
});
$('#neighbourDetails').listview('refresh');
});
 }
