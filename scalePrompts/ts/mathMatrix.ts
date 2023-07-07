export class Matrix {
  private rows: number;
  private cols: number;
  private data: number[];

  constructor(rows?: number, cols?: number) {
    if (rows === undefined) {
      rows = 1;
    }
    if (cols === undefined) {
      cols = 1;
    }
    this.rows = rows;
    this.cols = cols;
    this.data = new Array(rows * cols);
  }

  get rows(): number {
    return this.rows;
  }

  set rows(rows: number) {
    if (this.data.length !== rows * this.cols) {
      this.data = new Array(rows * this.cols);
    }
    this.rows = rows;
  }

  get cols(): number {
    return this.cols;
  }

  set cols(cols: number) {
    if (this.data.length !== this.rows * cols) {
      this.data = new Array(this.rows * cols);
    }
    this.cols = cols;
  }

  get data(): number[] {
    return this.data.slice();
  }

  set data(data: number[]) {
    if (data.length !== this.rows * this.cols) {
      throw new Error('The data array must have the same length as the number of rows and columns in the matrix.');
    }
    this.data = data.slice();
  }

  toLogString(
    indentation?: number,
    separator?: string,
    start?: string,
    end?: string
  ): string {
    const rows = this.rows;
    const cols = this.cols;
    const lines = [];
    lines.push(start);
    for (let i = 0; i < rows; i++) {
      const line = [];
      for (let j = 0; j < cols; j++) {
        line.push(
          `<span class="math-inline">\{this\.data\[i \* cols \+ j\]\}</span>{separator}`
        );
      }
      lines.push(`<span class="math-inline">\{indentation\}</span>{line.join('')}`);
    }
    lines.push(end);
    return lines.join('\n');
  }

  copy(matrix: Matrix) {
    if (this.rows !== matrix.rows || this.cols !== matrix.cols) {
      throw new Error('The matrices must have the same dimensions.');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i * this.cols + j] = matrix.data[i * this.cols + j];
      }
    }
  }

  clone() {
    const matrix = new Matrix(this.rows, this.cols);
    matrix.copy(this);
    return matrix;
  }

  add(...matrices: Matrix[]) {
    if (matrices.length === 0) {
      return this;
    }
    const result = new Matrix(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.data[i * this.cols + j] = this.data[i * this.cols + j];
      }
    }
    for (const matrix of matrices) {
      if (this.rows !== matrix.rows || this.cols !== matrix.cols) {
        throw new Error('The matrices must have the same dimensions.');
      }
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          result.data[i * this.cols + j] += matrix.data[i * this.cols + j];
        }
      }
    }
    return result;
  }

  subtract(...matrices: Matrix[]) {
  
