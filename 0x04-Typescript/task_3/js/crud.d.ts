import { RowElement, RowID } from "./interface";

declare module "crud" {
    export function insert(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}