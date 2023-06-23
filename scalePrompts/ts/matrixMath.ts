// matrixMath.d.ts

declare module "matrixmath/Matrix" {
  export default class Matrix {
    constructor(opt_rows?: number, opt_cols?: number, opt_setInitial?: boolean);

    rows: number;
    cols: number;
    length: number;

    static add(...matrices: Matrix[]): Matrix;
    static subtract(...matrices: Matrix[]): Matrix;
    static multiply(...matrices: (Matrix | number)[]): Matrix;
    static divide(matrix1: Matrix, matrix2: Matrix): Matrix;

    setIdentityData(): this;
    setEmptyData(): this;
    setData(data: number[], opt_rows?: number, opt_cols?: number): this;
    getData(): { data: number[]; rows: number; cols: number };
    toArray(): number[];
    toLogString(
      opt_indentation?: number | string,
      opt_separator?: string,
      opt_start?: string,
      opt_end?: string
    ): string;
    copy(matrix: Matrix): this;
    clone(): Matrix;
    add(...matrices: Matrix[]): this;
    subtract(...matrices: Matrix[]): this;
    multiply(...matrices: (Matrix | number)[]): this;
    divide(matrix: Matrix): this;
    power(number: number): this;
    transpose(): this;
    invert(): this;
    getDeterminant(): number;
    equals(input: Matrix | any[]): boolean;
    isIdentity(): boolean;
  }
}
