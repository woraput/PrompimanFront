import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'displayDate'
})
export class DisplayDatePipe implements PipeTransform {

  dayName: Array<string> = [
    'อาทิตย์',
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัสบดี',
    'ศุกร์',
    'เสาร์',
  ];

  monthFullName: Array<string> = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ];

  monthShortName: Array<string> = [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ];

  transform(value: any, args?: string): any {
    if (value == null) { return ''; }
    var date = new Date(value);
    if (args == null) { return 'format unknown'; }
    args = args.replace('fulldate', 'EEEE dd MMMM yyyy')
      .replace('date', 'dd MMMM yyyy')
      .replace('time', 'HH:mm')
      .replace('MMMM', this.monthFullName[date.getMonth()])
      .replace('MMM', this.monthShortName[date.getMonth()])
      .replace('yyyy', (date.getFullYear() + 543).toString())
      .replace('yy', (date.getFullYear() + 543).toString().substr(2))
      .replace('EEEE', this.dayName[date.getDay()]);
    return formatDate(date, args, 'en-US');
  }
}
