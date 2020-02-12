import { Deserializable } from './deserializable.model'

export class User implements Deserializable {
    public Id: number
    public Email: string
    public Password: string
    public FirstName: string
    public LastName: string
    public RoleCode: string
    public LoginStatus: boolean
    public IsActivated: boolean
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
