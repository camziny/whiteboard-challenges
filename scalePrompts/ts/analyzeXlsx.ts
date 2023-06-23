import { Workbook } from "exceljs";

interface Style {
  fontSize: number;
  fontName: string;
  color?: string;
  backgroundColor?: string;
  italic: boolean;
  bold: boolean;
  underline?: boolean;
  struckthrough: boolean;
  cells: string[];
}

// styleMap will store all the unique styles
const styleMap: Map<string, Style> = new Map();

async function analyzeXlsx(fileName: string) {
  const workbook = new Workbook();
  await workbook.xlsx.readFile(fileName);

  workbook.eachSheet((sheet) => {
    sheet.eachRow((row) => {
      row.eachCell((cell) => {
        const font = cell.style.font;
        const fill = cell.style.fill;

        if (font || fill) {
          const style: Style = {
            fontSize: font?.size || 0,
            fontName: font?.name || "",
            color: font?.color ? font.color.argb : "",
            italic: font?.italic || false,
            bold: font?.bold || false,
            struckthrough: font?.strike || false,
            cells: [],
          };

          // Generate a unique key for the style
          const styleKey = JSON.stringify(style);

          // If the style is already in the map, just add the cell reference to the list of cells
          if (styleMap.has(styleKey)) {
            styleMap.get(styleKey)?.cells.push(cell.address);
          } else {
            // Otherwise, add the style to the map and include the current cell reference
            style.cells.push(cell.address);
            styleMap.set(styleKey, style);
          }
        }
      });
    });
  });

  // Log the styleMap to see the results
  console.log(styleMap);
}

analyzeXlsx("path_to_your_file.xlsx");
