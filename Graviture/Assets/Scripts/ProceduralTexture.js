var textureWidth : int = 2;
var textureHeight : int = 2;
function Start () {
    // Create a new 2x2 texture ARGB32 (32 bit with alpha) and no mipmaps
    var texture = new Texture2D(textureWidth, textureHeight, TextureFormat.ARGB32, false);
	
	for(var i=0; i<=textureWidth-1;i++)
	{
		for(var j=0;j<=textureHeight-1;j++)
		{
		    // set the pixel values
		    /*texture.SetPixel(0, 0, Color.blue);
		    texture.SetPixel(1, 0, Color.red);
		    texture.SetPixel(0, 1, Color.green);
		    texture.SetPixel(1, 1, Color.yellow);
		    texture.SetPixel(0, 2, Color.black);
		    texture.SetPixel(2, 0, Color.magenta);
			texture.SetPixel(2, 2, Color.white);
			texture.SetPixel(2, 1, Color.grey);
			texture.SetPixel(1, 2, Color.cyan);*/
			texture.SetPixel(i,j,Color(Random.Range(0.0, 1.0), Random.Range(0.0, 1.0), Random.Range(0.0, 1.0), 1.0));
		}
	}
    // Apply all SetPixel calls
    texture.Apply();

    // connect texture to material of GameObject this script is attached to
    renderer.material.mainTexture = texture;
}