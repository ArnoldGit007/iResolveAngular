import { Deserializable } from './deserializable.model'

export class Project implements Deserializable {
    public Id: number
    public Name: string
    public Description: string
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
