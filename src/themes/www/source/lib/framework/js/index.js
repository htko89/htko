$(document).ready(function() {
  backToTop();
  getData("htkoca");
});

function getData(user) { // gets weather
  if ($("#free-code-camp_toc").length) {
    $.getJSON("https://api.tko.dev/fcc?user=" + user + "&callback=?", function(data) {
      console.log(data);
      var tocHtml = "";
      for (var certIdx in data["_map"]) {
        var cert = data["_map"][certIdx];
        cert["_status"] = "Incomplete"
        var certStatus = 0;
        for (var chapIdx in cert["_data"]) {
          var chap = cert["_data"][chapIdx];
          chap["_status"] = "Incomplete"
          var chapStatus = 0;
          for (var chalIdx in chap["_data"]) {
            var chal = chap["_data"][chalIdx];
            if (chal.hasOwnProperty("_link")) {
              if (chal.hasOwnProperty("_code")) {
                if (chal["_code"].includes("?solution=") || chal["_code"].includes("github")){
                  chal["_link"] = chal["_code"];
                }
              }
            } else {
              chal["_link"] = "#";
            }
            chal["_status"] = "Incomplete";
            if (chal.hasOwnProperty("_dateC")) {
              chal["_status"] = "Complete"
              chapStatus++;
            }
          }
          chapStatus = chapStatus / chap["_data"].length
          if (chapStatus === 1){
            chap["_status"] = "Complete";
            certStatus++;
          }
        }
        certStatus = certStatus / cert["_data"].length
        if (certStatus === 1){
          cert["_status"] = "Complete";
        }
      }
      for (var certIdx in data["_map"]) {
        var cert = data["_map"][certIdx];
        var certIdxStr = ("0"+ certIdx).slice(-2);
        tocHtml += "<h3>Section "+certIdxStr+" - "+cert["_status"]+" - "+cert["_name"]+"</h3>\n";
        for (var chapIdx in cert["_data"]) {
          var chap = cert["_data"][chapIdx];
          var chapIdxStr = ("0" + chapIdx).slice(-2);
          tocHtml += "<details><summary>"+chapIdxStr+" - "+chap["_status"]+" - "+chap["_name"]+" - ("+chap["_time"]+")</summary><ul>\n";
          if (chap.hasOwnProperty("_desc")) {
            tocHtml += "<p>"+chap["_desc"]+"</p>\n";
          }
          for (var chalIdx in chap["_data"]) {
            var chal = chap["_data"][chalIdx];
            var chalIdxStr = ("0" + chalIdx).slice(-2);
            tocHtml += "<li>"+chalIdxStr+" - <a href=\""+chal["_link"]+"\">"+chal["_status"]+"</a> - "+chal["_name"]+"</li>\n";
          };
          tocHtml += "<br></ul></details>\n";
        };
        tocHtml += "<br>\n";
      };
      tocHtml += "<h3>Deprecated Challenges</h3>\n";
      tocHtml += "<details><summary>00 - Complete - Challenges not found in current FreeCodeCamp curriculum.</summary><ul>\n";
      for (var chalIdx in data["_deprecated"]) {
        var chal = data["_deprecated"][chalIdx];
        var chalIdxStr = ("0" + chalIdx).slice(-2);

        tocHtml += "<li>"+chalIdxStr+" - <a href=\""+chal["_link"]+"\">Complete</a> - "+chal["_name"]+"</li>\n";
      };
      tocHtml += "<br></ul></details>\n";
      $("#free-code-camp_toc").html(tocHtml);
    });
  }
};

function backToTop() {
  //Click event to scroll to top
  $('#top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
}
