using System;
using System.Collections.Generic;

public class DrawLotsSystem
{
    private List<string> names = new List<string>();

    public void AddName(string name)
    {
        names.Add(name);
    }

    public string Draw()
    {
        int randomIndex = (int)Math.Floor(Math.Random() * names.Count);
        return names[randomIndex];
    }
}
