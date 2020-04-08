import { DateTime } from '@mobiscroll/angular/src/js/presets/datetime';

export class member {
    public id: string;
    public IdCard: string;
    public PassportNo: string;
    public Th_Prefix: string;
    public Th_Firstname: string;
    public Th_Lastname: string;
    public En_Prefix: string;
    public En_Firstname: string;
    public En_Lastname: string;
    public Sex: string;
    public Birthday: DateTime;
    public Address: string;
    public IssueDate: DateTime;
    public ExpiryDate: DateTime;
    public Telephone: string;
    public Job: string;
    public Nationality: string;
    public Photo: string;
    public CreationDateTime: DateTime;
    public LastUpdate: DateTime;
}
