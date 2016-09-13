function templateTypeChange()
{
  var divClone = $(".addedClone").clone();
  divClone.removeClass("addedClone");
  divClone.addClass("added");
  var spanvalue ="";
  var templatetype ="";
  switch ($("#templatetype").val()) {

    case "0":
        spanvalue = "Federation";
        templatetype="0";
    break;
    case "1":
      spanvalue = "Organization";
      templatetype="1";
    break;
    case "2":
      spanvalue = "openID Connect OP";
      templatetype="2";
    break;
    case "3":
      spanvalue = "open IDConnect RP";
      templatetype="3";

    break;
    case "4":
      spanvalue = "UMA RS";
      templatetype="4";
    break;
    case "5":
      spanvalue = "UMA AS";
      templatetype="5";
    break;
    case "6":
      spanvalue = "UMA RO";
      templatetype="6";
    break;
    case "7":
      spanvalue = "OAuth OP";
      templatetype="7";
    break;
    case "8":
      spanvalue = "OAuth RP";
      templatetype="8";
    break;

    default:

  }
  divClone.find("span").text(spanvalue);
  divClone.find("span").attr("templatetype",templatetype);

  $(".filter").append(divClone);
  setTemplate();
}

function setTemplate(){

  $(".added").click(function(){
    //alert('hii');
    $(this).remove();
    setTemplate();
  });

  $('#template').text("");
  if($(".filter").children().length>1)
  {
    var obj = new Object();
    $( ".added" ).each(function( index ) {
        var templatetype = $(this).find("span").attr("templatetype");
        var data = getTemplateJSON(templatetype);
        switch (templatetype) {
          case "0":
            obj.federation = data;
            break;
          case "1":
            obj.organization = data;
            break;
          case "2":
            obj.connect_op = data;
            break;
          case "3":
            obj.connect_rp =data;
            break;
          case "4":
            obj.uma_rs = data;
            break;
          case "5":
            obj.uma_as = data;
            break;
          case "6":
            obj.uma_ro =data;
          break;
          case "7":
          obj.oauth_op =data;
          break;
          case "8":
            obj.oauth_rp =data
          break;

          default:

        }


    });
      //$('#template').text(JSON.stringify(obj), null, '\t');
      var objJSON = JSON.parse(JSON.stringify(obj));
      var pretty = JSON.stringify(objJSON, undefined, 4);
      $("#template").text(pretty);

  }
  else {
    $( ".added" ).each(function( index ) {
        var templatetype = $(this).find("span").attr("templatetype");
        var jsonTemplate = getTemplateJSON(templatetype);

        //$('#template').text(JSON.stringify(jsonTemplate), null, '\t');
        //var ugly = $('#template').text();
        var obj = JSON.parse(JSON.stringify(jsonTemplate));
        var pretty = JSON.stringify(obj, undefined, 4);
        $("#template").text(pretty);
    });
  }

  var regex = RegExp("{[a-z0-9A-Z]{1,}}","g");
  var guidReplaceArr = $("#template").text().match(regex);
//  var unique = a.filter( onlyUnique );
  if(guidReplaceArr !=null)
    $("#guidIdsrep").text(guidReplaceArr.toString());
    else {
      $("#guidIdsrep").text("");
    }
  //console.log(guidReplaceArr);
}

function setStringToReplace()
{
  var regex = RegExp("#[a-z0-9A-Z]{1,}#","g");
  var guidReplaceArr = $("#template").val().match(regex);
//  var unique = a.filter( onlyUnique );
  if(guidReplaceArr !=null)
    $("#stringIdsrep").text(guidReplaceArr.toString());
    else {
      $("#stringIdsrep").text("");
    }
}

  function getTemplateJSON(templatetype)
  {
    switch (templatetype) {
      case "0":
        return federationTemplate;
      break;
      case "1":
        return organizationTemplate
      break;
      case "2":
          return openIDConnectOPTemplate
      break;
      case "3":
        return openIDConnectRPTemplate

      break;
      case "4":
          return umaRSTemplate;
      break;
      case "5":
          return umaASTemplate;
      break;
      case "6":
        return umaROTemplate;
      break;
      case "7":
        return oauth2OPTemplate;
      break;
      case "8":
        return oauth2RPTemplate;
      break;

      default:

    }
  }

    //
    // var templatesAdding = $(".filter").children();
    // for(var i=0;i<templatesAdding.length;i++)
    // {
    //
    //       console.log(templatetype);
    // }
    // alert(templatesAdding.length);

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
