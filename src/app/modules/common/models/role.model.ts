import { Deserializable } from './deserializable.model'

export class Role implements Deserializable {
    public Id: number
    public Code: string
    public CreatedOn: string
    public CreatedBy: string
    public ModifiedOn: string
    public ModifiedBy: string
    public Archive: boolean
    public RowVersion: string
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
