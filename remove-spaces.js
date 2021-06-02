function removespaces() {
  var distro = "A   R    C     H    L   I   N   U   X";
  var res = str.toLowerCase().replace(/\s/g, '');         //result string to lower case and remove spaces
  document.getElementById("demo").innerHTML = res;        //result will be archlinux
}
