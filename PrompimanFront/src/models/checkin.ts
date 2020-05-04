class Master {
    _id: string
    MemberId: string
    Name: string
    Telephone: string
    GroupName: string
    CheckInDate: Date
    CheckOutDate: Date
    Rooms: RoomSelected[]
    Reserve: number
    HaveRoomDeposit: boolean
    HaveTaxInvoice: boolean
    Deposit: number
    TotalCost: number
    Paid: number
    Remaining: number
    Active: boolean
    CreationDate: Date
    LastUpdate: Date
}

class RoomSelected {
    RoomNo: string
    Setting: SettingRoom
}

class SettingRoom {
    HaveBreakfast: boolean
    HaveAddBreakfast: boolean
    AddBreakfastCount: number
    HaveExtraBed: boolean
    ExtraBedCount: number
    Discount: number
}

class Reservation {
    _id: string
    Name: string
    Telephone: string
    CheckInDate: Date
    CheckOutDate: Date
    Rooms: RoomSelected[]
    Reserve: number
    IsConfirm: boolean
    Active: boolean
    Note: string
    CreationDate: Date
    LastUpdate: Date
}

class RoomActivate {
    _id: string
    GroupId: string
    RoomNo: string
    RoomType: string
    BedType: string
    Rate: number
    ArrivalDate: Date
    Departure: Date
    ExpenseList: Expense[]
    Status: string
    Active: boolean
    CreationDate: Date
    LastUpdate: Date
}

class Expense {
    IsPaid: boolean
    IsSelected: boolean
    Name: string
    Details: Detail[]
    TotalCost: number
    CreationDate: Date
}

class Detail {
    Name: string
    Cost: number
    Count: number
}

// export enum ClassActionTypes {
//     Verb1 = '[Class] Verb1',
//     Verb2 = '[Class] Verb2'
//     Verb2 = '[Class] Verb2'
//     Verb2 = '[Class] Verb2'
// }

// export enum ClassActionTypes {
//     Verb1 = '[Class] Verb1',
//     Verb2 = '[Class] Verb2'
//     Verb2 = '[Class] Verb2'
//     Verb2 = '[Class] Verb2'
// }
