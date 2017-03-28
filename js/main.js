var hist = "<p>The southeastern face of Mount Rushmore in South Dakota’s Black Hills National Forest is the site of four gigantic carved sculptures depicting the faces of U.S. Presidents George Washington, Thomas Jefferson, Abraham Lincoln and Theodore Roosevelt. Led by the sculptor Gutzon Borglum, work on the project began in 1927 and was finally completed in 1941. Over that time period, some 400 workers erected the sculpture under dangerous conditions, removing a total of 450,000 tons of rock in order to create the enormous carved heads, each of which reached a height of 60 feet (18 meters).</p>";
var info = "<p>Nearly three million people visit Mount Rushmore each year. The busiest months are June, July and August. May, September and October are less busy and popular months to visit as well. Weather permitting, the grounds at Mount Rushmore are open every day of the year. The Information Center, Visitor Center, Gift Shop and Carver's Café are open every day except December 25th. There is no entrance fee for Mount Rushmore National Memorial. However, fees are required to park at the memorial. Park information. Phones are answered 7 days a week. Hours are 8:00 - 5:00 October through May, 8:00 - 10:00 June through mid-August and 8:00 - 9:00 mid-August through September. All times are Mountain Time.</p>";
    window.onload = function() {
        document.getElementById("btnRtn").style.display = "none";
        document.getElementById("lMount").style.display = "none";
        document.getElementById("btnOne").addEventListener("click", postHistory, false);
        document.getElementById("btnTwo").addEventListener("click", postInfo, false);
        document.getElementById("btnRtn").addEventListener("click", change, false);
        document.getElementById("mount").addEventListener("click", picLarge, false);
    }
    function postHistory() {
        document.getElementById("content").innerHTML = hist;
        document.getElementById("title").innerHTML = "<h2>History</h2>";
        document.getElementById("btnOne").style.display = "none";
        document.getElementById("btnTwo").style.display = "none";
        document.getElementById("btnRtn").style.display = "block";
        document.getElementById("mount").style.display = "none";
        document.getElementById("lMount").style.display = "none";
    }
    function postInfo() {
        document.getElementById("content").innerHTML = info;
        document.getElementById("title").innerHTML = "<h2>Tourist Information</h2>";
        document.getElementById("btnTwo").style.display = "none";
        document.getElementById("btnOne").style.display = "none";
        document.getElementById("btnRtn").style.display = "block";
        document.getElementById("mount").style.display = "none";
        document.getElementById("lMount").style.display = "none";
    }
    function change() {
    window.location = "index.html";
    }
        
    function picLarge() {
        document.getElementById("lMount").style.display = "block";
        document.getElementById("btnTwo").style.display = "none";
        document.getElementById("btnOne").style.display = "none";
        document.getElementById("mount").style.display = "none";
        document.getElementById("btnRtn").style.display = "block";
    }