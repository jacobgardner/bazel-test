import {times2} from '@jake/common';

export function echo() {
  // typefailure
  console.log('Echo', times2(32));
}
