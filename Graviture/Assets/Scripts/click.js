var janelaInfo : Rect = Rect(100, 100, 200, 300);
var janelaVisible : boolean = false;
var tgstate : boolean = false;
var tgstate2 : boolean = false;
var planeta : Transform;
var v : Vector2 = Vector2.zero;

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
	if(GUI.Button(Rect(165,0,30,20),"X"))
	{
		janelaVisible = false;
	}
	GUI.Label(Rect(10,20,100,20),"Rotation Y: ");
	var i:int=transform.rotation.eulerAngles.y;
	GUI.TextField(Rect(80,20,70,20), i.ToString());
	
	v=GUI.BeginScrollView(Rect(10, 50, 180, 190), v, Rect(0,0, 100, 400));
	tgstate = GUI.Toggle(Rect (0,0,130,20), tgstate, "Elemento 1");
	tgstate2 = GUI.Toggle(Rect (0,20,130,20), tgstate2, "Elemento 2");
	GUI.EndScrollView();
	
	if(GUI.Button(Rect(10,250,180,40),"Combinar"))
	{
		Instantiate(planeta, Vector3(GameObject.Find("Sun").transform.position.x+Sistema.f*2, GameObject.Find("Sun").transform.position.y,GameObject.Find("Sun").transform.position.z), Quaternion.identity);
		gameObject.SendMessage("teste");
	}
	
	GUI.DragWindow();
}