var janelaInfo : Rect = Rect(100, 100, 200, 100);
var janelaVisible : boolean = false;

function Update(){
	transform.RotateAroundLocal(Vector3.up,1*Time.deltaTime);
}

function OnMouseDown () {
		if(janelaVisible==false)
			janelaVisible = true;
		else
			janelaVisible = false;
}

function OnGUI(){
	if(janelaVisible)
		janelaInfo = GUI.Window(0, janelaInfo, Mover, gameObject.name);
}

function Mover(windowID : int) {
	GUI.DragWindow();
	GUI.Label(Rect(10,20,100,20),"Rotation Y: ");
	GUI.TextField(Rect(80,20,70,20), transform.rotation.eulerAngles.y.ToString());
}