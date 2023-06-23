using UnityEngine;

public class Glow : MonoBehaviour
{
    public Color glowColor = Color.green;
    public float glowIntensity = 1.0f;

    void Start()
    {
        // Subscribe to the OnCrosshairOver event
        Crosshair.CrosshairOver += OnCrosshairOver;
    }

    void OnCrosshairOver(Crosshair crosshair)
    {
        // Start glowing
        GetComponent<Renderer>().material.color = glowColor * glowIntensity;
    }

    void OnCrosshairExit(Crosshair crosshair)
    {
        // Stop glowing
        GetComponent<Renderer>().material.color = Color.white;
    }
}
