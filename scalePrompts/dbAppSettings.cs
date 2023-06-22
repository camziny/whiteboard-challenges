public string GetAppSetting(string key)
{
    var databaseAppSettings = this.mecConfigurationDataProvider.GetConfigurationSettings();
    var upperKey = key.ToUpper();
    string result = null;
    if (ConfigurationManager.AppSettings[key] != null)
    {
        result = ConfigurationManager.AppSettings[key];
    }
    else if (databaseAppSettings.ContainsKey(upperKey))
    {
        result = databaseAppSettings[upperKey];
    }

    if (result != null)
    {
        string machineName = Environment.MachineName;
        if (key == "urlLegacyTradingWebSite" || key == "TS2008RootUrl" || key == "urlTradingCDN")
        {
            if (machineName == "stl-webtest01")
            {
                result = result.Replace("webtest1", "stl-webtest01");
            }
            else if (machineName == "stl-webprd01")
            {
                result = result.Replace("webtest1", "stl-webprd01");
            }
        }

        return result.Replace("Application Name=None", "Application Name=" + GetApplicationName());
    }

    return null;
}
