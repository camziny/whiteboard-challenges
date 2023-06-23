import requests
import xml.etree.ElementTree as ET
import pandas as pd

# Fetch the XML data from the URL
url = "https://example.com/data.xml"
response = requests.get(url)

# Parse the XML data into an ElementTree object
tree = ET.fromstring(response.content)

# Create a list of dictionaries to store the data
data = []

# Iterate over the `okrsek` elements in the XML data
for okrsek in tree.findall("okrsek"):
    # Get the values of the `poradi_davky`, `kstrana`, `hlasy`, `zapsani_volici`, `cis_obec`, and `cis_okrsek` attributes
    poradi_davky = okrsek.attrib["poradi_davky"]
    kstrana = okrsek.attrib["kstrana"]
    hlasy = okrsek.attrib["hlasy"]
    zapsani_volici = okrsek.attrib["zapsani_volici"]
    cis_obec = okrsek.attrib["cis_obec"]
    cis_okrsek = okrsek.attrib["cis_okrsek"]

    # Get the value of the `porad_zpracov` child element
    poradi_zpracov = okrsek.find("porad_zpracov").text

    # Add the data to the list of dictionaries
    data.append(
        {
            "poradi_davky": poradi_davky,
            "kstrana": kstrana,
            "hlasy": hlasy,
            "zapsani_volici": zapsani_volici,
            "cis_obec": cis_obec,
            "cis_okrsek": cis_okrsek,
            "porad_zpracov": poradi_zpracov,
        }
    )

# Create a Pandas DataFrame from the list of dictionaries
df = pd.DataFrame(data)

# Print the DataFrame
print(df)
