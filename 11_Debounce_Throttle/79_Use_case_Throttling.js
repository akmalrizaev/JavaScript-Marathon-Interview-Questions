// Throttling is useful when the user performs continuous actions such as
// scrolling or resizing

{
  /* <button onclick="fireBullet()"></button>
<h2 id="cC">Click Count: 0</h2>
<h2 id="bC">Bullet Count: 0</h2>

<script>
	let bulletCount = 0;
	let clickCount = 0;
	let fire = true;
	function fireBullet() {
		clickCount++;
		if (fire) {
			bulletCount++;
			fir = false;
			setInterval(function() {
				fire = true;
			}, 1000)
		}

		document.getElementById("cC").innerHTML="Click Count:" + clickCount;
		document.getElementById("bC").innerHTML="Bullet Count" + bulletCount;
	}
</script> */
}

// Throttling can be used in situations where, the user is trying to generate many events
// but we want to control as per our program's need

// Another common situation where we may think of throttling is the "scroll event"
