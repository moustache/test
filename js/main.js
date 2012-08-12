$(document).ready(function(){
   $('td').bind("click",function(){
        var tdElm = $(this);
        var colType  = $(this).attr("col-type");
        var text  = tdElm.text();
       tdElm.html('');
     var input = $('<input type="text"  class="genField textEntry date" readonly="readonly" />');
      input.val(text);
        tdElm.append(input);
        input.scroller(
         { "preset"    :colType
          , "timeFormat":"HH:ii"
          , "ampm":false
          , "dateFormat":"yy/mm/dd"
           , "dateOrder":"ymd"
         , "onSelect":function(valueText, inst) { tdElm.html(valueText); }
           , "onCancel":function(valueText, inst) { tdElm.html(valueText); }
           , "onClose":function(valueText, inst) { tdElm.html(valueText); }
            }
       );
      input.focus();
  });
 
});