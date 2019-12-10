import {FileMetadata} from "./FileMetadata";
import {IBaseEntity} from "./IBaseEntity";

export interface File extends IBaseEntity {
    id: string,
    metadata: FileMetadata,
    dataValidator: string,
    dataOwner: string,
    serviceNode: string,
    createdAt: string,
    keepUntil: string,
    extension: string,
    mimeType: string,
    size: number,
    name: string,
    price: number
}
