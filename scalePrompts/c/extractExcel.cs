using System;
using System.IO;
using Microsoft.Office.Interop.PowerPoint;
using Microsoft.Office.Interop.Excel;

namespace ExtractExcelDataAndImportIntoPowerPoint
{
    class Program
    {
        static void Main(string[] args)
        {
            // Get the Excel workbook and sheet
            Excel.Workbook workbook = new Excel.Workbook();
            workbook.Open("ExcelData.xlsx");
            Excel.Worksheet sheet = workbook.Sheets["Sheet1"];

            // Get the cell data
            Excel.Range range = sheet.Range["A1:B5"];
            string[] cellData = range.Value.ToString().Split('\n');

            // Create a new PowerPoint presentation
            PowerPoint.Presentation presentation = new PowerPoint.Presentation();

            // Create a new table in the presentation
            PowerPoint.Slide slide = presentation.Slides[1];
            PowerPoint.Table table = slide.Shapes.AddTable(5, 2);

            // Insert the cell data into the table
            for (int i = 0; i < cellData.Length; i++)
            {
                table.Cells[i, 0].Text = cellData[i].Split(",")[0];
                table.Cells[i, 1].Text = cellData[i].Split(",")[1];
            }

            // Save the PowerPoint presentation
            presentation.Save("PowerPointTable.pptx");

            // Close the Excel workbook and PowerPoint presentation
            workbook.Close();
            presentation.Close();
        }
    }
}
