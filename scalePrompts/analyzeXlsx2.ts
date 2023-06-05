import { XLSX } from "xlsx";

function analyzeXLSXFile(file) {
  const workbook = XLSX.readFile(file);
  const sheets = workbook.Sheets;

  const styles = new Map<
    number,
    {
      fontSize: number;
      font: string;
      color: string;
      background: string;
      italics: boolean;
      bold: boolean;
      underline: boolean;
      struckthrough: boolean;
      cells: Array<string>;
    }
  >();

  for (const sheet of sheets) {
    const cells = sheet.Cells;

    for (const cell of cells) {
      const style = cell.Style;

      const styleObject = {
        fontSize: style.Font.Size,
        font: style.Font.Name,
        color: style.Fill.Color,
        background: style.Fill.BackgroundColor,
        italics: style.Font.Italic,
        bold: style.Font.Bold,
        underline: style.Font.Underline,
        struckthrough: style.Font.Strikethrough,
        cells: [cell.Address],
      };

      if (!styles.has(style.ID)) {
        styles.set(style.ID, styleObject);
      } else {
        styles.get(style.ID).cells.push(cell.Address);
      }
    }
  }

  return styles;
}
