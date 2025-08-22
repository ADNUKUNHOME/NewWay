/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "pdf-parse" {
    import { Buffer } from "buffer";

    interface PDFData {
        numpages: number;
        numrender: number;
        info: any;
        metadata: any;
        version: string;
        text: string;
    }

    function pdf(buffer: Buffer, options?: any): Promise<PDFData>;
    export = pdf;
}
