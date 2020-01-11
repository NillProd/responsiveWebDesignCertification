
const subTitle = document.getElementById('sub-title');
subTitle.style.position = "absolute";
subTitle.style.left = "0";
subTitle.style.right = "0";

leftPos = 0;
let topPos = -150;
let speed = 2;

function Bas()
{
	if (topPos <= 200)
	{
		topPos = topPos + speed;
		subTitle.style.top = topPos + "px";
		requestAnimationFrame(Bas);
	}
	return 0;
}

Bas();