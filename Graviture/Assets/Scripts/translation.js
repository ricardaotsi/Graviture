import System.Collections.Generic;

static var G = 0.01f; // adjust with try & error

static var planets = List.<Rigidbody>();
private var myRigidbody : Rigidbody;

//for testing. Set the z value to give the planet an initial speed along it's z-axis
public var initialForwardSpeed : Vector3; 

function Awake()
{
    myRigidbody = rigidbody;
    myRigidbody.velocity = transform.TransformDirection(initialForwardSpeed);
}

function OnEnable()
{
    planets.Add(rigidbody);
}

function OnDisable()
{
    planets.Remove(rigidbody);
}

function FixedUpdate()
{
    var pos = myRigidbody.position;
    var acc = Vector3.zero;
    for(var planet in planets)
    {
        if (planet == myRigidbody)
            continue;
        var direction = (planet.position - pos);
        acc += G * (direction.normalized * planet.mass) / direction.sqrMagnitude; 
    }
    myRigidbody.velocity+= acc * Time.fixedDeltaTime;   
}