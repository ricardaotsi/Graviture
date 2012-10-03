var scriptSisGui : SistemaGUI;

function Update(){
	transform.RotateAroundLocal(Vector3.up,1*Time.deltaTime);
	scriptSisGui.RotYSun = transform.rotation.eulerAngles.y;
}
