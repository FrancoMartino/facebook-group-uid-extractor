document.getElementById("extract").addEventListener("click", extractUIDs);
document.getElementById("export").addEventListener("click", exportToCSV);

function extractUIDs() {
  const urls = document.getElementById("urls").value.split("\n");
  const uids = urls
    .map((url) => {
      const match = url.match(/\/groups\/(\d+)/);
      return match ? match[1] : null;
    })
    .filter((uid) => uid !== null);

  document.getElementById("output").textContent = uids.join("\n");
}

function exportToCSV() {
  const uids = document.getElementById("output").textContent.split("\n");
  const csvContent = "data:text/csv;charset=utf-8," + uids.join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "facebook_uids.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
