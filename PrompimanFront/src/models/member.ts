import { DateTime } from '@mobiscroll/angular/src/js/presets/datetime';

export class member {
    public id: string;
    public idCard: string;
    public passportNo: string;
    public th_Prefix: string;
    public th_Firstname: string;
    public th_Lastname: string;
    public en_Prefix: string;
    public en_Firstname: string;
    public en_Lastname: string;
    public sex: string;
    public birthday: DateTime;
    public address: string;
    public issueDate: DateTime;
    public expiryDate: DateTime;
    public telephone: string;
    public job: string;
    public nationality: string;
    public photo: string;
    public creationDateTime: DateTime;
    public lastUpdate: DateTime;
}
