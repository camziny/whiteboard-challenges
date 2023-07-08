using UnityEngine;

public class Portal : MonoBehaviour
{
    public Portal destination;

    private void OnTriggerEnter(Collider other)
    {
        if (other.GetComponent<PortalableObject>())
        {
            // Get the position and rotation of the object that entered the portal.
            Vector3 position = other.transform.position;
            Quaternion rotation = other.transform.rotation;

            // Calculate the position and rotation of the object on the other side of the portal.
            Vector3 newPosition = destination.transform.position + (rotation * destination.normal);
            Quaternion newRotation = rotation * destination.rotation;

            // Teleport the object to the other side of the portal.
            other.transform.position = newPosition;
            other.transform.rotation = newRotation;
        }
    }
}

public class PortalableObject : MonoBehaviour
{
    public void OnTeleported(Portal sender, Portal destination, Vector3 newPosition, Quaternion newRotation)
    {
        // Do something when the object is teleported.
    }
}
