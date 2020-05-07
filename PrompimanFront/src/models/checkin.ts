export class Master {
    _id: string
    memberId: string
    name: string
    telephone: string
    groupName: string
    checkInDate: Date
    checkOutDate: Date
    rooms: RoomSelected[]
    reserve: number
    haveRoomDeposit: boolean
    haveTaxInvoice: boolean
    deposit: number
    totalCost: number
    paid: number
    remaining: number
    active: boolean
    creationDateTime: Date
    lastUpdate: Date
}

export class MasterDetail {
    master: Master
    roomActLst: RoomActivate[]
}

export class Master_Info {
    _id: string
    groupName: string
    telephone: string
    bedNight: number
    daysLeft: number
    checkInDate: Date
    checkOutDate: Date
}

export class RoomSelected {
    roomNo: string
    setting: SettingRoom
}

export class SettingRoom {
    haveBreakfast: boolean
    haveAddBreakfast: boolean
    addBreakfastCount: number
    haveExtraBed: boolean
    extraBedCount: number
    discount: number
}

export class Reservation {
    _id: string
    name: string
    telephone: string
    checkInDate: Date
    checkOutDate: Date
    rooms: RoomSelected[]
    reserve: number
    isConfirm: boolean
    active: boolean
    note: string
    creationDateTime: Date
    lastUpdate: Date
}

export class RoomActivate {
    _id: string
    groupId: string
    roomNo: string
    roomType: string
    bedType: string
    rate: number
    discount: number
    arrivalDate: Date
    departure: Date
    expenseList: Expense[]
    totalCost: number
    paid: number
    remaining: number
    status: string
    note: string
    active: boolean
    creationDateTime: Date
    lastUpdate: Date
}

export class Expense {
    isPaid: boolean
    isSelected: boolean
    name: string
    details: Detail[]
    totalCost: number
    creationDateTime: Date
}

export class Detail {
    name: string
    cost: number
    count: number
}

export class Room {
    _id: string
    roomType: number
    bedType: number
    rate: number
    status: string                // ว่าง แจ้งซ่อม, ห้องพักผู้บริหา
}

export class DateRequest {
    checkInDate: Date
    checkOutDate: Date
}

export class PagingMaster {
    page: number;
    count: number;
    dataList: Master_Info[];
}

export class ReserveResponse {
    isSuccess: boolean;
    errorMessage: string;
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
