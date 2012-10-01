var btntexInfo : Texture;
var btntexPlan : Texture;
var janelaInfo : Rect = Rect(100, 100, 200, 300);
var janelaPlan : Rect = Rect(100, 100, 200, 300);
var janelaInfoVisible : boolean = false;
var janelaPlanVisible : boolean = false;
var tgstate : boolean = false;
var tgstate2 : boolean = false;
var planeta : Transform;
var scrollInv : Vector2 = Vector2.zero;
var scrollPlan : Vector2 = Vector2.zero;
static var RotYSun:int=0;
var planets = new Array();
var qtdePlanets : int = 0;

function OnGUI() {
	// SE clicou no botão
	if(GUI.Button( Rect(20,Screen.height-Screen.height/10-20, Screen.width/12, Screen.height/10), btntexInfo)) {
		janelaInfoVisible = true;
	}
	if(GUI.Button( Rect(40+Screen.width/12,Screen.height-Screen.height/10-20, Screen.width/12, Screen.height/10), btntexPlan)){
		janelaPlanVisible = true;
	}
	if(janelaInfoVisible)
		janelaInfo = GUI.Window(0, janelaInfo, WinInventory, "Inventory");
	if(janelaPlanVisible)
		janelaPlan = GUI.Window(1, janelaPlan, WinPlanets, "Planets");
}

function WinPlanets(windowID : int){
	if(GUI.Button(Rect(165,0,30,20),"X"))
	{
		janelaPlanVisible = false;
	}
	
	scrollPlan = GUI.BeginScrollView(Rect(10, 25, 180, 270), scrollPlan, Rect(0,0, 100, qtdePlanets*22));
	for(var i : int =0;i<=planets.length-1;i++)
	{
		 GUI.Label(Rect (0, i*20, 100, 20), i.ToString());
	}
	GUI.EndScrollView();
	
	GUI.DragWindow();
}


function WinInventory(windowID : int) {
	if(GUI.Button(Rect(165,0,30,20),"X"))
	{
		janelaInfoVisible = false;
	}
	
	GUI.Label(Rect(10,20,100,20),"Rotation Y: ");
	GUI.TextField(Rect(80,20,70,20), RotYSun.ToString());
	
	scrollInv=GUI.BeginScrollView(Rect(10, 50, 180, 190), scrollInv, Rect(0,0, 100, 400));
	tgstate = GUI.Toggle(Rect (0,0,130,20), tgstate, "Elemento 1");
	tgstate2 = GUI.Toggle(Rect (0,20,130,20), tgstate2, "Elemento 2");
	GUI.EndScrollView();
	
	if(GUI.Button(Rect(10,250,180,40),"Combinar"))
	{
		Instantiate(planeta, Vector3(GameObject.Find("Sun").transform.position.x+Sistema.f*2, GameObject.Find("Sun").transform.position.y,GameObject.Find("Sun").transform.position.z), Quaternion.identity);
		planets[qtdePlanets] = qtdePlanets+1;
		qtdePlanets++;
		gameObject.SendMessage("teste");
	}
	
	GUI.DragWindow();
}